<template>
    <div class="mainbody">
      <masks class='mask'></masks>
      <router-view></router-view>
    </div>
</template>
<script>
import Masks from '../Bottom/Masks'
     export default {
        name:'mainbody',
        components:{
          Masks
        }	
    }	
</script>
<style	scoped>
 .mask {
  z-index: 999;
  position: absolute;
  left: -201px;
  bottom: 0;
}   
</style>