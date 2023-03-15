/**
  @Author: Caven Chen
  @Date: 2023-03-14
**/

const { app, Menu, Tray, dialog } = require('electron')

const child = require('child_process')

let tray = null

const gotTheLock = app.requestSingleInstanceLock()

app.whenReady().then(() => {
  if (!gotTheLock) {
    dialog
      .showMessageBox({
        type: 'info',
        buttons: ['确认'],
        title: '提示',
        message: '程序已运行',
      })
      .then((result) => {
        if (result.response === 0) {
          app.quit()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  } else {
    tray = new Tray('./logo.ico')
    const contextMenu = Menu.buildFromTemplate([
      {
        label: '退出',
        click: () => {
          dialog
            .showMessageBox({
              type: 'question',
              buttons: ['确认', '取消'],
              title: '确认',
              message: '确定退出吗?',
            })
            .then((result) => {
              if (result.response === 0) {
                app.quit()
              }
            })
            .catch((error) => {
              console.log(error)
            })
        },
      },
    ])
    tray.setToolTip('vue electron  tray')
    tray.on('double-click', () => {
      child.execFile('server.exe')
    })
    tray.setContextMenu(contextMenu)
  }
})
