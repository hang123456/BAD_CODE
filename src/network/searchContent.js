import { request } from './request'

//搜索建议
export function cloudSearch(keywords){
    return request({
        url: '/cloudsearch',
        params:{
            keywords
        }
    })
}

