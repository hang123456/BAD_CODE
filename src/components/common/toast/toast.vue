<template>
    <div>
        <div v-show='isShow' class="toast">{{massage}}</div>
    </div>
</template>
<script>
     export default {
        name:'Toast',
        data(){
            return {
                massage:'',
                isShow: false
            }
        },
    methods:{
         Toast(massage,delay){
             this.massage = massage
             this.isShow = !this.isShow
             setTimeout(() => {
                 this.massage = ''
                 this.isShow = !this.isShow
             },delay)
         }
    }
    }	
</script>
<style	scoped>
    .toast {
        position: absolute;
        top: 50px;
        left: 50%;
        z-index: 999;
        height: 20px;
        transform: translate(-50%);
        background-color: rgba(0,0,0, .7) ;
        font-size: 16px;
        color:#fff;
        padding: 6px 10px;
    }
</style>