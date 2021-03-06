import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

let vm = null
/**
 * 渲染函数
 * appContent 子应用html内容
 * loading 子应用加载效果，可选
 */
function render ({ appContent, loading } = {}) {
  if (!vm) {
    vm = new Vue({
      router,
      store,
      data () {
        return {
          content: appContent,
          loading
        }
      },
      render (h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading
          }
        })
      }
    }).$mount('#root')
  } else {
    // debugger
    vm.content = appContent
    vm.loading = false
  }
}

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule (routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix)
}

function initApp () {
  render({ appContent: '', loading: true })
}

const isProduction = process.env.NODE_ENV === 'production'
if (!isProduction) {
  registerMicroApps([
    { name: 'child app', entry: '//localhost:9001/A', render, activeRule: genActiveRule('/A') },
    { name: 'child2 app', entry: '//localhost:9002/B', render, activeRule: genActiveRule('/B') }
    // { name: 'vue app', entry: { scripts: ['//localhost:7100/main.js'] }, render, activeRule: genActiveRule('/vue') },
  ])
} else {
  registerMicroApps([
    { name: 'child app', entry: '/A', render, activeRule: genActiveRule('/A') },
    { name: 'child2 app', entry: '/B', render, activeRule: genActiveRule('/B') }
    // { name: 'vue app', entry: { scripts: ['//localhost:7100/main.js'] }, render, activeRule: genActiveRule('/vue') },
  ])
}

start()

initApp()

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
