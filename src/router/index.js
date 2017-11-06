import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import NewsList from '@/components/slider-news/news-list'
import SliderNews from '@/components/slider-news/slider-news'
import Login from '@/components/login'
import BookList from '@/components/book/book-list'
import Admin from '@/components/admin/admin'

Vue.use(Router)

export default new Router({
  // base: '/yzdxamdin/',
  routes: [
    {
      path: '/',
      redirect: '/admin'
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '/',
          redirect: 'home'
        },
        {
          path: 'home',
          component: Home
        },
        {
          path: 'booklist',
          component: BookList
        },
        {
          path: 'newslist',
          component: NewsList
        },
        {
          path: 'slidernews',
          component: SliderNews
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
