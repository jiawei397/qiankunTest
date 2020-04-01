const path = require('path')
const packageName = require('./package.json').name

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/B',
  // process.env.NODE_ENV === 'production'
  // ? '/child/'
  // : '/',
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {
      fix: false // boolean (default: true)
      // files: '', // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
    }
  },
  chainWebpack: (config) => {
    // 设置 public 目录别名
    config.resolve.alias.set('#', resolve('public'))
    // 解决 vue-layer 使用时报错问题
    config.resolve.alias.set('vue$', 'vue/dist/vue.js')

    config.output.set('jsonpFunction', 'webpackJsonp_' + packageName)
    config.output.set('library', packageName + '-[name]')
    config.output.set('libraryTarget', 'umd')
    // config.output.set('publicPath','//localhost:1001');
    // if (process.env.NODE_ENV === 'production') {
    //   config.externals(['vue', 'vue-router', 'vuex']);
    // }
  },
  devServer: {
    inline: false, // 关闭热更新
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
