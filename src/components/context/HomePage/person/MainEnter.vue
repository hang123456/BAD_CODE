<template>
  <div class="main-enter">
    <person-recommend class="preson-recommend"></person-recommend>
    <recommend-music class="recommend-music"></recommend-music>
  </div>
</template>
<script>
import PersonRecommend from "./PersonRecommend";
import RecommendMusic from "./RecommendMusic";

export default {
  name: "MainEnter",
  components: {
    PersonRecommend,
    RecommendMusic,
  },
};
</script>
<style	scoped>
.preson-recommend {
    margin-top: 65px;
}
.recommend-music {
    width: 100%;
    height: 500px;
    /* background-color: red; */
    margin: 0 0;
}
</style>