<template>
  <div class="music">
    <ul class="ul">
      <li><span></span><img src="" alt=""></li>
      <li>音乐标题</li>
      <li>歌手</li>
      <li>专辑</li>
      <li>时长</li>
    </ul>
    <ul class="uls">
      <li v-for="(item,index) in MusicLists" :key="index" @dblclick="SongLive(item.id,item,index)">
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
</template>
<script>
import { SongUrl } from '../../../network/fris'

export default {
  name: "SearchMusics",
  data() {
    return {
      MusicLists: [],
      MusicIndex:0
    };
  },
  created() {
     
    // this.MusicLists = this.$store.state.MusicLists;
    this.$bus.$on('MusicSearchLists',res => {
        // console.log(res);
         this.MusicLists = res
    })
  },
  mounted(){
       this.$bus.$on("MusicChange", (nums) => {
      this.SongLive(
        this.MusicLists[this.MusicIndex].id,
        this.MusicLists[this.MusicIndex],
        this.MusicIndex
      );

      this.MusicIndex++;
        if (this.MusicIndex >= this.MusicLists.length) {
          this.MusicIndex = 0;
          this.SongLive(this.MusicLists[0].id, this.MusicLists[0], 0);
        } else {
          this.SongLive(
            this.MusicLists[this.MusicIndex].id,
            this.MusicLists[this.MusicIndex],
            this.MusicIndex
          );
        }
    });
  },
  methods:{
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
      })
      }
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
    beforeDestory(){
        this.$bus.$off('MusicChange')
        this.$bus.$off('MusicSearchLists')
    }
};
</script>
<style	scoped>
li {
  list-style: none;
}
.ul{
  display: flex;
  margin-left: 100px;
}
.uls li ul {
    display: flex;
}
.uls li ul li:nth-child(1) {
  flex: 0.5;

}
.ul li:nth-child(1) {
  flex: 1;
}
.uls li ul li:nth-child(2) {
  flex: 0.5;

}
.ul li:nth-child(2) {
  flex: 4;
}
.uls li ul li:nth-child(3) {
  flex: 0.5;

}
.ul li:nth-child(3) {
  flex: 2;
}
.uls li ul li:nth-child(4) {
  flex: 4;

}
.ul li:nth-child(4) {
  flex: 2;
}
.uls li ul li:nth-child(5) {
  flex: 1.5;

}
.ul li:nth-child(5) {
  flex: 1;
}
.uls li ul li:nth-child(6) {
  flex: 2;

}
.uls li ul li {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    height: 30px;
    line-height: 30px;
}
.uls li ul li img{
  width: 16px;
  height: 16px;
}

.uls>li:nth-child(even) {
background-color: #fff;
}
.uls>li:nth-child(odd){
    background-color: rgb(249,249,249);
}
.uls li ul li:nth-child(7) {
  flex: 1;
}
.uls>li:hover {
      background-color: rgb(242,242,242);
}
</style>