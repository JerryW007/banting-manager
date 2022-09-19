/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: 'table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'table',
  meta: {
    title: '系统监测',
    icon: 'table'
  },
  children: [
    {
      path: 'dbLogic',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'dynamicTable',
      meta: { title: '数据库状态',url_params:'' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: '可拖拽表格' }
    },
  ]
}
export default tableRouter
