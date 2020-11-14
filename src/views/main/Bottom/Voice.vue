<template>
  <div class="voice">
    <img @click='imgBtn' v-if="num == 0" src="../../../assets/img/voice.png" alt="">
    <img @click='imgBtn'  v-else-if="num == 1" src="../../../assets/img/muted.png" alt="">
    <el-slider v-model="value3" @change="change"></el-slider>
  </div>
</template>
<script>
export default {
  name: "Voice",
  data() {
    return {
      value3: 20,
      num: 0
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
    imgBtn(){
       if(this.num == 0){
           this.num = 1
           this.$emit('muted',)
       }
       else{
            this.$emit('voice',this.value3)
            this.num = 0
       }
    },
    change(){
        // console.log(123);
        this.$emit('VoiceNum',this.value3)
        if(this.value3 == 0){
          this.num = 1
        }else{
          this.num = 0
        }
    },
    abc(){
        console.log(123);
    }
  }
}
</script>
<style	scoped>
.voice {
    position: absolute;
    top: 20px;
    right: 25px;
}
.voice img {
    /* margin-right:10px; */
    /* padding-top: 10px; */
    /* margin-right:10px ; */
    /* vertical-align: middle; */
    margin: 10px;
    float: left;
    width: 20px;
    height: 20px;
}
.voice .el-slider {
    float: left;
    width: 100px;
}
</style>