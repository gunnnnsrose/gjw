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
    	<ul>
    		<li>333</li>
    		<li>333</li>
    		<li>333</li>
    		<li>333</li>
    		<li>333</li>
    		<li>333</li>
    		<li>333</li>
    		<li>333</li>
    		<li>333</li>
    	</ul>
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
export default {
  name: 'detail',
  data () {
    return {
      datalist:[],
      isClass:0,
      scrollTop: ''
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
  		console.log(res.data.data)
  		this.datalist = res.data.data
  	})
	//console.log(this.$route.params.id)
	
  },
  destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
	height:30rem;
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
