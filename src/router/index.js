import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/page/index.vue'
import detail from '@/page/detail.vue'
import channelManage from '@/page/channelManage.vue'
import search from '@/page/search.vue'
import searchDetail from '@/page/searchDetail.vue'
import collection from '@/page/collection.vue'
import collectDetail from '@/page/collectDetail.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/collectDetail',
      name: 'collectDetail',
      component: collectDetail
    },
    {
      path: '/channelManage',
      component: channelManage
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/searchDetail',
      name: 'searchDetail',
      component: searchDetail
    },
    {
      path: '/collection',
      component: collection
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
