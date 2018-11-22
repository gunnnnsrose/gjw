<template>
    <div id="goTop">
      <div class="goTop" v-show="goTopShow" @click="goTop"><i class="iconfont icon-less"></i></div>
    </div>
</template>
<script>
    export default {
      name: "goTop",
      data(){
          return{
            scrollTop: '',
            goTopShow:false,
          }
        },
      methods:{
        handleScroll () {
          this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(this.scrollTop>500){
            this.goTopShow=true
          }
        },
        goTop(){
          let timer=null,_that=this;
          cancelAnimationFrame(timer)
          timer=requestAnimationFrame(function fn(){
            if(_that.scrollTop>0){
              _that.scrollTop-=100;
              document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
              timer=requestAnimationFrame(fn)
            }else {
              cancelAnimationFrame(timer);
              _that.goTopShow=false;
            }
          })
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>
 
<style scoped>
  .goTop{
    position: fixed;
    right: .2rem;
    bottom: .5rem;
    width: .4rem;
    height: .4rem;
    background:white;
    border:1px solid #cccccc;
    border-radius: 50%;
  }
  i{
    display: block;
    color: #cccccc;
    line-height: .4rem;
    text-align: center;
    font-size: .2rem;
    font-weight: bold;
  }
</style>