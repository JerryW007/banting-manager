import request from '@/utils/request'
import {banting_params} from '@/api/api_helper'
export function login(body) {
  let reqData = { body: { username: body.username, password: body.password }, header: { lang: "zh" } }
  return request({
    url: '/banting/admin/v1',
    method: 'POST',
    data: reqData,
    params:banting_params('AdminLogic','login')
  })

}

export function getInfo(token) {
  return request({
    url: '/banting/admin/v1',
    method: 'post',
    params: {
      serviceId: "AdminLogic.getUserInfo"
    }
  })
}

export function logout() {
  return request({
    url: '/banting/user/logout',
    method: 'post'
  })
}
