/**
  @Author: Caven Chen
  @Date: 2023-03-14
**/

const showBanner = require('node-banner')
const open = require('open')
const express = require('express')
const portscanner = require('portscanner')

const port = 9999

let app = undefined

showBanner('Vue Electron Tray ', '', 'yellow').then(() => {
  portscanner.checkPortStatus(port, 'localhost').then((status) => {
    if (status === 'closed') {
      app = express()
      app.listen(port)
      app.use(express.static('views'))
    }
    open(`http://localhost:${port}`, { app: { name: 'chrome' } })
  })
})
