<template>
  <div class="fri-body">
    <div class="body-nav">
      <ul>
        <li
          v-for="(item, index) in NavList"
          :key="index"
          @click="NavIndex(index)"
          :class="{ curret: index == curretIndex }"
        >
          {{ item }} <span v-if="index == 1">( )</span>
        </li>
      </ul>
      <input type="text" placeholder="No Search" />
    </div>
    
    <div v-if="curretIndex == 0">
        <div class="describe">
      <ul>
        <li>音乐标题</li>
        <li>歌手</li>
        <li>专辑</li>
        <li>时长</li>
      </ul>
    </div>
      <div class="vip">开通vip享受多种特权，比如可以和骚金一起泡澡</div>
      <ul class="uls">
        <li
          v-for="(item, index) in SongsDetailes"
          :key="index"
          @dblclick="SongLive(item.id, item, index)"
        >
          <ul>
            <li>{{ index | Order }}</li>
            <li><img src="../../../assets/img/heart.png" alt="" /></li>
            <li><img src="../../../assets/img/download.png" alt="" /></li>
            <li>{{ item.name }}</li>
            <li>{{ item.ar[0].name }}</li>
            <li>{{ item.al.name }}</li>
            <li>{{ item.dt | timeUpdate }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <collectioners v-else-if="curretIndex == 2"></collectioners>
    <music-comments v-else-if="curretIndex == 1"></music-comments>
  </div>
</template>
<script>
//请求歌单详情
import {
  MusicDetail,
  SongsDetail,
  SongUrl,
  valid,
} from "../../../network/fris";

import Collectioners from './Collectioners.vue';
import MusicComments from './MusicComments.vue';

export default {
  name: "FriBody",
  data() {
    return {
      NavList: ["歌曲列表", "评论", "收藏者"],
      curretIndex: 0,
      SongsDetailes: [],
      MusicIndex: 0,
      //   flag: true
    };
  },
  components:{
      Collectioners,
      MusicComments
  },
  mounted() {
    this.$bus.$on("MusicChange", (nums) => {
      this.SongLive(
        this.SongsDetailes[this.MusicIndex].id,
        this.SongsDetailes[this.MusicIndex],
        this.MusicIndex
      );

      this.MusicIndex++;
        if (this.MusicIndex >= this.SongsDetailes.length) {
          this.MusicIndex = 0;
          this.SongLive(this.SongsDetailes[0].id, this.SongsDetailes[0], 0);
        } else {
          this.SongLive(
            this.SongsDetailes[this.MusicIndex].id,
            this.SongsDetailes[this.MusicIndex],
            this.MusicIndex
          );
        }
    });
  },
  created() {
          //   console.log(nums)
      // 0 => 循环播放
      // 1 => 单曲循环
      // 2 => 心动模式
      // 3 => 随机播放
      // valid(this.SongsDetailes[++this.MusicIndex].id).then(res => {
      //     console.log(res.data.massage);
      // })
      // console.log(this.MusicIndex);
      console.log(this.$route.params.id);
          MusicDetail(this.$store.state.MusicId).then((res) => {
      // console.log(res.data.playlist);
      let SongsIds = [];
      for (let i = 0; i < res.data.playlist.trackIds.length; i++) {
        SongsIds.push(res.data.playlist.trackIds[i].id);
      }
      let arrs = SongsIds.join();
      // console.log(arrs);
      SongsDetail(arrs).then((res) => {
        // console.log(res);
        this.SongsDetailes = res.data.songs;
    });
      })
  },
  methods: {
    NavIndex(index) {
      this.curretIndex = index;
    },
    SongLive(id, item, index) {
      //  console.log(id);
      // console.log(index);
      this.MusicIndex = index;
      // console.log(this.MusicIndex);

      let flag = true;
      SongUrl(id).then((res) => {
        //   console.log(res)
        // res.data.data[0].url
        this.$bus.$emit("item", item);
        this.$bus.$emit("SongUrl", res.data.data[0].url, flag);
        // this.$store.state.SongUrl = res.data.data[0].url
      });
    },
  },
  filters: {
    Order(value) {
      value = value >= 9 ? value + 1 : "0" + (value + 1);
      return value;
    },
    timeUpdate(value) {
      let minute = parseInt(value / 1000 / 60);
      let second = parseInt(value / 1000) % 60;
      minute = minute >= 10 ? minute : "0" + minute;
      second = second >= 10 ? second : "0" + second;
      return minute + ":" + second;
    },
  },
  beforeDestory() {
    this.$bus.$off("MusicChange");
    this.$bus.$off("MusicIdSent");
  },
};
</script>
<style	scoped>
/* .fir-body {
    margin-top: 2px solid black;
    height: 100px;
    width: 100%;
    background-color: pink;
}   */
li {
  list-style: none;
}
.body-nav {
  line-height: 40px;
  text-align: center;
  width: 780px;
  height: 40px;
  /* background-color: pink; */
}
input {
  float: right;
  width: 180px;
  height: 16px;
  border-radius: 10px;
  outline: none;
  color: #333;
  font-size: 14px;
  margin-top: 12px;
  padding-left: 15px;
  background-color: rgb(247, 247, 247);
  border: none;
}
.body-nav ul li:hover {
  cursor: pointer;
}
.body-nav ul li {
  font-size: 14px;
  float: left;
  margin-right: 20px;
}
.curret {
  border-bottom: 2px solid rgb(236, 65, 65);
  font-weight: 700;
}
.describe {
  margin-left: 120px;
  overflow: hidden;
  width: 660px;
  height: 30px;
}
.describe ul {
  width: 100%;
  float: right;
  display: flex;
  margin-top: 0;
}
.describe li {
  font-size: 14px;
  color: #999;
  line-height: 30px;
  text-align: center;
}
.describe li:nth-child(1) {
  flex: 19;
}
.describe li:nth-child(n):hover {
  cursor: pointer;
  background-color: rgb(242, 242, 242);
}
.describe li:nth-child(2) {
  flex: 9;
}

.describe li:nth-child(3) {
  flex: 12;
}

.describe li:nth-child(4) {
  flex: 5;
}
.vip {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0px;
  margin: -1px 0;
  width: 780px;
  height: 30px;
  line-height: 30px;
  padding-left: 30px;
  font-size: 14px;
  background-color: rgb(242, 242, 242);
}
.uls {
  width: 810px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-left: -40px;
  margin-top: 0;
}
.uls li {
  width: 100%;
  height: 100%;
}
.uls > li:nth-child(odd) {
  background-color: rgb(249, 249, 249);
}
.uls > li:nth-child(even) {
  background-color: #fff;
}
.uls > li:nth-child(1) {
  background-color: rgb(242, 242, 242);
}
.uls > li:hover {
  cursor: pointer;
  background-color: rgb(242, 242, 242);
}
.uls li ul {
  margin-left: -40px;
  display: flex;
  font-size: 14px;
}
.uls li ul li {
  /* margin: -1px; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.uls li ul li:nth-child(even) {
  margin-bottom: -1px;
}
.uls li ul li:nth-child(1) {
  flex: 3;
}
.uls li ul li:nth-child(2) {
  flex: 1.5;
}
.uls li ul li:nth-child(3) {
  flex: 1.8;
}
.uls li ul li:nth-child(4) {
  flex: 19;
  text-align: left;
}
.uls li ul li:nth-child(5) {
  flex: 9;
  text-align: left;
}
.uls li ul li:nth-child(6) {
  flex: 12;
  text-align: left;
}
.uls li ul li:nth-child(7) {
  flex: 5;
}
.uls li ul li img {
  width: 14px;
  height: 14px;
}
</style>