<template>
  <div>
    <div class="head">
    	<router-link to="/my" tag="i" class="iconfont icon-back">
    		
    	</router-link>    	
    	<p>账号登陆</p>
    </div>

    <div class="form">
      <input type="text" placeholder="用户名/邮箱/手机" v-model="username">
      <i class="iconfont icon-account"></i>
      <input type="password" placeholder="密码" v-model="password">
      <i class="iconfont icon-warning"></i>

    <div class="caozuo">
      <span>忘记密码</span>
      <router-link tag="span" to="/register">注册</router-link>
    </div>
    <button @click="login(username,password)">登陆</button>
    <button>短信验证登陆</button>
   </div>
    

  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'login',
  data () {
    return {
    	username: '',
      password: ''
    }
  },
  methods: {
    login(username,password) {
      axios.post('/v4/login',{
        username,
        password
      }).then(res=>{
        console.log(res);
      })
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
  	position: relative;
  	border-bottom: 2px #ddd solid;
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
  .form{
    width:100%;
    position: relative;
    input{
      display: block;
      width:100%;
      height:.44rem;
      border:none;
      border-bottom: 1px #ccc solid;
      color:#666;
      text-indent: .4rem;
      outline: none;
    }
    i:nth-of-type(1){
      position: absolute;
      top:.10rem;
      left:.12rem;
      color:#666;
      font-size: .18rem;
    }
    i:nth-of-type(2){
      position: absolute;
      top:.54rem;
      left:.12rem;
      color: #666;
      font-size: .18rem;
    }
  .caozuo{
    overflow: hidden;
    width:100%;
    padding: .06rem .06rem;
    margin-top:.05rem;
    span{
      color:#666;
      font-size: .12rem;
    }
    span:nth-of-type(1){float: left}
    span:nth-of-type(2){float:right;}
  }
  button:nth-of-type(1){
      display: block;
      width:95%;
      margin:.05rem auto;
      height:.5rem;
      border-radius:.3rem;
      border:none;
      color:#fff;
      background: #fb223e;  
      line-height: .5rem;
      font-size: .16rem   
    }
    button:nth-of-type(2){
      display: block;
      width:95%;
      margin:.05rem auto;
      height:.5rem;
      border-radius:.3rem;
      border:1px solid #fb223e;
      color:#fb223e;  
      line-height: .5rem;
      font-size: .16rem;
      background: #fff;
    }
  }

  
</style>
