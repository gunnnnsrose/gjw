<template>
  <div>
    <ul>
    	<!-- <li v-for="data in datalist">
    		<img :src="data.Pic" alt="">
    	</li> -->
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'home',
  data () {
    return {
      datalist:[]
    }
  },
  mounted(){
  	axios.get("/BtCApi/Home/GetHomePageImg").then(res=>{
  		console.log(res.data.data)
  		this.datalist = res.data.data
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  img{width:100%;}
</style>
