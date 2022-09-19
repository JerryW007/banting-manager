import request from '@/utils/request'
import { banting_params } from '@/api/api_helper'


const question = {
    url: '/banting/question/v1',
    getAllQuestions: function () {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params('QuestionLogic', 'allQuestion')
        })
    }
}

export default question