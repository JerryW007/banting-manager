/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/dynamic-table',
  name: 'table',
  meta: {
    title: '系统监测',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'dynamicTable',
      meta: { title: '数据库状态',icon:'tree' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: '可拖拽表格', icon: 'tree-table' }
    },
  ]
}
export default tableRouter
