<template>
    <div class="mask" ref='masks' v-if="flag"></div>
</template>
<script>

     export default {
        name:'Masks',
        data(){
            return {
                flag: false
            }
        },
        mounted(){
            this.$bus.$on('MusicInfo',res => {
                this.flag = !this.flag
                console.log(this.flag);
            })
        },
        beforeDestory(){
            this.$bus.$off('MusicInfo')
        }	
    }	
</script>
<style	scoped>
.mask {
    width: 1021px;
    height: 535px;
    background-color: rgba(0,0,0,.7);
}    
</style>