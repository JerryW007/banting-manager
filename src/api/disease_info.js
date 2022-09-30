import request from '@/utils/request'
import { banting_params, banting_body } from '@/api/api_helper'


const diseaseInfo = {
    url: '/banting/system/v1',
    className: 'DiseaseInfoLogic',
    getAllDiseaseInfo: function (data) {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params(this.className, 'getAllDiseaseInfo'),
            data: banting_body(data)
        })
    },   
}

export default diseaseInfo