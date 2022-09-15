import request from '@/utils/request'

export function login(body) {
  let reqData = { body: { username: body.username, password: body.password },header:{lang: "zh"}} 
  return request({
    url: '/banting/admin/v1',
    method: 'POST',
    headers: { "content-type": "text/plain; charset=utf-8" },
    params:{
      serviceId:"AdminLogic.login"
    },
    data:reqData
  })

}

export function getInfo(token) {
  return request({
    url: '/banting/admin/v1',
    method: 'post',
    headers:{token:token},
    params:{
      serviceId:"AdminLogic.getUserInfo"
    }
  })
}

export function logout() {
  return request({
    url: '/banting/user/logout',
    method: 'post'
  })
}
