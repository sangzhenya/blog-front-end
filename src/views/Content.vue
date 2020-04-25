<template>
  <div>
    <BlogHeader :pageType = '"index"' />
    <div class="main-content">
      <div class="contents">
        <div class="content" v-for="article in data.articles" v-bind:key="article.id">
          <router-link :to="'/article/' + article.id"><div class="article-title">{{article.title}}</div></router-link>
          <router-link :to="'/article/' + article.id">
            <div class="article-content">{{article.summary}}</div>
          </router-link>
          <div class="article-attr">
            <Tag type="border">{{article.createDate | formatDate}}</Tag>
            <Tag :color="colorSet[Math.floor(Math.random() * 4)]">
              <router-link :to="'/category/' + article.category.id">{{article.category.name}}</router-link>
            </Tag>
            <Tag type="border" :color="colorSet[Math.floor(Math.random() * 4)]"
                 v-for="tag in article.tags" v-bind:key="tag.id" :name="tag.name">{{ tag.name }}</Tag>
          </div>
        </div>
      </div>
      <div class="pages">
        <ul class="page-ul">
          <li v-for="n in data.page.totalPage" v-bind:key="n" v-bind:class="{ 'page-active': n === page }">
            <router-link :to="'/' + n"><div>{{ n }}</div></router-link>
          </li>
        </ul>
      </div>
      <div style="margin-bottom: 30px;text-align: center;font-size: 12px;">备案号：<a href="http://www.beian.miit.gov.cn" style="text-decoration: underline">豫ICP备16007431号</a><span style="margin-left: 20px;">©Xinyue 2019</span></div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/views/header/BlogHeader'
import axios from 'axios'
import CommonConfig from '@/config/common-config'
import DateUtils from '@/utils/date-utils'

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
      },
      colorSet: ['primary', 'error', 'success', 'warning']
    }
  },
  methods: {
    changePage () {
      let me = this
      if (me.$route.params.page) {
        me.page = parseInt(me.$route.params.page)
      }
      axios({
        url: CommonConfig.webDomain + 'public/page',
        headers: {
          Authorization: ''
        },
        method: 'post',
        data: {
          'page': me.page
        }
      }).then(response => {
        me.data = response.data.data
        if (!me.data || me.data.articles.length <= 0) {
          me.$router.push('/error/404')
        }
      }).catch(error => console.log(error))
    }
  },
  filters: {
    formatDate (date) {
      return DateUtils.formatDate(date)
    }
  },
  watch: {
    $route: 'changePage'
  },
  mounted () {
    this.changePage()
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
  }
  .pages{
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .page-ul{
    padding-left: 0;
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
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .article-attr div{
    font-size: 12px;
    display: inline-block;
  }
  @media (max-width: 800px) {
    .main-content{
      font-size: 16px;
      margin-top: 10px;
      margin-left: 5%;
      padding: 0;
      width: 90%;
      word-break: break-all;
    }
  }
</style>
