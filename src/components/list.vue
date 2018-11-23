<template>
  <div class="div">
    <div class="nav clear">
      <router-link to="/class" tag="i" class="iconfont icon-back l"></router-link>
      <router-link to="/search" tag="span" class="r">搜索</router-link>
      <input type="text" class="r" placeholder="请输入商品名称">
    </div>
    <div class="sort">
      <span>综合</span>
      <span>销量</span>
      <span>价格</span>
    </div>
    <div class="cont clear"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-immediate-check= "false"
    infinite-scroll-distance="0">
      <div v-for="data in datalist" :key="data.ID" class="one l" @click="jump(data.ID)">
        <img :src="'http://img0.gjw.com/product/'+data.Pic" alt="">
        <p class="name">{{data.ProductName}}</p>
        <p class="price">￥{{data.APPPrice}}</p>
        <p class="comment">
          {{data.GoodCommment}}条好评
          <span class="rate r">100%好评</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  name: 'list',
  data () {
    return {
      datalist: [],
      index: 1,
      loading: false,
      msg: '正在加载中...'
    }
  },
  computed: {
    // parentId() {
    //   return this.$store.state.parentId;
    // },
    // brand() {
    //   return this.$store.state.brand;
    // }
  },
  mounted() {
  	// console.log(this.$route.params.str);
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });

    if(this.$route.params.str.indexOf('-') != -1) {
      fetch(`/BtCApi/List/GetProListWhere?ParentID=${this.$store.state.parentId}&brand=${this.$store.state.brand}&strWhere=0,0,0,0,0&sort=0&PageIndex=${this.index}&PageSize=20&userID=298969`).then(res=>res.json()).then(res=>{
        if(res.data === null) {
          return;
        }

        this.datalist = res.data.Prolist;
      })
    } else {
      fetch(`/BtCApi/List/GetProListWhere?ParentID=${this.$route.params.str}&brand=0&strWhere=0,0,0,0,0&sort=0&PageIndex=${this.index}&PageSize=20&userID=298969`).then(res=>res.json()).then(res=>{
        if(res.data === null) {
          return;
        }

        this.datalist = res.data.Prolist;
      })
    }
  },
  updated() {
    Indicator.close();
  },
  methods: {
    jump(id) {
      this.$router.push('/detail/'+id);
    },
    loadMore() {
      console.log('到底了');
      Indicator.open(this.msg);
      this.index++;

      if(this.index>10) {
        this.loading = true;
        this.msg = '到底了';
        return;
      }


      if(this.$route.params.str.indexOf('-') != -1) {
        fetch(`/BtCApi/List/GetProListWhere?ParentID=${this.$store.state.parentId}&brand=${this.$store.state.brand}&strWhere=0,0,0,0,0&sort=0&PageIndex=${this.index}&PageSize=20&userID=298969`).then(res=>res.json()).then(res=>{
          if(res.data === null) {
            return;
          }

          this.datalist = [...this.datalist,...res.data.Prolist];
        })
      } else {
        fetch(`/BtCApi/List/GetProListWhere?ParentID=${this.$route.params.str}&brand=0&strWhere=0,0,0,0,0&sort=0&PageIndex=${this.index}&PageSize=20&userID=298969`).then(res=>res.json()).then(res=>{
          if(res.data === null) {
            return;
          }

          this.datalist = [...this.datalist,...res.data.Prolist];
        })
      }

      // this.$nextTick(()=>{
      //   Indicator.close();
      // });

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
      border-bottom: 1px solid #eee;
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
    .sort {
      width: 100%;
      height: .3rem;
      margin: .1rem 0;
      display: flex;
      span {
        flex: 1;
        height: .3rem;
        line-height: .3rem;
        display: inline-block;
        text-align: center;
      }
      span:nth-of-type(2) {
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
      }
    }
    .cont {
      width: 100%;
      .one {
        width: 45%;
        height: 2.8rem;
        img {
          width: 1.5rem;
          height: 1.5rem;
          margin: .1rem auto;
        }
        p {
          width: 1.5rem;
          margin: 0 auto;
          font-size: .14rem;
          line-height: .2rem;
        }
        .name {
          color: #666;
        }
        .price {
          margin: .3rem auto 0 auto;
          font-weight: bold;
          color: #ac2023;
        }
        .comment {

        }
      }
      .one:nth-of-type(2n+1) {
        margin-left: 5%;
      }
      .one:nth-of-type(2n) {
        margin-right: 5%;
      }
    }
  }
</style>
