import Vue from 'vue'
import App from './App.vue'
import './assets/style/test.css'
import './assets/style/test_stylus.styl'

const root = document.createElement('div')
document.body.appendChild(root)
//按s聚焦输入框
document.body.addEventListener('keyup', (e) => {
  if (e.code === 'KeyS') {
    // console.log('focus input!!!!!!!!')
    document.getElementsByTagName('input')[0].focus()
  }
})

new Vue({
  render: (h) => h(App)
}).$mount(root)
