<template>
  <div>
    <div class="head">
    	<span>编辑</span>
    	<p>购物车</p>
    </div>
    <div class="cart-list" v-for="data in datalist" :key="data.id">
    	<div class="cart-item">
    		<input type="checkbox" v-model="checkgroup" :value="data" />
    		<div class="cart-xuanzhong" :style="'background:' + data.bejing">
    			<!-- <i class="iconfont icon-selected"></i> -->
    		</div>
    		<div class="cart-img">
    			<a href="">  
    				<img :src="data.Pic" alt="">
    			</a>
    		</div>
    		<div class="cart-xinxi">
    			<a>{{data.Name}}</a>
    			<div class="cart-down">
    				<p>￥{{data.Price}}</p>
    				<div>
    					<button @click="data.Quantity===1?1:data.Quantity--" >-</button>
    					<span>{{data.Quantity}}</span>
    					<button @click="data.Quantity++">+</button>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="van-submit">
    	<div class="van-checkbox">
    		<input type="checkbox" v-model="quanxuan" />
    		<div class="van-checkbox__icon">
    			<!-- <i class="iconfont icon-selected"></i> -->
    		</div>
    		<span>全选</span>
    	</div>
	    <button class="van-button">结算</button>
    	<div class="van-bar">
    		<span class="span1">合计：</span>
	    	<span class="span2">¥{{computedSum}}.00</span>
	    </div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
    	checkgroup:[
	      {
	        ID: 7484,
	        Quantity: 1,
	        Name: "帝摩 大摩 18年苏格兰 单一麦芽威士忌 700ml",
	        Price: 1788.0,
	        UserPrice: 1788.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/1112/af0dcce747b14d41b141a56ab0151ad6_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 6372,
	        Quantity: 1,
	        Name: "轩尼诗Hennessy XO 干邑白兰地 1500ml",
	        Price: 3489.0,
	        UserPrice: 3489.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2015/0724/8431f55ee27841b19c05a10ad7c3ae6d_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 3060,
	        Quantity: 1,
	        Name: "1855年列级名庄 一级庄 红葡萄酒 2008 750ml",
	        Price: 14500.0,
	        UserPrice: 14500.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0320/9d09bc18a8d64e76b322b3fb6a7a030d_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 6577,
	        Quantity: 2,
	        Name: "【整箱装】53度 茅台 飞天带杯 500ml*6",
	        Price: 10800.0,
	        UserPrice: 10800.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2016/0704/32708cd006d542c8a65f43e0fc482a5d_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 2828,
	        Quantity: 1,
	        Name: "53度 茅台 五星 马万祺茅台酒 500ml",
	        Price: 13000.0,
	        UserPrice: 13000.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0319/3b4eef35f62743abb2c53f1b7959e7db_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 6924,
	        Quantity: 1,
	        Name: "52度 五粮液 缘定晶生 520ml",
	        Price: 15888.0,
	        UserPrice: 15888.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0504/6cdc4544e070418fbd504e3ac323307d_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 7529,
	        Quantity: 1,
	        Name: "53度 茅台 丁酉 鸡年酒 2500ml ",
	        Price: 17700.0,
	        UserPrice: 17700.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0102/55a61fe96d73404ebc02f03dd937f284_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 5996,
	        Quantity: 1,
	        Name: "53度 茅台 羊年生肖纪念酒 500ml",
	        Price: 20888.0,
	        UserPrice: 20888.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0208/766a5f83b41144fdb6be8a5105a3f52b_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 6588,
	        Quantity: 1,
	        Name: "53度 茅台飞天酒 6000ml （6升装大坛）",
	        Price: 33999.0,
	        UserPrice: 33999.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0417/0a62aa7facd64969bb0e731653048ea2_2.jpg",
	        bejing:"#f44"
	      }
	    ],
    	quanxuan:true,
	    datalist:[
	      {
	        ID: 7484,
	        Quantity: 1,
	        Name: "帝摩 大摩 18年苏格兰 单一麦芽威士忌 700ml",
	        Price: 1788.0,
	        UserPrice: 1788.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/1112/af0dcce747b14d41b141a56ab0151ad6_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 6372,
	        Quantity: 1,
	        Name: "轩尼诗Hennessy XO 干邑白兰地 1500ml",
	        Price: 3489.0,
	        UserPrice: 3489.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2015/0724/8431f55ee27841b19c05a10ad7c3ae6d_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 3060,
	        Quantity: 1,
	        Name: "1855年列级名庄 一级庄 红葡萄酒 2008 750ml",
	        Price: 14500.0,
	        UserPrice: 14500.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0320/9d09bc18a8d64e76b322b3fb6a7a030d_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 6577,
	        Quantity: 2,
	        Name: "【整箱装】53度 茅台 飞天带杯 500ml*6",
	        Price: 10800.0,
	        UserPrice: 10800.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2016/0704/32708cd006d542c8a65f43e0fc482a5d_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 2828,
	        Quantity: 1,
	        Name: "53度 茅台 五星 马万祺茅台酒 500ml",
	        Price: 13000.0,
	        UserPrice: 13000.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0319/3b4eef35f62743abb2c53f1b7959e7db_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 6924,
	        Quantity: 1,
	        Name: "52度 五粮液 缘定晶生 520ml",
	        Price: 15888.0,
	        UserPrice: 15888.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0504/6cdc4544e070418fbd504e3ac323307d_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 7529,
	        Quantity: 1,
	        Name: "53度 茅台 丁酉 鸡年酒 2500ml ",
	        Price: 17700.0,
	        UserPrice: 17700.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0102/55a61fe96d73404ebc02f03dd937f284_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 5996,
	        Quantity: 1,
	        Name: "53度 茅台 羊年生肖纪念酒 500ml",
	        Price: 20888.0,
	        UserPrice: 20888.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0208/766a5f83b41144fdb6be8a5105a3f52b_2.jpg",
	        bejing:"#f44"
	      },
	      {
	        ID: 6588,
	        Quantity: 1,
	        Name: "53度 茅台飞天酒 6000ml （6升装大坛）",
	        Price: 33999.0,
	        UserPrice: 33999.0,
	        isCheckToCart: true,
	        CheckProID: null,
	        Pic: "http://img0.gjw.com/product/2018/0417/0a62aa7facd64969bb0e731653048ea2_2.jpg",
	        bejing:"#f44"
	      }
	    ]
    }
  },
  watch:{
	quanxuan(){
		if(this.quanxuan){
			this.checkgroup=this.datalist;
		}else{
			if(this.checkgroup.length>0&&this.checkgroup.length<this.datalist.length){
				this.checkgroup = this.checkgroup;
			}else{

				this.checkgroup=[];
			}
		}
	},
	checkgroup(){
		if(this.checkgroup.length===this.datalist.length){
			this.quanxuan = true;
		}else{
			this.quanxuan = false;
		}


		
	},

	/*datalist(){
		for(var i in this.datalist){
			if(this.datalist[i]){
				this.datalist[i].bejing="#f44"
				console.log(this.datalist[i].bejing);
			}
		}
	}*/



  },
  computed:{
	computedSum(){
		var sum=0;
		for(var i in this.checkgroup){
			sum+=this.checkgroup[i].Price*this.checkgroup[i].Quantity;
		}
		return sum;
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .head{
  	height: .46rem;
  	border-bottom: 2px #f8f8f8 solid;
  	span{
  		color:#666;
  		font-size: .14rem;
  		float:right;
  		line-height:.51rem;
  		margin-right: .16rem
  	}
  	p{
  		line-height:.46rem;
  		font-size: .16rem;
  		text-align:center;
  		font-family: Arial;
  	}
  }
  .cart-list{
  	margin-bottom: 1rem;
  	position: relative;
  	margin-bottom: 0;
  	.cart-item{
  		position:relative;
  		border-bottom: 5px #f8f8f8 solid;
  		height:1rem;
  		input{
  			position:absolute;
  			left:.1rem;
			top:.43rem;
			z-index: 0;
			display: block;
			width: .14rem;
			height:.14rem;

  		}
  		.cart-xuanzhong{
  			width:.17rem;
  			height:.17rem;
  			border-radius:.08rem;
  			border:1px solid #aaa;
  			position:absolute;
  			left:.09rem;
			top:.41rem;
			background:#f44;
			z-index: 1;
			opacity: .7;
			pointer-events:none;
			i{	
				display: block;
				line-height:.16rem;  
				text-align: center;
				color:#fff;
				font-weight: bold;
			}
  		}
  		.cart-img{
  			margin:.05rem 0 .05rem .36rem;
  			border-radius: 5px;
  			overflow: hidden;
  			a{
  				width:.9rem;
  				height: .9rem;
  				img{
  					width:.9rem;
  					height:.9rem;
  				}
  			}
  		}
  		.cart-xinxi{
  			position:absolute;
  			right:.05rem;
  			top:0;
  			width: 2.3rem;
  			a{
				font-size: .10rem;
				color:#333;
  			}
  			.cart-down{
  				p{
  					line-height: .50rem;
  					font-size: .12rem;
  					color:#fb435b;
  					float:left;
  					text-align: center;
  					position: absolute;
  					left:.40rem;
  					top:.45rem;
  					font-weight: bold;
  				}
  				div{
  					float:left;
  					position: absolute;
  					bottom:-.6rem;
  					right:.2rem;
  					button,span{
  						display: block;
  						float:left;
  						width:.38rem;
  						height:.28rem;
  						font-size: .14rem;
  						line-height: .28rem;
  						text-align: center;
  						border: 1px solid #e5e5e5;
  						background: #fff;
  					}
  				}
  			}
  		}
  	}
  }
  .van-submit{
  	position: fixed;
  	bottom:.50rem;
  	left:0;
  	z-index:100;
  	width:100%;
  	height: .5rem;
  	overflow: hidden;
	padding-left: .1rem;
	background: #fff;
  	.van-checkbox{
  		float: left;
  		overflow: hidden;
  		height: 100%;
  		padding-top:.12rem;
  		input{
  			position:absolute;
  			margin:.02rem 0 0 .02rem;
			display: block;
			width: .14rem;
			height:.14rem;
			/* opacity:.7; */
		}
		.van-checkbox__icon{
			width:.17rem;
  			height:.17rem;
  			border-radius:.08rem;
  			border:1px solid #aaa;
			background:#f44;
			float: left;
			z-index: 1;
			opacity: .7;
			pointer-events:none;
			i{
				display: block;
				line-height:.16rem;  
				text-align: center;
				color:#fff;
				font-weight: bold;
			}
		}
		span{
			display: block;
			float: left;
			margin-left: .1rem;
		}
  	}
  	.van-bar{
  		float: right;
  		padding-top:.12rem;
  		margin-right: .1rem;
  		.span1{
  			color:#666;
  			font-size:.16rem;
  		}
  		.span2{
  			color:#f44;
  		}
  	}
  	.van-button{
  		float: right;
  		width: 1rem;
  		height:.50rem;
  		background: #fb223e;
  		text-align: center;
  		line-height: .50rem;
  		border:none;
  		color:#fff;
  		font-size: .16rem;
  	}
  }
</style>
