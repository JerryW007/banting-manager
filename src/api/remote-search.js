import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/banting/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/banting/transaction/list',
    method: 'get',
    params: query
  })
}
