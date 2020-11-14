<template>
  <div class="bottom">
    <player-info></player-info>
    <audio :src="SongUrl" ref="audio" autoplay volume="50%"></audio>
    <el-slider v-model="value3" @change="change"></el-slider>
    <!-- {{ SongUrl }} -->
    <!-- <button @click='MusicBt'>开始</button> -->
    <div class="time">
      <span class="currtent-time">{{ currentTime | times }} / </span>
      <span class="duration">{{ duration | times }}</span>
    </div>
    <music-play-method
      class="methods"
      @click.native="NumChange"
      :nums="nums"
    ></music-play-method>
    <ul>
      <li class="before" @click='ToastShow'>
        <img src="../../../assets/img/before.png" alt="" />
      </li>
      <li @click="MusicBt">
        <img v-if="flag" src="../../../assets/img/begin.png" alt="" />
        <img v-else src="../../../assets/img/stop1.png" alt="" />
      </li>
      <li @click="MusicChange">
        <img src="../../../assets/img/next.png" alt="" />
      </li>
    </ul>
    <voice
      class="voice-control"
      @VoiceNum="VoiceNum($event)"
      @voice="voice($event)"
      @muted="muted()"
      ref="voice"
    ></voice>
  </div>
</template>
<script src='../../../components/common/responsive.js'></script>
<script>
import MusicPlayMethod from "./MusicPlayMethod";
import Voice from "./Voice";
import PlayerInfo from "./PlayerInfo";
import { TimeRun } from "./TimeRun";

export default {
  name: "bottom",
  data() {
    return {
      value3: 0,
      SongUrl: "",
      flag: false,
      nums: 0,
      duration: 0,
      currentTime: 0,
      end: false
    };
  },
  components: {
    MusicPlayMethod,
    Voice,
    PlayerInfo,
  },
  created() {
    this.$bus.$on("item", (res) => {
      //  console.log(res);
      this.duration = res.dt;
      // setTimeout(() => {
      //   this.MusicChange()
      // },res.dt)
    });
    this.$bus.$on("SongUrl", (url, flags) => {
      // console.log(res);
      // console.log(flags);
      this.SongUrl = url;
      // console.log(res);
      // this.MusicBt()
      // this.$refs.audio.play()
      this.flag = flags;
    });
  },
  mounted() {
      // this.end = this.$refs.audio.ended
    // console.log(this.currentTime);
    // this.$refs.audio.style.width = 500 + 'px'
    // TimeRun(this.$refs.audio,this.currentTime)
    if (this.$refs.audio.play) {
      this.currentTime = this.$refs.audio.currentTime;
    }

    this.$refs.audio.volume = 0.2;
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
    MusicBt() {
      if (this.SongUrl == "") {
        return true;
      }
      // console.log(123);
      // this.$refs.audio.play()
      if (this.flag == false) {
        this.$refs.audio.play();
        this.flag = true;
      } else {
        this.$refs.audio.pause();
        this.flag = false;
      }
    },
    NumChange() {
      console.log(this.nums);
      if (this.nums == 3) {
        this.nums = 0;
      } else {
        this.nums++;
      }
    },
    // change(){
    //   // console.log(123);
    //   // console.log(this.$refs.voice);
    //   // console.log(this.$refs.audio.volume)

    // },
    VoiceNum(value) {
      // console.log(value);
      this.$refs.audio.volume = value / 100;
    },
    voice(value) {
      this.$refs.audio.play();
      this.$refs.audio.volume = value / 100;
    },
    muted() {
      this.$refs.audio.volume = 0;
    },
    change() {
      // console.log(123);
      // console.log(this.$refs.audio.currentTime)
      // console.log(this.$refs.audio.duration);
      console.log(this.$refs.audio.duration);
      this.currentTime = this.$refs.audio.currentTime;
      console.log(this.currentTime);
      this.$refs.audio.currentTime = (
        (this.$refs.audio.duration / 100) *
        this.value3
      ).toFixed(5);
    },
    MusicChange() {
      this.$bus.$emit("MusicChange", this.nums);
    },
    ToastShow(){
      this.$toast.Toast('操你妈，再点击我三天之内鲨了你',10000)
      window.alert('操你妈，再点击我三天之内鲨了你')
    }
  },
  watch: {
    // SongUrl(oldValue,newValue) {
    // //   console.log(this.$refs.audio.duration);
    // this.oldValue = this.newValue
    // },
    flag(oldValue, newValue) {
      // if(oldValue == true || newValue == true){
      //   this.$refs.audio.play()
      // }
    },
    currentTime(oldValue, newValue) {
      oldValue = newValue;
    },
    end(oldValue,newValue){
      if(oldValue !== newValue){
        console.log(123);
        this.MusicChange()
      }
    }
  },
  filters: {
    times(value) {
      let minute = parseInt(value / 1000 / 60);
      let second = parseInt(value / 1000) % 60;
      minute = minute >= 10 ? minute : "0" + minute;
      second = second >= 10 ? second : "0" + second;
      return minute + ":" + second;
    },
  },
  beforeDestory() {
    this.$bus.$off("SongUrl");
    this.$bus.$off("item");
  },
};
</script>
<style	scoped>
.el-slider {
  position: absolute;
  left: 340px;
  top: 30px;
  width: 300px;
}
.bottom ul li {
  margin-right: 30px;
  list-style: none;
  float: left;
}
.bottom ul li:hover {
  cursor: pointer;
}
.bottom ul li img {
  width: 20px;
  height: 20px;
}
.bottom ul {
  position: absolute;
  top: -8px;
  left: 400px;
}
.methods {
  position: absolute;
  top: -8px;
  left: 350px;
}
.time {
  font-size: 14px;
  position: absolute;
  top: 40px;
  left: 650px;
}
</style> 