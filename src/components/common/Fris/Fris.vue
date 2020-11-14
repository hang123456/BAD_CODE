<template>
  <div class="fris">
    <fri-head class="fri-head"></fri-head>
    <fri-body class="fri-body"></fri-body>
  </div>
</template>
<script>
//导入两个组件
import FriHead from "./FriHead";
import FriBody from "./FriBody";

export default {
  name: "Fris",
  data(){
    return {
    }
  },
  components: {
    FriHead,
    FriBody,
  },

  created(){
    // console.log(this.$route.params.id);
    // console.log(123);
  }
};
</script>
<style	scoped>
.fris {
 overflow: auto;
 height: 551px;
}
</style>