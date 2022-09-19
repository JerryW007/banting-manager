import request from '@/utils/request'
import {banting_params} from '@/api/api_helper'

const admin = {
    url: '/banting/admin/v1',    
    dbInfo: function () {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params('DbLogic', 'dbStatus')
        })
    },
    
}

export default admin