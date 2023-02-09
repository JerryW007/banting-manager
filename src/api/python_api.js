import axios from 'axios'
let pRequest = axios.create({
    url: '/prt/execute?appkey=49fcf94467ac43dea298576685bd6d29&timestamp=1655282700&sign=73c05144fc0e8cbb89bd883b8d978465',
    headers: { "content-type": "text/plain; charset=utf-8" },
    timeout: 5000 // request timeout
})

const pApi = {
    getQuestion: function (data) {
        return pRequest({
            method: 'POST',
            data: {
                body: {
                    cmd: 'get_questions',
                    data: {
                        patientInfo: {
                            disease_id: data.disease_id,
                            project_tag: data.project_tag,
                            empi: 20,
                            patient_id: '1524197'
                        },
                        source_keys: data.source_keys
                    }
                },
                header: {
                    lang: "zh"
                }
            }
        })
    }
}

export default pApi