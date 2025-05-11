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
        //target: 'https://rable.duckdns.org/'
        target: 'https://solid-space-happiness-6wjvpj6qp6jhr6qp-8000.app.github.dev/'
      }
    }
  },
};
