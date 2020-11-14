<template>
  <div class="register">
    <input type="text" v-model="phone" placeholder="phoneNumber" class="user" />
    <input
      type="password"
      v-model="password"
      placeholder="password"
      class="password"
    />
    <button @click="btnLogin">登录</button>
    <span @click="ChangeMethods">无账号? 那就注册一个吧^_^</span>
  </div>
</template>
<script>
import {login} from '../../network/login'
export default {
  name: "register",
  data() {
    return {
      phone: "18707083313",
      password: "13133891347www",
    };
  },
  methods: {
    ChangeMethods() {
      this.$router.push("/PostNew");
    },
    btnLogin(){
        if(this.phone != '' && '' && this.password != ''){
            this.$toast.Toast("请输入手机号或者密码",3000)
        }else{
         login(this.phone,this.password).then(res => {
              // console.log(data);
              if(res.data.code != 200){
                this.$toast.Toast("密码或者手机号错误",3000)
              }else{
                this.$store.commit('userInfo',res.data)
                this.$router.push('/enter')
              }
         })
        }
    }
  },
};
</script>
<style	scoped>
.register {
  position: relative;
  margin: 200px auto;
  width: 400px;
  height: 250px;
  border-radius: 5px;
  background-color: #ccc;
}
.user,
.password {
  width: 300px;
  height: 30px;
  border: 2px solid black;
  padding-left: 10px;
}
.user {
  position: absolute;
  top: 50px;
  left: 50px;
}
.password {
  position: absolute;
  top: 100px;
  left: 50px;
}
button {
  cursor: pointer;
  width: 180px;
  height: 30px;
  text-align: center;
  position: absolute;
  left: 110px;
  top: 160px;
  border: none;
  border-radius: 8px;
  background-color: red;
}
span {
  cursor: pointer;
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translateX(-50%);
  color: rgb(37, 176, 243);
}
span:hover {
  color: yellow;
}
</style>