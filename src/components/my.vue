<template>
  <div>
    <div class="title">
      <div class="logo"></div>
      <div class="info">
        <p>{{title}}的主页 > </p>
        <router-link to="/register" tag="p">注册 >  </router-link>
        <router-link to="/login" tag="p">登陆 >  </router-link>
      </div>
    </div>
    <div class="order">
        <div class="ordertitle">
          <p>我的订单</p>
          <span>查看更多<i class="iconfont icon-more"></i></span>
        </div>
        <ul class="list">
          <li><i class="iconfont icon-category" @click="mahe()"></i><p>待付款</p></li>
          <li><i class="iconfont icon-box"></i><p>待发货</p></li>
          <li><i class="iconfont icon-machinery"></i><p>待收货</p></li>
          <li><i class="iconfont icon-rejectedorder"></i><p>待评价</p></li>
        </ul>
        <div class="wallet">
          <div class="ordertitle">
            <p>我的钱包</p>
            <span>查看明细<i class="iconfont icon-more"></i></span>
          </div>
          <ul class="list">
            <li> <span>0</span> <p>账户余额</p>  </li>
            <li> <span>0</span> <p>优惠券</p>  </li>
            <li> <span>0</span> <p>积分</p>  </li>
          </ul>
        </div>
    </div>
    <div class="mahe">
    </div>
    <div class="recommend">
      <div class = "recommendtitle">
        <p @click="mahe()">推荐商品</p>
        <span></span>
      </div>
      <div class="recommendinfo">
            <div class="swiper-container">
              <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for="data in datalist">
                  <div class="box">
                  <img :src="'http://img0.gjw.com/product/'+ data.Pic" alt="">
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: 'my',
  data () {
    return {
      datalist:[]
    }
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  },
  methods:{
  mahe(){
    alert("马赫")
  }
  },
  mounted() {
    axios.post("/BtCApi/ShopCar/GetEveryoneBuy").then(res=>{
      //console.log(res.data.data);
      this.datalist = res.data.data;
      this.$nextTick(()=>{
       new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .title{
    width:100%;
    height:1.6rem;
    border-bottom: 1px solid #f2f2f2;
    background:#2e313a;
    color:white;
    position: relative;left: 0;top:0;
    .logo{
      width:.8rem;
      height:.8rem;
      background:url(../assets/icon_head_no_login.png)no-repeat;
      background-size: cover;
      position: absolute;left:.15rem;top:.4rem;
    }
    .info{
      display: flex;
      position: absolute;left:1rem;top:.7rem;
    }
  }
  .order{
    width:100%;
    height:1.35rem;
    /* position: relative;left: 0;top:1.6rem; */
    text-align: center;
    .ordertitle{
      width:100%;
      height:.42rem;
      color:#333333;
       padding:0 .15rem 0 .15rem;
      display: flex;
      justify-content:space-between;
      font-size: .14rem;
      line-height: .42rem;
      /*  background:#fcfcfc; */
      .span{float:right;}
    }
    .list{
      width:100%;
      height:.93rem;
      color: #898989;
      display: flex;
      font-size: .14rem;
      line-height: .14rem;
      justify-content:space-around;
      padding: .18rem 0 .23rem 0;
      border-bottom: 1px solid #f2f2f2;
      i{font-size: .26rem;line-height: .26rem;margin-bottom: .15rem;display: block;}
    }
    .wallet{
      color:#333333;
      width:100%;
      height:1.23rem;
      border-bottom: 1px solid #f2f2f2;
      border-top: 1px solid #f2f2f2;
      margin-top: .1rem;
      .list{
      width:100%;
      height:.93rem;
      color: #898989;
      display: flex;
      font-size: .14rem;
      line-height: .14rem;
      justify-content:space-around;
      padding: .18rem 0 .23rem 0;
      border-bottom: 1px solid #f2f2f2;
       span{font-size: .14rem;margin-bottom: .15rem;display: block;}
      }
    }
  }
  .mahe{
    width: 100%;
    height:1.02rem;
    background:url(../assets/my.jpg)no-repeat;
    position: relative;top:1.53rem;
    border-bottom: 1px solid #f2f2f2;
  }
  .recommend{
    width :100%;
    height:2.3rem;
     position: relative;top:1.63rem;
    .recommendtitle{
       width :100%;
      p{
        width :.76rem;
        height: .16rem;
        background-color: #f4f5f7;
        font-size: .14rem;
        line-height: .16rem;
        text-align: center;
        color: #eeaa22;
        margin: 0 auto;
      }
      span{
        width: 3rem;
        display: block;
        margin: 0 auto;
        border-top: 1px solid #eeaa22;
        position: relative;left: 0;top:-.1rem;
        z-index: -100;
      }
    }
    .recommendinfo{
      width: 100%;
     /*  position: relative; */
      margin-top: .15rem;
      margin-bottom: .15rem;
      /* z-index: -1000; */
      .box{
        width:1.3rem;
        height:1.3rem;

       img{
        width:1.3rem;
        height:1.3rem;
        margin-left:.15rem;
       }
      }
    }
  }
</style>


