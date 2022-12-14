import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import tableRouter from './modules/table'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'profile',
        meta: { title: '简介', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/
  // tableRouter,
  {
    path:'/question',
    component: Layout,
    name:'question',
    redirect:'/question/list',
    meta: {
      title: '题库管理',
      icon: 'el-icon-s-order'
    },
    children:[
      {
        path: 'list',
        component: () => import('@/views/questions/list'),
        name: 'questionList',
        meta: { title: '题库列表', icon: 'list' }
      },
      {
        path: 'relation',
        component: () => import('@/views/questions/relation'),
        name: 'relation',
        meta: { title: '题库依赖配置', icon: 'el-icon-attract'},
      },
      // {
      //   path: 'termConfig',
      //   component: () => import('@/views/questions/termConfig'),
      //   name: 'termConfig',
      //   meta: { title: '题库选项配置', icon: 'edit' }
      // },
    ]
  },
  {
    path:'/formLibrary',
    component: Layout,
    name:'formLibrary',
    redirect:'/formLibrary/list',
    meta: {
      title: '表单管理',
      icon: 'el-icon-film'
    },
    children:[
      {
        path: 'list',
        component: () => import('@/views/formLibrary/index'),
        name: 'formLibraryList',
        meta: { title: '表单列表', icon: 'el-icon-film' }
      }
    ]
  },
  {
    path:'/driver',
    component: Layout,
    name:'formLibrary',
    redirect:'/driver/questionnaire',
    meta: {
      title: '数据驱动管理',
      icon: 'el-icon-office-building'
    },
    children:[
      {
        path: 'create_questionnaire',
        component: () => import('@/views/data_driver/create_questionnaire'),
        name: 'createQuestionnaire',
        meta: { title: '创建问卷', icon: 'el-icon-office-building' }
      },
      {
        path: 'questionnaire',
        component: () => import('@/views/data_driver/questionnaire'),
        name: 'questionnaire',
        meta: { title: '问卷列表', icon: 'el-icon-office-building' }
      },
      // {
      //   path: 'example_sll',
      //   component: () => import('@/views/data_driver/example_sll'),
      //   name: 'exampleSll',
      //   meta: { title: '数据驱动样例SLL', icon: 'el-icon-office-building' }
      // },
      // {
      //   path: 'example_aml',
      //   component: () => import('@/views/data_driver/example_aml'),
      //   name: 'exampleAml',
      //   meta: { title: '数据驱动样例AML', icon: 'el-icon-office-building' }
      // },
      // {
      //   path: 'example_all',
      //   component: () => import('@/views/data_driver/example_all'),
      //   name: 'exampleAll',
      //   meta: { title: '数据驱动样例ALL', icon: 'el-icon-office-building' }
      // },
      // {
      //   path: 'example_condition',
      //   component: () => import('@/views/data_driver/example_condition'),
      //   name: 'exampleCondition',
      //   meta: { title: '数据驱动样例-合并症', icon: 'el-icon-office-building' }
      // }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // base:'/dist/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
