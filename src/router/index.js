import Vue from 'vue'
import Router from 'vue-router'
import homeInfo from '@/components/homeinfo'
import mobileHomeInfo from '@/components/mobileHomeInfo'
import hostGuest from '@/components/hostGuest'
var router;
Vue.use(Router)
console.log(screen.width)
// 判断是手机浏览器查看 还是pc端查看
console.log(navigator.userAgent)
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
   // 此处为移动端登录
    router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'mobileHomeInfo',
        component: mobileHomeInfo
      }
    ]
  })
} else {
  // 此处为pc端登录
    router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/homeInfo',
        name: 'homeinfo',
        component: homeInfo
      },
      {
        path: '/hostGuest',
        name: 'hostGuest',
        component: hostGuest
      }
    ]
  })
}
export default router
