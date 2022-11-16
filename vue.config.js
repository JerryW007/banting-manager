'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'disease queue manager system' // page title
const port = process.env.port || process.env.npm_config_port || 9527 // dev port
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  transpileDependencies: ['swiper'],
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy:{
      "/banting":{
        target: "http://localhost:8887",
        changOrigin: true
      },
      "/prt":{
        target: "http://dev-02.hsasystem.com",
        ws:true,
        changOrigin: true,
      }
    },
  },
  configureWebpack: {
    name: name,
    // devtool: 'eval-source-map',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    performance:{//打包文件大小配置
      "maxEntrypointSize": 10000000,
      "maxAssetSize": 30000000
    },
    plugins:[new HtmlWebpackPlugin({
      template:'./public/index.html'
    })]
  },
  pages:{
    index:{
      entry: 'src/main.js'
    }
  },
  chainWebpack(config) {
    config.plugin(`preload-index`).use(HtmlWebpackPlugin).tap(() => [
      {
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/],
        include: 'initial'
      }
    ])
   

    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          // config
          //   .plugin('html')
          //   .use(HtmlWebpackPlugin).tap();
          config
          .plugin('ScriptExtHtmlWebpackPlugin')
          .after('html')
          .use('script-ext-html-webpack-plugin')
          .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
