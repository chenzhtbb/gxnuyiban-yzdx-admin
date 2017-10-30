import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import NewsList from '@/components/slider-news/news-list'
import SliderNews from '@/components/slider-news/slider-news'
import Login from '@/components/login'

import Admin from '@/components/admin/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/newslist',
      component: NewsList
    },
    {
      path: '/slidernews',
      component: SliderNews
    }
  ]
})
