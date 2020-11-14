<template>
  <div class="person-recommend">
    <el-carousel :interval="6000" type="card" height="200px">
      <el-carousel-item v-for="(item,index) in banners" :key="index" width='462px'>
        <h3 class="medium"> <a :href="item.url" target="_blank">
        <img :src="item.pic" alt="">
        </a></h3> 

      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
//netRecommend
import { banner } from "../../../../network/findmusic";

export default {
  name: "PersonRecommend",
  data() {
    return {
      banners: [],
    };
  },
  mounted() {
    banner(1).then((res) => {
    //   console.log(res);
           this.banners =  res.data.banners
    });
  },
};
</script>
<style	scoped>
  .el-carousel__item {
    width: 389.2px;
    height: 180px;
    border-radius: 10px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
        /* width: 462.2px;
    height:180px; */
    margin: 0;
  }
   
 .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6; 
  } 

.el-carousel__item a img {
    width: 389.2px;
    height:180px;
}
</style>