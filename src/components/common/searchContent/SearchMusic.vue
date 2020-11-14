<template>
    <div class="musiclists">
        <div class="nav">
            <span v-for="(item,index) in TopSearch" :key="index" :class="{active: index == currentIndex}" @click="NavChange(index)">{{ item }}</span>
        </div>
        <search-musics class="search-musics"></search-musics>
    </div>
</template>
<script>
import SearchMusics from './SearchMusics'

     export default {
        name:'SearchMusic',
        data(){
            return {
                currentIndex: 0,
                MusicLists:[],
                TopSearch:['单曲','视频','歌单','用户']
            }
        },
        components:{
            SearchMusics
        },
        methods:{
            NavChange(index){
                this.currentIndex = index
            }
        }
    }	
</script>
<style	scoped>
.musiclists {
    overflow: auto;
    height: 535px;
}
.active {
    font-weight: 700;
}
.nav {
    padding:0 0  10px 20px;
    margin-top: 30px;
    border-bottom: 1px solid #999;
}    
.nav span {
    margin-right: 20px;
    margin-bottom: 10px;
}
.nav span:hover {
    cursor: pointer;
}

</style>