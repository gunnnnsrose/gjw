<template>
  <div>
    list
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      datalist: [],
      index: 1
    }
  },
  mounted() {
  	// console.log(this.$route.params.str);

  	fetch(`/BtCApi/List/GetProListWhere?ParentID=4&brand=1450&strWhere=0,0,0,0,0&sort=0&PageIndex=${this.index}&PageSize=20&userID=298969`).then(res=>res.json()).then(res=>{
	  this.datalist = res.data.Prolist;
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
