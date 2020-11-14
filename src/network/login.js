import {request} from './request'
//登录的验证信息接口
export function login(phone,password){
    return request({
        url: '/login/cellphone',
        params: {
            phone,
            password
        }
    })
}
//发送验证码
export function sent(phone){
    return request({
        url: '/captcha/sent',
        params: {
            phone
        }
    })
}
//确认验证码
export function  verify(phone,captcha){
    return request({
        url: '/captcha/verify',
        params: {
            phone,
            captcha
        }
    })
}
//注册并登录
export function  cellphone(captcha,phone,password,nickname){
    return request({
        url: '/register/cellphone',
        params: {
            captcha,
            phone,
            password,
            nickname
        }
    })
}