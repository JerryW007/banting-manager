import request from '@/utils/request'
import { banting_params, banting_body } from '@/api/api_helper'


const questionnaire = {
    url: '/banting/system/v1',
    className: 'QuestionnaireLogic',
    getAllDiseaseInfo: function (data) {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params(this.className, 'getList'),
            data: banting_body(data)
        })
    },   
}

export default questionnaire