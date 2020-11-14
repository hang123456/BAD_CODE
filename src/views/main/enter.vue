<template>
  <div class="enter">
    <top class="top"></top>
    <left class="left"></left>
    <mainbody class="mainbody"></mainbody>
    <bottom class="bottom"></bottom>
  </div>
</template>
<script>
import top from "./Top/top";
import mainbody from "./MainBody/mainbody";
import left from "./Left/left";
import bottom from "./Bottom/bottom";
export default {
  name: "enter",
  components: {
    top,
    mainbody,
    left,
    bottom,
  },
};
</script>
<style	scoped>
/* body {
    background-color:red;
} */
.enter {
  position: relative;
  margin: 20px auto;
  width: 1020px;
  height: 668px;
  background-color: red;
  box-shadow: 1px 1px 10px 3px #999;
  /* box-shadow: -3px 0px 3px #999; */
}
.top {
  position: absolute;
  width: 100%;
  height: 60px;
  background-color: rgb(236, 65, 65);
}
.left {
  position: absolute;
  top: 60px;
  left: 0;
  height: 535px;
  width: 200px;
  background-color: rgb(255, 255, 255);
}
.mainbody {
  position: absolute;
  top: 60px;
  left: 200px;
  width: 820px;
  height: 535px;
  background-color: rgb(255, 255, 255);
  border-left: 1px solid black;
}
.bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 73px;
  background-color: rgb(246, 246, 248);
}
</style>