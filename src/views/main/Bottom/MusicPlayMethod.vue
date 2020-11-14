<template>
    <div class="music-play-method">
        <ul @click='TaostShow'>
            <li v-if="nums == 0"><img src="../../../assets/img/xunhuan.png" alt="" title="循环播放"></li>
            <li v-else-if="nums == 1"><img src="../../../assets/img/danquxunhuan.png" alt="" title="单曲循环"></li>
            <li v-else-if="nums == 2"><img src="../../../assets/img/huaban.png" alt="" title="心动模式"></li>
            <li v-else-if="nums == 3"><img src="../../../assets/img/suijibofang.png" alt="" title="随机播放"></li>
        </ul>
    </div>
</template>
<script>
     export default {
        name:'MusicPlayMethod',
        props:{
            nums: 0
        },
        methods:{
            TaostShow(){
            window.alert('这个不可以瞎点')
                this.$toast.Toast("你点你妈呢^--^ NMSL",5000)
            }
        }	
    }	
</script>
<style	scoped>
li {
    list-style: none;
}
.music-play-method ul li img:hover {
    cursor: pointer;
}
.music-play-method ul li img {
     width: 20px;
     height: 20px;
}    
</style>