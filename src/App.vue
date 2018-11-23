<template>
  <div id="app">
    <keep-alive>>
      <router-view></router-view>
    </keep-alive>
  <section>
    <footerbar></footerbar>
  </section>
  <div class="gototop">
    <gototop></gototop>
  </div>
  </div>
</template>

<script>
import footerbar from "./components/footerbar.vue"
import gototop from "./components/gototop.vue"
export default {
  name: 'App',
  components:{
    footerbar,
    gototop
  }
}
</script>

<style>
 html{font-size: 26.66666667vw;}
  *{margin: 0;padding: 0;box-sizing:border-box;}
  ul li{list-style: none;}
  body{font-size: .16rem;overflow-x:hidden;}
  a{text-decoration: none;}
  img{display: block;}
  .clear:after{content: "";display: block;clear: both;}
  section{position: fixed;bottom: 0;width: 100%}
  html body{height:100%;}
  .fade-enter-active, .fade-leave-active {
   transition: all .3s;
   }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
     opacity: 0;
     
   }
   .gototop{position: fixed;bottom: .5rem;right:0;}
</style>
