// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   dev
// })

module.exports = {
  devServer: {
    allowedHosts: "all",
    client: {
      webSocketURL: {
        port: process.env.GITPOD_WORKSPACE_ID ? 443 : undefined,
      },
    },
    proxy: {
      '/api':{
        target: 'https://expert-carnival-p9x76xv4wq4f6rqj-8000.app.github.dev/'
      }
    }
  },
};