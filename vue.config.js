const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}

const JS_CDN = [
    'https://cdn.bootcss.com/vue/2.6.10/vue.js',
    'https://cdn.bootcss.com/vuex/3.1.1/vuex.min.js',
    'https://cdn.bootcss.com/vue-router/3.0.7/vue-router.min.js',
    'https://cdn.bootcss.com/iview/3.4.2-rc.1/iview.min.js',
    'https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js',
    'https://cdn.bootcss.com/js-cookie/latest/js.cookie.min.js'
]

const CSS_CDN = [
    'https://cdn.bootcss.com/iview/3.4.2-rc.1/styles/iview.css'
]

const cdn = {
  css: CSS_CDN,
  js: JS_CDN
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    // build打包才使用CDN
    if (isProduction) {
      config.plugin('html')
      .tap(args => {
          args[0].cdn = cdn
        return args
      })
    }

    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
  },
  configureWebpack: config => {
    // 生产模式
    if (isProduction) {
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios':'axios',
        'iview': 'iview',
        'js-cookie': 'Cookies'
      }
      // 打包生产.gz包
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
      // 添加自定义代码压缩配置
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true,
            },
          },
          sourceMap: false,
          parallel: true,
        })
      )
    }
  }
}