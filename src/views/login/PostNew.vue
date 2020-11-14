<template>
  <div class="postnew">
    <input type="text" placeholder="输入你的电话我会发送验证码给你小子" class='test-num' v-model="phone" @blur="test" />
    <ul ref='ul'>
      <li v-for='(item,index) in testNum' :key='index' >{{item}}</li>
    </ul>
    <input type="text" @keydown="shows($event)" class='isNot' ref='input' v-model='testNums'>
    <input type="submit" placeholder="登录" class='submit' @click='realRegister'>
  </div>
</template>
<script>
import {sent,verify} from '../../network/login'
export default {
  name: "PostNew",
  data() {
    return {
      phone: "",
      testNum: ['','','',''],
      testNums:'',
      num: 0,
    }
  },
  methods:{
      test(){

          if((/^1[3456789]\d{9}$/.test(this.phone)))
          {
            //    console.log('good');
            // console.log(this.$refs.uls)
            // this.refs.uls
            // this.$refs.li1.focus()
            // while(true){
            //     if(this.$refs.li1)
            // }
            sent(this.phone).then(res => {
                console.log(res);
            })
           this.$refs.input.focus()
        //    console.log(document.keydown)
          }else{
            this.$toast.Toast('号码格式错误',3000)
            //  console.log(document.keydown()) 
          }
      },
      shows(val){
        //   console.log(111);
        // val.code.slice(5,6)
        // let num = 0;
        this.testNum[this.num] = val.code.slice(5,6)
        this.num++
        if(this.num == 4){
          verify(this.phone,this.testNums).then(res => {
            console.log(res);
          })
        }
        // else{
        //   this.testNums = ''
        //   this.num = 0
        //   for(let i = 0;i < this.testNum.length;i++){
        //     testNum[i] = ''
        //   }
        // }
      },
      realRegister(){
        let phone = this.phone
        let testNums = this.testNums
        this.$router.push({
           path:'RemarkNews',
           query:{
             phone:phone,
             testNums
           }
        })
      }
  }
};
</script>
<style	scoped>
.postnew {
    z-index: 1;
  position: relative;
  margin: 200px auto;
  width: 400px;
  height: 250px;
  border-radius: 5px;
  background-color: #ccc;
}
.test-num {
    position: absolute;
    top: 50px;
    left: 50px;
    font-size: 14px;
    color: #999;
  width: 300px;
  height: 30px;
  border: 2px solid black;
  padding-left: 10px;
}
ul {
    position: absolute;
    left: 15px;
    top: 160px;
}
li {
    width: 50px;
    height: 50px;
    list-style: none;
    float: left;
    border-bottom:1px solid black;
    margin-right: 30px;
}
.isNot {
    /* z-index: -999;
     */
     position: absolute;
     top: -1000px;
     left: -1000px;
     border: none;
    width: 0;
    height: 0;
    /* position: absolute;
    top: 20px;
    left: 20px; */
    /* width: 100px;
    height: 10px; */
    /* border: 1px solid red;
    font-size: 8px; */
    /* display: none; */
}
.submit {
  cursor: pointer;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: rgb(37, 176, 243);
  position: absolute;
  top: 120px;
  left: 120px;
}
.submit:hover {
  color: #fff;
}
</style>