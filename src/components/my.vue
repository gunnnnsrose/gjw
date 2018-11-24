<template>
  <div>
    {{title}}的主页
    <router-link to="/register" tag="p">注册</router-link>
    <router-link to="/login" tag="p">登陆</router-link>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      
    }
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
