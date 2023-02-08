import request from '@/utils/request'
import { banting_params, banting_body } from '@/api/api_helper'


const systemApi = {
    url: '/banting/patient/v1',
    className: 'PatientLogic',
    uploadPatients: function (data) {
        return request({
            url: this.url,
            method: 'POST',
            headers:{'content-type': 'multipart/form-data;'},
            params: banting_params(this.className, 'countAddGroupPatient'),
            data: data
        })
    },   
}

export default systemApi