import { request } from './request'

export function userPlaylist(uid){
    return request({
        url: '/user/playlist',
        params:{
            uid
        }
    })
}
