<template>
  <div>
    <div class="title">
    	<router-link to="/home" tag="i" class="iconfont icon-back"></router-link>
    	<p>注册</p>
    </div>
    <div class="message">
    	<div>
    		<i class="iconfont icon-account"></i>
    		<input type="text" placeholder="请输入用户名" v-model="username">
    	</div>
    	<div>
    		<i class="iconfont icon-security"></i>
    		<input type="password" placeholder="密码" v-model="password">
    	</div>
    	<div>
    		<i class="iconfont icon-security"></i>
    		<input type="password" placeholder="确认密码">
    	</div>
    	<div style="border:none;">
    		<input type="checkbox"> 同意《同意协议并注册》
    	</div>
    	<!-- <input type="button" value="注册" class="btn"> -->
    	<button type="submit" class="btn" @click="handelClick(username,password)">注册</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'register',
  data () {
    return {
     	username:'',
     	password:''
    }
  },
  methods:{
  	handelClick(username,password){
		axios.post("/v4/registers",{username:username,password:password}).then(res=>{
			console.log(res)
		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title{
	width:100%;
	height:.45rem;
	border-bottom: 2px solid #f2f2f2;
	line-height: .45rem;
	padding-left: .15rem;
	i{
		display: block;
		float: left;
		font-size: .18rem;
	}
	p{
		color: black;
		position: relative;left:1.4rem;
	}
}
.message{
	width:100%;
	color: #999999;
	input{border:none;outline: none;}
	div{
		width:100%;
		height:.42rem;
		border-bottom: 1px solid #f2f2f2;
		padding-top: .08rem;
		padding-left: .2rem;
	}
	.btn{
		width:3.6rem;
		height:.5rem;
		background:#f4f4f4;
		line-height: .5rem;
		text-align: center;
		color: #999999;
		margin-left: .08rem;
		outline: none;
	}
}
</style>
