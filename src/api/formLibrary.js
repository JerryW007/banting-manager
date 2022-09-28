import request from '@/utils/request'
import { banting_params, banting_body } from '@/api/api_helper'


const formLibrary = {
    url: '/banting/system/v1',
    className: 'FormLibraryLogic',
    formList: function (data) {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params(this.className, 'formList'),
            data: banting_body(data)
        })
    },
    getForms: function (data) {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params(this.className, 'getForms'),
            data: banting_body(data)
        })
    },
    saveFormLibrary: function (data) {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params(this.className, 'saveFormLibrary'),
            data: banting_body(data)
        })
    },
    updateFormLibrary: function (data) {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params(this.className, 'updateFormLibrary'),
            data: banting_body(data)
        })
    },
}

export default formLibrary