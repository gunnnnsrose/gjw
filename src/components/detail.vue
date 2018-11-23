<template>
  <div>
    <div class="title">
    	<a href="/home"><i class="iconfont icon-back"></i></a>
    	<p>{{this.datalist.ProductName}}</p>
    </div>
    <div class="nav" :class="isClass===1?'stop':''">
    	<ul>
    		<li :class="current===1?'active':''" @click="comedown3(1)">商品</li>
    		<li :class="current===2?'active':''" @click="comedown2(2)">详情</li>
    		<li :class="current===3?'active':''" @click="comedown1(3)">评价</li>
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
    				<p>{{datalist.ProductName}}</p>
    				<span>{{datalist.Explain}}</span>
    			</li>
    			<li>
    				<p>￥{{datalist.APPPrice}}</p>
    				<div>降低通知</div>
    			</li>
    			<li>
    				<p>数量</p>
    				<div class="control">
	    				<div class="del" @click="handelClickdel()">-</div>
	    				<input type="text" class="num" :value="num" ></input>
	    				<div class="add" @click="handelClickadd()">+</div>
    				</div>
    			</li>
    			<li>
    				送至<p>上海市</p>
    				<i class="iconfont icon-more"></i>
    				<span>有货</span>
    			</li>
    			<li>提示 有无手提袋说明</li>
    		</ul>
    		<div class="picture"></div>
    	</div>
    	<div class="comment">
    		<div class="comment-title">
    			<p>评价(100)</p>
    			<p>查看更多<i class="iconfont icon-more"></i></p>
    		</div>
    		<ul class="comment-list">
    			<li v-for="data in commentlist">
    				<p>{{data.Usr_NiceName}}:</p><span>{{data.Usr_LeveName}}</span>
    				<p>{{data.Content}}</p>
    			</li>
    		</ul>
    	</div>
    	<div class="details">我真懒得做了（¯﹃¯）</div>
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
      arr:[],
      num:1,
      commentlist:null,
      current:1
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
	},
	handelClickadd(){
  		return this.num++
  	},
  	handelClickdel(){
  		if(this.num<=1){
  			return this.num = 1
  		}else{
  			return this.num--
  		}
  	},
  	comedown1(id){
  		window.scrollTo(0,700)
  		this.current = id
  	},
  	comedown2(id){
  		window.scrollTo(0,1200)
  		this.current = id
  	},
  	comedown3(id){
  		window.scrollTo(0,0)
  		this.current = id
  	}
  },
  mounted(){
  	window.scrollTo(0,0);//滚动条的初始化 在最上面
  	window.addEventListener('scroll', this.handleScroll);
  	axios.post("/BtCApi/Item/GetProduct",{Id:this.$route.params.id}).then(res=>{
  		this.datalist = res.data.data
  		console.log(res.data.data)
		this.str = 	res.data.data.APPIntro
		this.arr = this.str.split('/>')//字符串截取
		this.arr.splice(5,1)//字符串切割
		for(var i=0;i<this.arr.length;i++){
			this.arr[i]=this.arr[i].concat('/>')//字符串拼接
		}
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
	axios.get(`/BtCApi/Item/GetComment?proid=${this.$route.params.id}&pageindex=1&pagesize=5&score=0`).then(res=>{
		this.commentlist = res.data.data
		console.log(this.commentlist)
	})
	
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

.detail{
	height:20rem;
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
			p{line-height: .12rem;overflow: hidden;height:.12rem;width:100%;text-overflow:ellipsis;white-space:nowrap}
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
				input{outline: none;border:0;}
				.del,.add{
					width:.38rem;background: #f8f8f8;
				}
				.num{
					width:.38rem;
					border-left: 1px solid #f2f2f2;
					border-right: 1px solid #f2f2f2;
					text-align: center;
				}
			}
		}
		li:nth-of-type(4){
			height:.95rem;
			border-bottom: 1px solid #f2f2f2;
			padding-top: .15rem;
			p{position: relative;top:-.2rem;left:.3rem;}
			i{float:right;position: relative;top:-.3rem;right:.15rem;}
			span{position: relative;bottom:0;display: block;color:#fb223e;}			
		}
		li:nth-of-type(5){
			height:.6rem;
			line-height: .45rem;
		}
	}
	.picture{
		width:100%;
		height:.35rem;
		background:url(../assets/detail-banner.jpg)no-repeat;
	}
}
.comment{
	width:100%;
	.comment-title{
		width:100%;
		height:.45rem;
		 /* border-bottom: 1px solid #cccccc; */ 
		display: flex;
		justify-content:space-between;
		padding:0 .15rem 0 .15rem;
		line-height: .45rem;
		font-size: .14rem;
		color: #333333
	}
	/* <p>1350****457 :</p><span>银牌酒友</span>
	    				<p>不错的红酒，好喝</p> */
	.comment-list{
		width:100%;
		li{
			width: 100%;
			padding:.15rem;
			border-top: 1px solid #f2f2f2;
			font-size: .14rem;
			color: #333333;
			line-height: .25rem;
			position: relative;
			span{
				display: block;
				position: absolute;right:.15rem;top:.2rem;
				width: .58rem;
				height:.18rem;
				font-size: .14rem;
				color: white;
				background: #ff7f00;
				text-align: center;
				line-height: .18rem;
				border-radius: .04rem;
			}
		}
	}
}
.details{
	border-top: 1px solid #f2f2f2;
	width:100%;
	text-align: center;
	font-size: .2rem;
	color: hotpink;
	height:3rem;
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
