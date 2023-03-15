module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single'],
  },
  globals: {
    __SERVICE_URL__: false,
    Vue: false,
    Vuex: false,
    VueRouter: false,
    Fetch: false,
    Hub: false,
    echarts: false,
    axios: false,
    '%=': false,
  },
}
