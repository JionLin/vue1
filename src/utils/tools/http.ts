import axios from 'axios'
import qs from 'qs'
import { showErrorMsg } from '../common/tip'
const whiteList: Array<string> = []
const doHttpResponse = (response: any) => {
    const contentType = response.headers['content-type']
    if (contentType && contentType.startsWith('text/html')) {
        window.document.open()
        window.document.write(response.data)
        window.document.close()
    } else {
        if (response && response.data) {
            return response.data
        } else {
            return null
        }
    }
}
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    error.message.indexOf('timeout') !== -1 && showErrorMsg('请求超时，请联系管理员')
    if (error.response !== undefined && error.response.status !== undefined) {
        const httpCode =  error.response.status
        showErrorMsg(`错误码：${httpCode}, 请联系管理员`)
    } else {
        showErrorMsg('请求超时，请联系管理员')
    }
    return Promise.reject(error);
});

const proxy = ''
const orgin = process.env.NODE_ENV === 'development' ? proxy : ''

export const baseUrl = orgin
interface Options {
    noAccess?: boolean,
    type?: string,
    auth?: string,
    responseType?: string
}
interface Param extends Options{
    data?: Object,
    params?: Object,
    url: string,
    method: string,
    headers: {
        accessToken: any
    },
    responseType?: string
}
// 请求前配置组装
const handleParam = (url: string, data: object, method: string, options: Options) => {
    let param: Param = {
        url: /^http/.test(url) ? url : baseUrl + url,
        method: method,
        headers: {
            accessToken: window.accessToken
        },
        ...options
    }
    // 请求接口白名单
    if (whiteList.includes(url) || options.noAccess) {
        delete param.headers.accessToken
    }
    if (options.noAccess) {
        delete param.noAccess
    }
    let methods = ['POST', 'PUT', 'PATCH']
    // 判断参数放在请求主体还是URL
    if (methods.includes(method.toUpperCase())) {
        param.data = data
    } else {
        param.params = data
    }
    // 判断参数是否需要对象序列化
    if (options.type && options.type === 'qs') {
        param.data = qs.stringify(param.data)
    }
    return param
}
const creatPromise = (param: any)=>{
    return axios(param).then((res: any) => {
        if (param.responseType === 'blob') {
            return res.data
        } else {
            return doHttpResponse(res)
        }
    })
}
/** 
 * get，post，put，deleteAjax，patch，postUpload，postDownload传参公共解释
 * @param url       接口地址    String
 * @param data      接口参数    Object
 * @param options   接口额外配置 Object
 * @param options - type qs接口参数序列化 String
 * @param options - headers 自定义接口请求头 Object
 * @param options - auth Authorization标头的值
*/
// get请求
export const get = (url: string, data: any = {}, options = {}) => {
    let headers = {
        // paramsSerializer: params => qs.stringify(params, {arrayFormat: 'indices'})
    }
    data.cacheHash = new Date().getTime()
    let param = handleParam(url, data, 'get', Object.assign({ ...headers }, options))
    return creatPromise(param)
}
// post请求
export const post = (url: string, data = {}, options = {}) => {
    let param = handleParam(url, data, 'post', options)
    return creatPromise(param)
}
// put请求
export const put = (url: string, data: any = {}, options: Options = {}) => {
    let headers = {
        'Authorization': options.auth || null,
        'Content-Type': 'multipart/form-data',
        // 'x-amz-date': new Date().toGMTString()
    }
    data.cacheHash = new Date().getTime()
    let param = handleParam(url, data, 'put', Object.assign({ ...headers }, options))
    return creatPromise(param)
}
// delete请求
export const deleteAjax = (url: string, data = {}, options = {}) => {
    let param = handleParam(url, data, 'delete', options)
    return creatPromise(param)
}
// patch请求
export const patch = (url: string, data = {}, options = {}) => {
    let param = handleParam(url, data, 'patch', options)
    return creatPromise(param)
}
// 公共上传请求
export const postUpload = (url: string, data = {}, options = {}) => {
    let param = handleParam(url, data, 'post', Object.assign({ noAccess: true }, options))
    return creatPromise(param)
}
// 公共下载文件二进制流请求
export const postDownload = (url: string, data = {}, options = {}) => {
    let optionParam: Options = {
        responseType: 'blob',
        ...options
    }
    let param = handleParam(url, data, 'post', optionParam)
    return creatPromise(param)
}