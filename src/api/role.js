import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/banting/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/banting/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/banting/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/banting/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/banting/role/${id}`,
    method: 'delete'
  })
}
