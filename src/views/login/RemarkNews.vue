<template>
    <div class="remarknew">
        <input type="text" placeholder='name' class='name'>
        <input type="password" placeholder="password" class='password'>
        <input type="password" placeholder="password" class='password1'>
        <input type="submit" class="submit" placeholder="提交">
        <span>{{passwordTest}}</span>
    </div>
</template>
<script>
// import {}
     export default {
        name:'RemarkNews',	
        data(){
            return {
                passwordTest: {}
            }
        },
        mounted(){
            this.passwordTest = this.$route.query
        }
    }	
</script>
<style	scoped>
 .remarknew {
    z-index: 1;
  position: relative;
  margin: 200px auto;
  width: 400px;
  height: 250px;
  border-radius: 5px;
  background-color: #ccc;
 }  
 .name,.passwored1,.password {
     position: absolute;
     width: 300px;
     height: 30px;
     border: none;
     outline: none;
    
 } 
 .name {
     top: 50px;
     left: 50px;
 }
 .password {
     top: 100px;
     left: 100px;
 }
 .passwored1 {
     top: 150px;
     left: 50px;
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