<template>
  <div class="player-info">
    <img :src="Img" alt="" title="点击查看歌曲详情" @click='MusicInfo' />
    <p class="music-name">{{ musicName }}</p>
    <p class="player">{{ Player }}</p>
  </div>
</template>
<script>
export default {
  name: "PlayerInfo",
  data() {
    return {
      Img: "",
      Player: "",
      musicName: "",
      flag: true
    };
  },
  methods:{
    MusicInfo(){
      this.$bus.$emit('MusicInfo',this.flag)
      this.flag = !this.flag

    }
  },
  created() {
    this.$bus.$on("item", (res) => {
      //  console.log(res);
      this.Img = res.al.picUrl;
      this.Player = res.ar[0].name;
      this.musicName = res.name;
    });
  },
  beforeDestory() {
    this.$bus.$off("item");
  },
};
</script>
<style	scoped>
.player-info {
  position: absolute;
  left: 20px;
  top: 10px;
  font-size: 14px;
}
.player-info img {
  float: left;
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 3px;
}
.player-info .music-name,
.player-info .player {
  position: absolute;
  width: 150px;
  height: 20px;
  right: -142px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.player-info .music-name {
  top: -10px;
}
.player-info .player {
  top: 20px;
}
</style>