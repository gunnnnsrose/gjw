<template>
  <div class="div">
    <div class="nav clear">
      <router-link to="/class" tag="i" class="iconfont icon-back l"></router-link>
      <span class="r" @click="sou()">搜索</span>
      <input type="text" class="r" placeholder="请输入商品名称">
    </div>
    <div class="cont">
      <div class="hotsou">
      	<p><i class="iconfont icon-clock"></i>热门搜索</p>
      	<p>
      	  <span>白酒</span>
      	  <span>红酒</span>
      	  <span>洋酒</span>
      	  <span>百威</span>
      	  <span>燕京</span>
      	  <span>雪花</span>
      	</p>
      </div>
      <div class="history">
      	<p><i class="iconfont icon-clock"></i>搜索历史</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
     
    }
  },
  methods: {
  	sou() {
  	  console.log('sousou');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .div {
    .l {
      float: left;
    }
    .r {
      float: right;
    }
    .nav {
      width: 100%;
      height: .5rem;
      i {
        display: inline-block;
        width: .5rem;
        height: .5rem;
        text-align: center;
        line-height: .5rem;
      }
      span {
        display: inline-block;
        width: .6rem;
        height: .5rem;
        text-align: center;
        line-height: .5rem;
        color: #999;
      }
      input {
        width: 70%;
        height: .3rem;
        margin: .1rem 0;
        background: #eee;
        border-radius: 5px;
        text-indent: 12px;
        border: none;
        outline: none;
      }
    }
    .cont {
      width: 100%;
      .hotsou {
      	width: 100%;
		p {
		  width: 100%;
		  height: .4rem;
		  line-height: .4rem;
		  text-indent: .12rem;
		  span {
		  	display: inline-block;
		  	width: .48rem;
		  	height: .3rem;
		  	line-height: .3rem;
		  	font-size: .12rem;
		  	margin: 0 .03rem;
		  	text-indent: 0;
		  	text-align: center;
		  	border-radius: .15rem;
		  	background: #ddd;
		  }
		}
      }
      .history {
      	width: 100%;
      	p {
      	  width: 100%;
		  height: .4rem;
		  line-height: .4rem;
		  text-indent: .12rem;
      	}
      }
    }
  }
</style>
