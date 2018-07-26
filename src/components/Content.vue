<template>
  <div>
    <BlogHeader :pageType = '"index"' />
    <div class="main-content">
      <div class="contents">
        <div class="content" v-for="article in data.articles" v-bind:key="article.id">
          <router-link :to="'/article/' + article.id"><div class="article-title">{{article.title}}</div></router-link>
          <div class="article-attr">
            <div>{{ article.createDate | formatDate }}</div>
          </div>
          <router-link :to="'/article/' + article.id">
            <div class="article-content">{{article.summary}}</div>
          </router-link>
        </div>
      </div>
      <div class="pages">
        <ul class="page-ul">
          <li v-for="n in data.page.totalPage" v-bind:key="n" v-bind:class="{ 'page-active': n === page }">
            <router-link :to="'/' + n"><div>{{ n }}</div></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'
import axios from 'axios'
import CommonConfig from '@/config/common-config'
import DateUtils from '@/libs/date-utils'

export default {
  name: 'Content',
  components: {
    BlogHeader
  },
  data () {
    return {
      page: 1,
      data: {
        page: 1
      }
    }
  },
  methods: {
    changePage () {
      if (this.$route.params.page) {
        this.page = parseInt(this.$route.params.page);
      }
      let that = this;
      axios({
        url: CommonConfig.webDomain + 'public/page',
        headers: {
          Authorization: ''
        },
        method: 'post',
        data: {
          'page': that.page
        }
      }).then(function (response) {
        that.data = response.data.data;
        console.log(that.data)
      }).catch(function (error) {
        console.log(error)
      });
    }
  },
  filters: {
    formatDate (date) {
      return DateUtils.formatDate(date);
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
  .article-title{
    display: inline-block;
    font-size: 24px;
  }
  .article-content{
    margin-top: 5px;
    margin-bottom: 30px;
  }
  .pages{
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .page-ul{
    display: inline-block;
    border-top: 1px solid #cccccc;
  }
  .page-ul li {
    list-style: none;
    display: inline-block;
    width: 25px;
    height: 25px;
    text-align: center;
    cursor: pointer;
    padding: 3px;
    margin-top: -1px;
    border-top: 1px solid #eaeaea;
  }
  .page-ul li:hover{
    background-color: #eaeaea;
  }
  .page-ul li.page-active {
    border-top: 1px solid #666666;
    background-color: #eaeaea;
  }
  .article-attr {
    margin-top: 5px;
    margin-left: 5px;
  }
  .article-attr div{
    font-size: 12px;
    display: inline-block;
  }
  .article-tag-ul{
    margin-left: 15px;
    margin-right: 15px;
  }
  .article-tag-ul li {
    list-style: none;
    display: inline-block;
  }
  .article-tag-ul li:not(:last-child):after {
    content: ', ';
  }
</style>
