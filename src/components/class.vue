<template>
  <div id="class">
    <div class="search">
      <input type="text" disabled placeholder="请输入商品名称">
    </div>
    <div class="types">
      <div v-for="data in datalist" class="classes" :key="data.Url">
      	<span class="r">查看全部></span><span>{{data.TypeName}}</span>
      	<ul class="clear">
      	  <!-- <router-link to="/list/id" tag="li" v-for="info in data.TypeData" :key="info.id" class="l">
      		{{info.Name}}
  		  </router-link> -->
  		  <li v-for="info in data.TypeData" @click="jump(data.PinYin,info.PinYin)" :key="info.Url" class="l">
      		{{info.Name}}
  		  </li>
      	</ul>
  	  </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'class',
  data () {
    return {
      datalist: []
    }
  },
  mounted() {
  	axios.get("/BtCApi/List/GetSeriesList").then(res=>{
  	  console.log(res.data);

  	  this.datalist = res.data.data.item_data;
  	}).catch(err=>{
  	  console.log(err);
  	})
  },
  methods: {
  	jump(str1,str2) {
  	  this.$router.push('/list/'+str1+'-'+str2);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #class {
  	width: 100%;
  	.l {
  	  float: left;
  	}
  	.r {
  	  float: right;
  	}
	.search {
	  width: 100%;
	  height: .5rem;
	  border-bottom: 1px solid #eee;
	  background: #fff;
	  input {
	  	width: 90%;
	  	height: .4rem;
	  	line-height: .4rem;
	  	margin: .05rem 5%;
	  	border: none;
	  	border-radius: 5px;
	  	text-indent: .16rem;
	  	color: #ddd;
	  }
	}
	.types {
	  width: 100%;
	  .classes {
	  	width: 100%;
	  	span {
	  	  display: inline-block;
	  	  width: 50%;
	  	  height: .3rem;
	  	  line-height: .3rem;
	  	  text-indent: 5px;
	  	}
	  	span.r {
	  	  text-align: right;
	  	  padding-right: 5px;
	  	  font-size: 12px;
	  	  color: #999;
	  	}
	  	ul {
	  	  width: 100%;
	  	  li {
	  	  	width: 49%;
	  	  	height: .36rem;
	  	  	line-height: .36rem;
	  	  	font-size: .14rem;
	  	  	text-indent: .05rem;
	  	  	background: #eee;
	  	  	margin-bottom: .05rem;
	  	  }
	  	  li:nth-of-type(2n) {
	  	  	margin-left: 2%;
	  	  }
	  	}
	  }
	}
  }
</style>
