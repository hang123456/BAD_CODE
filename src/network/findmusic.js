import {request} from './request'
//轮播图
export function banner(type){
    return request({
        url:'/banner',
        params:{
            type
        }
    })
}

//每日歌单
export function MusicList(){
    return request({
        url:'/personalized'
    })
}

//每日推荐
export function DaysRecommend(cookie,uid){
    return request({
        url:'/recommend/songs',
        params:{
            cookie,
            uid
        }
    })
}
