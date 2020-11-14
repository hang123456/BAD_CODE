<template>
  <div class="music-comments">
    <textarea
      name="comment"
      id=""
      cols="70"
      rows="4"
      maxlength="450"
      placeholder="your comment"
      v-model="contents"
    ></textarea>
    <div class="btn" @click='CommentSent'>提交</div>
    <h3 class="h3">评论</h3>
    <ul class="uls">
      <li v-for="(item, index) in comments"  :key="index">
        <img :src="item.user.avatarUrl" alt="" class="imgs" />
        <span class="time">{{ item.time }}</span>
        <p class="name">
          <span>{{ item.user.nickname }}:</span> <span>{{ item.content }}</span>
        </p>
        <span class="reward">{{ item.likedCount }}</span>
        <div class="img"
        @click="reward(item.likedCount)"
          ><img src="../../../assets/img/reward.png" alt=""
        /></div>
      </li>
    </ul>
  </div>
</template>
<script>
//获取歌单评论
import { Comment,SentComment } from "../../../network/fris";
import { MusicDetail } from "../../../network/fris";

export default {
  name: "MusicComments",
  data() {
    return {
      comments: [],
      contents: '',
      MusicType: 0
    };
  },
  methods:{
      CommentSent(){
        //   console.log(123);
        // count++
        let nums = 1
        if(this.contents == ''){
            this.$toast.Toast("亲，您还没写评论呢^__^",5000)
            return 
        }else {
            console.log(this.contents);
             SentComment(nums,2,this.$store.state.MusicId,this.contents).then(res => {
             console.log(res);
         })
        }
      }
  },
  mounted(){
        MusicDetail(this.$store.state.MusicId).then(res => {
        // console.log(res.data.playlist);
        // this.$bus.$emit('MusicType',res.data.playlist.adType)
        // this.MusicDetails = res.data.playlist
        this.MusicType = res.data.playlist.adType
        })
  },
  created() {
    let limit = 30;
    Comment(this.$store.state.MusicId, limit).then((res) => {
    //   console.log(res);
      this.comments = res.data.comments;
    });
    
  },
  beforeDestory() {
    this.$bus.$off("MusicType");
  },
};
</script>
<style	scoped>
.music-comments {
  position: relative;
}
textarea {
  padding-left: 10px;
  font-size: 14px;
  outline: none;
  border-radius: 4px;
  position: absolute;
  left: 34px;
  top: 15px;
  width: 746px;
  height: 60px;
  /* outline: none; */
  resize: none;
}
.btn:hover {
  cursor: pointer;
}
.btn {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  position: absolute;
  top: 90px;
  right: 35px;
  line-height: 30px;
  text-align: center;
  background: -webkit-linear-gradient(left top, red, blue);
}
.h3 {
  position: absolute;
  top: 115px;
  left: 38px;
  font-size: 18px;
  width: 100%;
  height: 20px;
}
.uls {
  position: absolute;
  top: 150px;
  left: 0;
  width: 755px;
}
.uls li {
  position: relative;
  float: left;
  list-style: none;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #999;
}
.uls li .imgs {
  position: absolute;
  top: 15px;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.comments {
  position: absolute;
  top: 15px;
  left: 0px;
  font-size: 14px;
  width: 100%;
  background-color: red;
  color: #ccc;
}
.time {
  font-size: 12px;
  position: absolute;
  top: 40px;
  color: #ccc;
  left: 50px;
}
.name {
  width: 100%;
  display: block;
  font-size: 12px;
  position: absolute;
  top: 0px;
  left: 50px;
}
.name span {
  float: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
}
.name span:first-child {
  margin-right: 5px;
  color: rgb(0, 122, 204);
}
.name span:last-child {
  color: #333;
}
.reward {
  position: absolute;
  bottom: 0;
  right: 100px;
}

.img {
  position: absolute;
  width: 18px;
  height: 18px;
  bottom: 2px;
  right: 80px;
}
.img:hover {
    cursor: pointer;
}
.img img {
  width: 18px;
  height: 18px;
}
</style>