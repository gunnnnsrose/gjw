<template>
  <div>
    <div class="title">
    	<a href="/home"><i class="iconfont icon-back"></i></a>
    	<p>{{this.datalist.ProductName}}</p>
    </div>
    <div class="nav" :class="isClass===1?'stop':''">
    	<ul>
    		<li class="active">商品</li>
    		<li>详情</li>
    		<li>评价</li>
    	</ul>
    </div>
    <div class="detail">
    	<div class="lunbo">
    		 <div class="swiper-container">
	            <div class="swiper-wrapper">
	                <div class="swiper-slide" v-for="data in arr" v-html="data">
	                {{data}}
	                </div>
	            </div>
	            <!-- 如果需要分页器 -->
	            <div class="swiper-pagination"></div>
    			</div>
    	</div>
    	<div class="info">
    		<ul>
    			<li>
    				<p>澳大利亚 黄伟倒数 美罗红葡萄酒 750ml</p>
    				<span>有趣 简单 易音</span>
    			</li>
    			<li>
    				<p>￥49</p>
    				<div>降低通知</div>
    			</li>
    			<li>
    				<p>数量</p>
    				<div class="control">
	    				<div class="del">-</div>
	    				<div class="num">1</div>
	    				<div class="add">+</div>
    				</div>
    			</li>
    			<li>
    				<div>送至<p>上海市</p></div>
    				<i class="iconfont icon-more"></i>
    				<span>有货</span>
    			</li>
    			<li>提示 有无手提袋说明</li>
    		</ul>
    		<div class="picture"></div>
    	</div>
    </div>
    <footer>
    	<router-link tag="p" to="/home">
    		<i class="iconfont icon-all"></i>
    		<span>首页</span>
    	</router-link>
    	<router-link tag="p" to="/cart">
    		<i class="iconfont icon-cart"></i>
    		<span>购物车</span>
    	</router-link>
    	<div>加入购物车</div>
    	<div>立即购买</div>
    </footer>
  </div>
</template>

<script>
import axios from "axios"
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: 'detail',
  data () {
    return {
      datalist:[],
      isClass:0,
      scrollTop: '',
      str:'',
      arr:[]
    }
  },
  components:{
  	photo:{
  		template:`<div v-html="myphoto">
  		</div>`,
  		props:["myphoto"],
  	}
  },
  methods:{
	handleScroll(){
		this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(this.scrollTop>68){
            this.isClass = 1
          }
          else if(this.scrollTop<68){
          	this.isClass = 0
          }
	}
  },
  mounted(){
  	window.scrollTo(0,0);//滚动条的初始化 在最上面
  	window.addEventListener('scroll', this.handleScroll);
  	axios.post("/BtCApi/Item/GetProduct",{Id:this.$route.params.id}).then(res=>{
  		this.datalist = res.data.data
  		console.log(res.data.data.APPIntro)
		this.str = 	res.data.data.APPIntro
		this.arr = this.str.split('/>')//字符串截取
		this.arr.splice(5,1)//字符串切割
		for(var i=0;i<this.arr.length;i++){
			this.arr[i]=this.arr[i].concat('/>')//字符串拼接
		}
		//console.log(this.arr)
		/******************************/
		//字符串操作
		// var str= "<img src='aaa'/><img src='sss'/><img src='ddd'/><img src='ffff'/><img src='gggg'/>"
		// var reg = /(<.*?>)/g  //懒 捕获
		// reg.test(str);
		// console.log(str.match(reg)); //用match捕获

		/******************************/
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
	//console.log(this.$route.params.id)
	
  },
  destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.title{
  	width:100%;
  	height:.45rem;
  	line-height: .45rem;
  	display: flex;
  	padding-left:.2rem;
  	border-bottom: 1px solid #f2f2f2;
  	font-size: .18rem;
  	margin-bottom: .23rem;
  	a{
  		i{margin-right: .3rem;}
  	}
  	p{
  		width: 2.2rem;
  		height:.45rem;
  		overflow:hidden;
    	text-overflow:ellipsis;
    	white-space:nowrap
  	}
  }
.nav{
	width:100%;
	ul{
		width: 100%;
		height:.45rem;
		display: flex;
		justify-content:space-around;
		line-height: .45rem;
		text-align: center;
		background:white;
		li{width: 33%}
		.active{border-bottom: 2px solid #ff4444;color:#ff4444;}
	}
}
.stop{
	position: fixed;top:0;left:0;z-index: 10;
}
/* <ul>
    			<li>
    				<p>澳大利亚 黄伟倒数 美罗红葡萄酒 750ml</p>
    				<span>有趣 简单 易音</span>
    			</li>
    			<li>
    				<p>￥49</p>
    				<div>降低通知</div>
    			</li>
    			<li>
    				<p>数量</p>
    				<div class="del">-</div>
    				<div class="num">1</div>
    				<div class="add">+</div>
    			</li>
    			<li>
    				<div>送至<p>上海市</p></div>
    				<i class="iconfont icon-more"></i>
    				<span>有货</span>
    			</li>
    			<li>提示 有无手提袋说明</li>
    		</ul> */
.detail{
	height:30rem;
	.lunbo{
		width:100%;
		height:3.75rem;
		.swiper-container {
		    width: 100%;
		    height: 3.75rem;
		    img{width: 100%; height: 3.75rem;}
			}
	}
}
.info{
	width:100%;
	height:4rem;
	ul{
		width:100%;
		padding-left: .15rem;
		font-size: .14rem;
		color: #333333;
		li{width:100%;}
		li:nth-of-type(1){
			height:.7rem;
			padding-top: .18rem;
			border-bottom: 1px solid #f2f2f2;
			p{line-height: .12rem;}
			span{line-height: .38rem;color: #fb223e;}
		}
		li:nth-of-type(2){
			height:.43rem;
			border-bottom: 1px solid #f2f2f2;
			line-height: .43rem;
			color:#fb223e;position: relative;
			div{
				width:.5rem;
				height:.22rem;
				border:1px solid #f2f2f2;
				font-size: .12rem;
				line-height: .2rem;
				position: absolute;right:.15rem;top:.12rem;
				color: #333333;
				border-radius: .03rem;
			}
		}
		li:nth-of-type(3){
			height:.49rem;
			border-bottom: 1px solid #f2f2f2;
			line-height: .49rem;
			display: flex;
			.control{
				width:1.15rem;
				height:.3rem;
				line-height: .3rem;
				border: 1px solid #f2f2f2;
				display: flex;
				text-align: center;
				justify-content:space-between;
				margin-left: .2rem;
				margin-top: .1rem;
				.del,.add{
					width:.38rem;background: #f8f8f8;
				}
				.num{width:.38rem;border-left: 1px solid #f2f2f2;border-right: 1px solid #f2f2f2;}
			}
		}
	}

}
footer{
	width: 100%;
	height:.5rem;
	 background:white; 
	position: fixed;bottom:0;left:0;z-index: 10;
	display: flex;
	text-align: center;
	div{
		height:100%;
		width:1.31rem;
		background:#ff8855;
		line-height: .5rem;
		color: white;
	}
	div:nth-of-type(2){background:#ff4444;}
	p{
		width:.56rem;
		height:.5rem;
		border-top:1px solid #e3e3e4;
		color: #666666;
	}
	i{line-height: .3rem;}
	span{
		display: block;
		font-size: .12rem;
		line-height: .1rem;
	}
	p:nth-of-type(1){border-right:1px solid #e3e3e4; }
}

</style>
