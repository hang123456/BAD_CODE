<template>
  <div class="fri-head">
    <div class="left">
      <img v-if="MusicDetails" :src="MusicDetails.coverImgUrl" alt="" />
    </div>
    <div class="right">
      <div class="music-list">
        <span class="title-list">歌单</span>
        <span class="favo">我喜欢的音乐</span>
      </div>
      <!-- <div class="user">
        <img v-if="MusicDetails.creator" :src="MusicDetails.creator.avatarUrl" alt="" />
        <span v-if="MusicDetails" class="user-name">{{
          MusicDetails.name
        }}</span>
        <span v-if="MusicDetails" class="time-update">{{
          MusicDetails.createTime | timeUp
        }}</span>
      </div> -->
      <ul>
        <li>播放全部</li>
        <li>收藏</li>
        <li>分享</li>
        <li>下载全部</li>
      </ul>
      <div class="bottom-music">
        <span v-if="MusicDetails.trackIds" class="music-nums"
          >歌曲：{{ MusicDetails.trackIds.length }}</span
        >
        <span v-if="MusicDetails" class="play-nums"
          >播放:{{ MusicDetails.playCount | playNums}}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
//获取歌单详情
import { MusicDetail } from "../../../network/fris";

export default {
  name: "FriHead",
  data() {
    return {
      MusicDetails: {},
      // id: 0,
    };
  },
  created() {
    // console.log(1);
    // this.$bus.$on("MusicId", (res) => {
      // console.log(res);
      //   this.id = res;
      // this.id = res;
      // console.log(res);
      //  MusicDetail(res).then((res) => {
      // this.MusicDetails = res;
      // console.log(res);
      // console.log(this.$store.state.MusicId);
      // this.$bus.$on('MusicId',res => {
      //   console.log(res);
      // })
         MusicDetail(this.$store.state.MusicId).then(res => {
        // console.log(res.data.playlist);
        // this.$bus.$emit('MusicType',res.data.playlist.adType)
        this.MusicDetails = res.data.playlist
        })
    // });
      // let year = parseInt(this.MusicDetails.createTime / 1000 / 60 / 60 / 24 / 365)
      // let year1 = parseInt(year)
      // let lastDay = Math.ceil(year / 4) / 365;
      // let month = parseInt((year - year1 + lastDay) * 12);
      // console.log(lastDay);
      // console.log(year);
      // console.log(year1);
      // console.log(month);
      // let lastDay = Math.ceil(year / 4) / 365
      // console.log();
      // console.log();
      // var date = +new Date('1970-01-01 00:00:00')
      // console.log(date);
    // });
  },
  filters: {
    timeUp(value) {
      let year1 = value / 1000 / 60 / 60 / 24 / 365
      let year = parseInt(value / 1000 / 60 / 60 / 24 / 365);
      let lastDay = Math.ceil(year / 4) / 365;
      let month = parseInt((year1 - year + lastDay) * 12);
      let day = parseInt(((year1 - year) * 365) % 30) - parseInt(Math.ceil(year / 4)) + 2;
      year = year + 1970
      day = day >= 10 ? day : "0" + day;
      month = month >= 10 ? month : "0" + month ;
      return (year + '-' + month + '-' +  day)
    },
    playNums(value){
      value = value >= 10000 ? parseInt(value / 10000) : value
      return value + '万'
    }
  },
  beforeDestory(){
    this.$bus.$off('MusicIdSent')
  }
};
</script>
<style	scoped>
.fri-head {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 280px;
  padding: 40px;
}
.fri-head .left {
  margin-right: 30px;
  flex: 1.5;
  /* background-color: red; */
}
.fri-head .left img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  /* filter: blur(10px); */
}
.fri-head .right {
  flex: 4;
  /* background-color: pink; */
}
.right .music-list .title-list {
  font-size: 12px;
  color: red;
  padding: 3px;
  border: 0.3px solid red;
  margin-right: 20px;
}
.right .music-list .favo {
  font-size: 22px;
  color: rgb(55, 55, 55);
  font-weight: 700;
}

.right ul {
  margin-top: 38px;
  margin-left: -41px;
  /* box-sizing: border-box; */
}
/* .user {
  position: absolute;
  top: 54px;
  left: -340px;
}
.user img{
  margin-left: -5px;
  margin-top: 4px;
  width: 20px;
  height: 20px;
}
.user-name {
  position: absolute;
  top: 20px;
  left: 630px;
  color: black;
}
.time-update {
    position: absolute;
  top: 20px;
  left: 715px;
  color: black;
} */
.right ul li {
  list-style: none;
  float: left;
  margin-right: 10px;
  padding: 5px 10px;
  line-height: 16px;
  border: 0.3px solid #ccc;
  border-radius: 13px;
}
.bottom-music {
  margin-top:75px;
}
.bottom-music .music-nums {
  margin-right: 20px;
  font-size: 14px;
}
.bottom-music .play-nums {
  font-size: 14px;
}
</style>