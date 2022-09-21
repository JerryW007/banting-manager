import request from '@/utils/request'
import { banting_params, banting_body } from '@/api/api_helper'


const question = {
    url: '/banting/questions/v1',
    getAllQuestions: function (data) {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params('QuestionLogic', 'questionList'),
            data: banting_body(data)
        })
    },
    questionTerms: function (data) {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params('QuestionLogic', 'questionTerms'),
            data: banting_body(data)
        })
    },
    saveTermInfos: function (data) {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params('QuestionLogic', 'saveTermInfos'),
            data: banting_body(data)
        })
    },
    tableOptions:function (data) {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params('QuestionLogic', 'tableOptions'),
            data: banting_body(data)
        })
    },
    columnOptions:function (data) {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params('QuestionLogic', 'columnOptions'),
            data: banting_body(data)
        })
    },

}

export default question