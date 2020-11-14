<template>
  <div class="left">
    <ul ref="uls" class="top">
      <li
        v-for="(item, index) in count"
        :key="index"
        @click="BtnClick(index)"
        :class="{ curret: index == curretIndex }"
      >
        {{ item }}
      </li>
    </ul>
    <p v-for="(item, index) in likedMuisc" :key="index" @click="PClick(index,item.id)" v-show="flag" :class="{curret: index == (curretIndex - 11)}">{{ item.name }}</p>
  </div>
</template>
<script>
import { userPlaylist } from '../../../network/userList'

export default {
  name: "left",
  data() {
    return {
      likedMuisc: [],
      flag: false,
      count: [
        "发现音乐",
        "视频",
        "朋友",
        "直播",
        "私人FM",
        "我的音乐",
        "本地音乐",
        "下载管理",
        "我的音乐云盘",
        "我的收藏",
        "创建的歌单",
      ],
      curretIndex: 0,
      routers: [
        "HomePage",
        "Video",
        "Friend",
        "Live",
        "Personal",
        "",
        "LocalMusic",
        "MusicControl",
        "MyMusicCloud",
        "MyCollections",
        ''
      ],
    };
  },
  mounted(){
      userPlaylist(this.$store.state.uid).then(res => {
        //   console.log(res);
        this.likedMuisc = res.data.playlist
      })
  },
  methods: {
    BtnClick(index) {
      if (index == 5 || index == 10) {
        // this.curretIndex
        this.flag = !this.flag
      }  else {
      let path = this.routers[index];
      this.curretIndex = index;
        this.$router.push({
          path: path + "",
        });
      }
    },
    PClick(index,id){
        // console.log(index + 11);
        // console.log('click');
        // console.log(id);
        let ids = id
        this.curretIndex = (index + 11)
        this.$store.commit('MusicId',id)
        this.$bus.$emit('MusicIdSent',id)
            this.$router.push({
                path: 'Fris',
                params:{
                    ids: ids
                }
            })
    }
  },
};
</script>
<style	scoped>
.left {
  overflow: auto;
}
ul {
  padding-left: 5px;
}
li {
  /* text-align:left; */
  line-height: 43px;
  margin: 1px 5px;
  padding-left: 3px;
  list-style: none;
  height: 40px;
  width: 180px;
  border-radius: 3px;
  /* background-color: rgba(0,0,0,.2); */
}
li:nth-child(6),
li:nth-child(11) {
  color: #ccc;
  font-size: 14px;
}
.curret {
  background-color: rgba(0, 0, 0, 0.1);
}
li:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
}
li:nth-child(6):hover,
li:nth-child(11):hover {
  cursor: pointer;
  background-color: #fff;
}
p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 40px;
  margin-left: 5px;
  margin-bottom: -15px;
  height: 40px;
  width: 180px;
  border-radius: 3px;
}
p:hover {
    cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>