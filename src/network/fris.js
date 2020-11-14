import {request} from './request'
//获取歌单详情
export function MusicDetail(id){
    return request({
        url:'/playlist/detail',
        params:{
            id
        }
    })
}

export function SongsDetail(ids){
    return request({
        url: '/song/detail',
        params: {
            ids
        }
    })
}
export function SongUrl(id){
    return request({
        url: '/song/url',
        params:{
            id
        }
    })
}
//查看歌曲是否可用

export function valid(id){
    return request({
        url: '/check/music',
        params:{
            id
        }
    })
}
//歌曲评论
export function Comment(id,limit){
    return request({
        url: '/comment/playlist',
        params:{
            id,
            limit
        }
    })
}
//发送评论
export function SentComment(t,type,id,content){
    return request({
        url: '/comment',
        params: {
          t,
          type,
          id,
          content
        }
    })
}
