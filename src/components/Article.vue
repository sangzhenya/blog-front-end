<template>
  <div>
    <div class="main-content">
      <router-link to='/1'><div class="back-main">回首页</div></router-link>
      <div class="title">{{data.title}}</div>
      <div class="category">{{data.category.name}}</div>
      <div>
        <ul class="tg-ul">
          <li v-for="tag in data.tags" v-bind:key="tag.id">标签1</li>
        </ul>
      </div>
      <div class="content">
        {{data.content}}
      </div>
      <div class="pre-next-router">
        <router-link :to="'/article/' + data.preArticle.id" v-if="data.preArticle != null"><div class="pre-router">上一篇： {{data.preArticle.title}}</div></router-link>
        <router-link :to="'/article/' + data.nextArticle.id"  v-if="data.nextArticle != null"><div class="next-router">下一篇：{{data.nextArticle.title}}</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'
import axios from 'axios'

export default {
  name: 'Article',
  components: {
    BlogHeader
  },
  data () {
    return {
      id: 0,
      data: {
        category: {}
      }
    }
  },
  methods: {
    changePage () {
      if (this.$route.params.id) {
        this.id = parseInt(this.$route.params.id);
      }
      let that = this;
      axios({
        url: 'http://localhost:8080/public/article',
        method: 'post',
        data: {
          'id': that.id
        }
      }).then(function (response) {
        that.data = response.data.data;
        console.log(that.data)
      }).catch(function (error) {
        console.log(error)
      });
    }
  },
  watch: {
    $route: 'changePage'
  },
  mounted () {
    this.changePage();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    color: inherit;
  }
  .main-content{
    font-size: 16px;
    margin-top: 30px;
    margin-left: 10%;
    padding-left: 30px;
    width: 80%;
  }
  .tg-ul{
    display: inline-block;
    margin-bottom: 20px;
  }
  .tg-ul li{
    list-style: none;
    display: inline-block;
    width: 50px;
    height: 24px;
  }
  .title{
    margin-top: 20px;
    font-size: 24px;
  }
  .category {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .pre-next-router {
    margin-top: 50px;
  }
  .pre-next-router div{
    display: inline-block;
  }
  .next-router{
    float: right;
  }
</style>
