const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 以相对路径为例 解决Nginx服务器上无法在文件夹里访问的问题
  publicPath:'./'
})
