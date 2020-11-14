import {request} from './request'


//获取用户详情
export function user(uid){
    return request({
        url: '/user/detail',
        params: {
            uid
        }
    })
}