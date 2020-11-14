<template>
    <div class="home-page">
       <div class="main-body">
         <div class="nav-list">
             <ul>
                 <li v-for="(item,index) in navs" :key='index' @click="navClick(index)" :class='{active:currentIndex == index ? true : false}'>{{ item }}</li>
             </ul>
            <main-enter class='main-enter'></main-enter>
         </div>
       </div>
    </div>
</template>
<script>
import MainEnter from './person/MainEnter'

     export default {
        name:'HomePage',
        data(){
            return {
                navs:['个性推荐','歌单','主播电台','排行榜','歌手','最新音乐'],
                currentIndex: 0
            }
        },
        components: {
            MainEnter
        },  
        methods:{
            navClick(index){
                this.currentIndex = index
            }
        }	
    }	
</script>
<style	scoped>
.home-page {
    position: relative;
    /* overflow: ; */
    /* overflow: hidden; */
}    
li {
    list-style: none;
    float: left;
    margin: 10px 20px;
}
.main-body {
    position: absolute;
    top: 20px;
    left: 20px;
    /* transform: translateX(-50%); */
    right: 20px;
    width: 780px;
    /* height: 100%; */
    height: 535px;
    /* background-color: pink; */
    overflow: auto;
}
.nav-list ul {
    position: absolute;
    top: 0;
    left: 0;
}
.nav-list ul li:hover {
    cursor: pointer;
}
.active {
    font-weight: 700;
    font-size: 20px;
}

.main-enter {
    margin-top: 65px;
}
</style>