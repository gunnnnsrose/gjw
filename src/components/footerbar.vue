<template>
  <div>
    <ul>
    	<router-link to="/home" tag="li" activeClass="active">
    		<i class="iconfont icon-all"></i>
    		<p>首页</p>
    	</router-link>
    	<router-link to="/class" tag="li" activeClass="active">
    		<i class="iconfont icon-category"></i>
    		<p>分类</p>
    	</router-link>
    	<router-link to="/banner" tag="li" activeClass="active" class="active">
    		<i class="iconfont icon-smile"></i>
    		<p>福利</p>
    	</router-link>
    	<router-link to="/cart" tag="li" activeClass="active">
    		<i class="iconfont icon-cart"></i>
    		<p>购物车</p>
    	</router-link>
    	<router-link to="/my" tag="li" activeClass="active">
    		<i class="iconfont icon-account"></i>
    		<p>我的</p>
    	</router-link>
    	
    </ul>
  </div>
</template>

<script>
export default {
  name: 'footerbar',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  ul{
  	width:100%;
  	height:.5rem;
  	border-top: 1px solid #f2f2f2;
  	display: flex;
  	font-size: .12rem;
  	justify-content:space-around;
  	text-align: center;
  	color: #666666;
    background:white;
    z-index: 10;
  	li{
  		i{
  			font-size: .18rem;
  			line-height: .3rem;
  		}
  	}
  	.active{color:#cd0011;}
  }
</style>
