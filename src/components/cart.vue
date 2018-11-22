<template>
  <div>
    <div class="head">
    	<span>编辑</span>
    	<p>购物车</p>
    </div>
    <div class="cart-list">
    	<div class="cart-item">
    		<div class="cart-xuanzhong">
    			<i class="iconfont icon-selected"></i>
    		</div>
    		<div class="cart-img">
    			<a href="">
    				<img src="http://img0.gjw.com/product/2018/1112/af0dcce747b14d41b141a56ab0151ad6_2.jpg" alt="">
    			</a>
    		</div>
    		<div class="cart-xinxi">
    			<a>帝摩 大摩 18年苏格兰 单一麦芽威士忌 700ml</a>
    			<div class="cart-down">
    				<p>1788</p>
    				<div>
    					<span>-</span>
    					<span>1</span>
    					<span>+</span>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
     
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
  	.cart-item{
  		position:relative;
  		border-bottom: 5px #f8f8f8 solid;
  		height:1rem;
  		.cart-xuanzhong{
  			width:.16rem;
  			height:.16rem;
  			border-radius:.08rem;
  			border:1px solid #aaa;
  			position:absolute;
  			left:.1rem;
			top:.42rem;
			background:#f44;
			i{	
				display: block;
				line-height:.16rem;
				text-align: center;
				color:#fff;
				font-weight: bold;
			}
  		}
  		.cart-img{
  			margin:.05rem 0 .05rem .56rem;
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
  	}
  }
</style>
