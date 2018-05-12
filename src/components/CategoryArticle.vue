<template>
  <div>
    <BlogHeader :pageType = '"category"' />
    <div class="main-content">
      <div class="category-title">{{data.name}}</div>
      <div>
        <ul class="article-ul">
          <li v-for="article in data.articleList" v-bind:key="article.id"><router-link :to="'/article/' + article.id"><div>{{article.title}}</div><div>{{article.createDate[0] + '-' + article.createDate[1] + '-' + article.createDate[2] +
            ' ' + article.createDate[3] + ':' + article.createDate[4]}}</div></router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'
import axios from 'axios'

export default {
  name: 'CategoryArticle',
  components: {
    BlogHeader
  },
  data () {
    return {
      id: 0,
      data: {}
    }
  },
  methods: {
    changePage () {
      if (this.$route.params.id) {
        this.id = parseInt(this.$route.params.id);
      }
      let that = this;
      axios({
        url: 'https://web.sangzhenya.com/public/category',
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
  .category-title{
    font-size: 24px;
  }
  .article-ul{
    margin-top: 20px;
  }
  .article-ul li{
    list-style: none;
    line-height: 2;
  }
  .article-ul li:before{
    content: '·';
    font-weight: bolder;
    margin-right: 10px;
  }
  .article-ul li div {
    display: inline-block;
  }
  .article-ul li div:nth-child(1) {
  }
  .article-ul li div:nth-child(2) {
    margin-left: 20px;
    font-size: 14px;
    color: #999;
  }
</style>
