import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import User from './components/User.vue'
import Admin from './components/Admin.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)

const routes =[
  {
    path :'/user',
    component : User
  },
  {
    path :'/admin',
    component : Admin    
  },
  {
    path :'/',
    component : HelloWorld    
  }
]

const router=new VueRouter({routes,mode:'history'})
console.log(router)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
