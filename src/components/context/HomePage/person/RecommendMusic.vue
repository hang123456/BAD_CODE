<template>
  <div class="recommend-music">
    <h1 class="h-one">推荐歌单</h1>
    <ul class="clearfix" ref="imgs">
      <li
        @mouseenter.stop="imgShow(zero)"
        @mouseleave.stop="imgDisappear(zero)"
        @click="DayRecommends"
        ref="zero"
        class="first-recommend"
      >
        <img
          v-if="firstInfo.al"
          :src="firstInfo.al.picUrl"
          alt=""
          class="img"
        />
        <img src="../../../../assets/img/player.png" alt="" class="player" />
        <div class="infos">根据您的音乐口味生成每日跟新</div>
        <p class="info">每日推荐歌曲</p>
      </li>
      <li
        v-for="(item, index) in MusicLists"
        :key="index"
        @mouseenter.stop="imgShow(index)"
        @mouseleave.stop="imgDisappear(index)"
        @click="DayRecommendsOne(item.id)"
      >
        <img :src="item.picUrl" alt="" class="img" />
        <span class="play-nums">{{ item.playCount | formate }}</span>
        <p class="info">{{ item.name }}</p>
        <img src="../../../../assets/img/player.png" alt="" class="player" />
      </li>
    </ul>
  </div>
</template>
<script>
//获取每日歌单
import { MusicList, DaysRecommend } from "../../../../network/findmusic";

export default {
  name: "RecommendMusic",
  data() {
    return {
      MusicLists: [],
      firstInfo: {},
      zero: -1,
      id: 0,
    };
  },
  mounted() {
    MusicList().then((res) => {
      this.MusicLists = res.data.result;
      // console.log(res);
    });
    DaysRecommend(this.$store.state.cookie, this.$store.state.uid).then(
      (res) => {
        // console.log(res.data.data);
        this.firstInfo = res.data.data.dailySongs[1];
        this.id = res.data.data.dailySongs[1].id;
      }
    );
  },
  methods: {
    //图片显示和隐藏
    imgShow(index) {
      if (index == -1) {
        this.$refs.zero.children[1].style.display = "block";
        //  this.$refs.zero.children[2].style.display = "block";
      } else {
        //   console.log(item);
        // console.log(this.$refs.imgs.children);
        //   this.$refs.img.style.display = 'block'
        //   console.log(this.$refs.img);
        this.$refs.imgs.children[index + 1].children[3].style.display = "block";
        // console.log(123);
      }
    },
    imgDisappear(index) {
      //   this.$refs.img.style
      if (index == -1) {
        this.$refs.zero.children[1].style.display = "";
        // this.$refs.zero.children[2].style.display = "";
      } else {
        this.$refs.imgs.children[index + 1].children[3].style.display = "";
        //    console.log(321);
      }
    },
    DayRecommends() {
      let id = this.id;
      this.$store.commit("MusicId", id);
      this.$bus.$emit("MusicIdSent", id);
      setTimeout(() => {
        this.$router.push("/Fris");
      },1000)
    },

    DayRecommendsOne(id) {
      // console.log(id);
      this.$bus.$emit("MusicIdSent", id);
      this.$store.commit("MusicId", id);
       setTimeout(() => {
        this.$router.push("/Fris");
      },1000)
      // this.$bus.$emit('MusicId',id)
      // this.$store.state.MusicId = id
      // console.log(id);
    },
  },
  filters: {
    formate(value) {
      value = value >= 10000 ? (value / 10000).toFixed(0) + "万" : value;
      return value;
    },
  },
  // beforeDestory(){
  //       this.$bus.$emit('MusicId',id)
  // }
};
</script>
<style	scoped>
.h-one::after {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  border-right: 1px solid black;
  border-top: 1px solid black;
  transform: rotate(45deg);
}
.h-one {
  width: 90px;
  font-size: 18px;
}
.h-one:hover {
  cursor: pointer;
  opacity: 0.7;
}
.recommend-music ul {
  margin-left: 0;
  box-sizing: border-box;
  margin-left: -39px;
  height: 380px;
  overflow: hidden;
}
.recommend-music ul li {
  list-style: none;
  position: relative;
  width: 137px;
  height: 190px;
  float: left;
  margin-right: 15px;
}
.recommend-music ul li:hover {
  cursor: pointer;
}
/* .recommend-music ul li:nth-child(5n) {
  margin-right: 0;
} */
.img {
  width: 130px;
  height: 130px;
  border-radius: 3px;
  /* margin-bottom: 40px; */
}
.info {
  position: absolute;
  top: 120px;
  left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.play-nums {
  position: absolute;
  right: 15px;
  top: 3px;
  font-size: 12px;
  color: #fff;
}
.player {
  display: none;
  position: absolute;
  right: 15px;
  top: 95px;
  width: 30px;
  height: 30px;
}
.infos {
  /* display: none; */
  position: absolute;
  top: -70px;
  left: 0;
  width: 120px;
  height: 40px;
  color: #fff;
  font-size: 12px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
}
.first-recommend:hover .infos {
  /* animation:infoss 2s ease; */
  /* display: block; */
  /* position: absolute;
    top: -60px;
    left: 0; */
  top: 0;
}
/* @keyframes infoss{
    0% {
      top: -60px;
    }
    100% {
        top: 0;
    }
} */
.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
</style>