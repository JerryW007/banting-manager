import request from '@/utils/request'
import { banting_params, banting_body } from '@/api/api_helper'


const translation = {
    url: '/banting/comn/v1',
    className: 'TranslationLogic',
    getTranslationList: function () {
        return request({
            url: this.url,
            method: 'POST',
            params: banting_params(this.className, 'getAllTranslation'),
            data: banting_body({ "lang_id": "zh-CN" })
        })
    },
}

export default translation