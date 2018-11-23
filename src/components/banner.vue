<template>
  <div>
    <div class="head">
    	<router-link to="/home" tag="i" class="iconfont icon-back">
    		
    	</router-link>
    	
    	<p>【购酒网】福利风暴1019</p>
    </div>
    <img src="../assets/fuli.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'banner',
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
  	width: 100%;
  	background: #fff;
  	position: fixed;
  	top:0;
  	left:0;
  	border-bottom: 1px #ccc solid;
  	i{
  		color:rgb(153,153,153);
  		line-height:.46rem;
  		font-size: .16rem;
  		position: absolute;
  		left:.15rem;
  		font-weight: bold;
  	}
  	p{
  		font-size: .16rem;
  		line-height: .46rem;
  		font-family: Arial;
  		text-align: center;
  	}

  }
  img{
  	width:100%;
  }
</style>
