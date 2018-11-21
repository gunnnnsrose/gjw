<template>
<div>

  <header>
  	<div class="search">
  		<i class="iconfont icon-search"></i>	
  		<input type="text" placeholder="请输入商品名称">
  	</div>
    <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="data in datalist" :key="data.id">
                  <img :src="data.Pic"/>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
    </div>
  </header>
<!-- 小广告 -->
<div class="bannerone">
	<div class="logo"></div>
	<p>泸州老窖地字坛清仓 仅需39元</p>
</div>
<!-- 列表 换成router-link 与list页跳转-->
<ul class="list">
	<li >
		<div style="background-image: linear-gradient(#fd3b40,#ffffff)">白</div>
		<p>白酒</p>
	</li>
	<li >
		<div style="background-image: linear-gradient(#af0ffa,#ffffff)">红</div>
		<p>葡萄酒</p>
	</li>
	<li >
		<div style="background-image: linear-gradient(#f42c82,#ffffff)">洋</div>
		<p>洋酒</p>
	</li>
	<li >
		<div style="background-image: linear-gradient(#2dbb60,#ffffff)">清</div>
		<p>清酒</p>
	</li>
	<li >
		<div style="background-image: linear-gradient(#57d347,#ffffff)">老</div>
		<p>老酒</p>
	</li>
	<li >
		<div style="background-image: linear-gradient(#0dadf5,#ffffff)">券</div>
		<p>领券</p>
	</li>
	<li >
		<div style="background-image: linear-gradient(#e46855,#ffffff)">惠</div>
		<p>特卖会</p>
	</li>
	<li >
		<div style="background-image: linear-gradient(#feab15,#ffffff)">黄</div>
		<p>黄酒</p>
	</li>
	<li >
		<div style="background-image: linear-gradient(#ef3d07,#ffffff)">藏</div>
		<p>收藏</p>
	</li>
	<li >
		<div style="background-image: linear-gradient(#08d584,#ffffff)">新</div>
		<p>精品</p>
	</li>
</ul>
<!-- 小广告轮播 -->
<div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="data in bannerlist" :key="data.id">
                <div  class="lunbobox">
                  <img :src="'http://img0.gjw.com/product/'+ data.imgUrl" style="width:1rem;height:1rem;"/>
                  <p class="name">{{data.ProductName}}</p>
				  <p class="price">￥{{data.OdrPrice}}</p>
				  <p class="btn">马上抢</p>
                 </div>
                </div>
            </div>
    </div>
<!-- 两个小广告 -->
<div class="twosmallbanner">
	<img src="../assets/bannerleft.jpg" alt="">
	<img src="../assets/bannerright.jpg" alt="">
</div>
<!-- 狂欢广告 -->
<div class="happybanner"></div>
<!-- 动态组件 -->
<div class="productBox">
	<ul class="productNav">
		<li @click="who='jingxuan'">精选</li>
		<li @click="who='baijiu'">白酒</li>
		<li @click="who='putao'">葡萄酒</li>
		<li @click="who='qingjiu'">清酒</li>
		<li @click="who='huangjiu'">黄酒</li>
		<li @click="who='laojiu'">年份老酒</li>
	</ul>
	<component :is="who">
		
	</component>
</div>
</div>
</template>

<script>
import axios from "axios"
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: 'home',
  data () {
    return {
      datalist:[],
      picone:null,
      pictwo:null,
      picthree:null,
      who:'jingxuan',
      bannerlist:[]
    }
  },
  components:{
		jingxuan:{
			template:`<div>精选页</div>`
		},
		baijiu:{
			template:`<div>白酒页</div>`
		},
		putao:{
			template:`<div>葡萄页</div>`
		},
		qingjiu:{
			template:`<div>清酒页</div>`
		},
		huangjiu:{
			template:`<div>黄酒页</div>`
		},
		laojiu:{
			template:`<div>老酒页</div>`
		},
  },
  mounted(){
  	axios.get("/BtCApi/Home/GetHomePageImg").then(res=>{
  		//8 27 29 
  		//this.manylist = res.data.data
  		this.picone = res.data.data[9]
  		this.pictwo = res.data.data[30]
  		this.picthree = res.data.data[32]
  		this.datalist.push(this.picone)
  		this.datalist.push(this.pictwo)
  		this.datalist.push(this.picthree)
  		//console.log(this.datalist)
  		 this.$nextTick(()=>{
	        new Swiper('.swiper-container',{
	              pagination: {
	                el: '.swiper-pagination',
	              },
	              loop: true, // 循环模式选项
	              autoplay: {
	                  delay: 2500,
	                  disableOnInteraction: false,
	              },
	              navigation: {
	                nextEl: '.swiper-button-next',
	                prevEl: '.swiper-button-prev',
	              },
	          });
	      })
  	})
  	fetch("/BtCApi/Home/SeckillList?userid=1ae70219-d463-4782-a169-814cba737971").then(res=>res.json()).then(res=>{
  		this.bannerlist = res.data[0].AppSeckill.AppSeckillProList
  		//console.log(res.data[0].AppSeckill.AppSeckillProList)
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header{
  	.swiper-container {
    width: 100%;
    height: 1.78rem;
    img{width: 100%;}
	}
	.search{
		position: absolute;top: .05rem;left: .15rem;
		z-index: 10;
		width: 3.4rem;
		height: .35rem;
		background: white;
		border-radius: .05rem;
		padding-left: .18rem;
		input{
			outline: none;
			border:0;
			height: .35rem;
			line-height: .35rem
		}
	}
}
.bannerone{
	display: flex;
	line-height: .32rem;
	font-size: .12rem;
	width: 100%;
	height:.54rem;
	padding:.1rem .1rem 0 .2rem;
	.logo{
		width:.9rem;
		height:.32rem;
		background: url(../assets/hot.png)no-repeat;
		background-position: (0,.1rem);
		background-size: .85rem .15rem;
		border-right: 1px solid #cccccc;
	}
	p{margin-left: .2rem}
}
.list{
	width: 100%;
	display: flex;
	flex-wrap:wrap;
	justify-content:space-around;
	text-align: center;
	li{
		 /* background: yellow;  */
		width: .69rem;
		height:.69rem;
		margin: .1rem 0 .1rem 0;
		div{
			width:.34rem;
			height:.34rem;
			font-size: .18rem;
			color: white;
			margin: 0 auto;
			line-height: .34rem;
			border-radius: .06rem;
			
		}
		p{
			font-size: .12rem;
			color: #cecece;
			line-height: .28rem;
		}
	}
}
.lunbobox{
	width:100%;height:1.2rem;background:#f8f8f8;
	padding:.15rem 0 0 .15rem;
	position: relative;
	img{float:left;margin-right: .1rem;}
	.name{
		font-size: .14rem;
		font-weight: bold;
		width:3rem;
	}
	.price{
		font-size: .14rem;
		color: red;
		position: absolute;bottom: .03rem;left: 1.2rem
	}
	.btn{
		position: absolute;bottom: .05rem;left: 2.4rem;
		width:.42rem;
		height:.18rem;
		background:#5eaffe;
		color: white;
		font-size: .12rem;
		text-align: center;
		line-height: .18rem;
		border-radius: .03rem;
	}
}
.twosmallbanner{
	width:100%;
	height:1.5rem;
	display: flex;
	justify-content:space-between;
	margin:.1rem 0 .1rem 0;
	img{
		width:1.8rem;
		height:1.5rem;
	}
}
.happybanner{
	width:100%;
	height:1.4rem;
	background: url(../assets/bannercenter.jpg)no-repeat;
	background-size: 100% 1.4rem;
}
.productBox{
	width:100%;
	height:20rem;
	.productNav{
		width:100%;
		height:.4rem;
		border-bottom: 1px solid #f2f2f2;
		border-top: 1px solid #f2f2f2;
		display: flex;
		font-size: .12rem;
		color:#333333;
		li{
			padding:0 .16rem 0 .16rem;
			line-height: .4rem;
		}
	}

}
</style>
