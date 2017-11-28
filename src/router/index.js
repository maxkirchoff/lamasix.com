import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Work from '@/components/Work'
import SignUp from '@/components/SignUp'
import WorkWithUs from '@/components/WorkWithUs'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'About Us',
      component: About
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/work/:work_key',
      component: Work
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signup',
      redirect: {
        name: 'SignUp'
      }
    },
    {
      path: '/work-with-us',
      name: 'WorkWithUs',
      component: WorkWithUs
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
