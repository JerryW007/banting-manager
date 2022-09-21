

export function banting_params(className, classMethod) {
    return { serviceId: className + '.' + classMethod }
}

export function banting_body(data) {
    return { header: { lang: 'zh' }, body: data }
}