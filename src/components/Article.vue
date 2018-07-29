<template>
  <div>
    <div class="main-content">
      <div class="title">{{article.title}}</div>
      <div class="content">
        <div class="article-content" v-html="article.content"></div>
        <div class="article-attr">
          <Tag><router-link to='/1'>首页</router-link></Tag>
          <Tag type="border">{{article.createDate | formatDate}}</Tag>
          <Tag :color="colorSet[Math.floor(Math.random() * 4)]">
            <router-link :to="'/category/' + article.category.id">{{article.category.name}}</router-link>
          </Tag>
          <Tag type="border" :color="colorSet[Math.floor(Math.random() * 4)]"
               v-for="tag in article.tags" v-bind:key="tag.id" :name="tag.name">{{ tag.name }}</Tag>
        </div>
      </div>
      <div class="pre-next-router">
        <router-link :to="'/article/' + article.preArticle.id" v-if="article.preArticle != null">
          <div class="pre-router"><Icon type="ios-arrow-back" /> {{article.preArticle.title}}</div>
        </router-link>
        <router-link :to="'/article/' + article.nextArticle.id"  v-if="article.nextArticle != null">
          <div class="next-router">{{article.nextArticle.title}} <Icon type="ios-arrow-forward" /></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'
import axios from 'axios'
import CommonConfig from '@/config/common-config'
import '@/assets/style/prism.css'
import '@/assets/js/prism.js'
import DateUtils from '@/libs/date-utils'

export default {
  name: 'Article',
  components: {
    BlogHeader
  },
  data () {
    return {
      id: 0,
      colorSet: ['primary', 'error', 'success', 'warning'],
      article: {
        category: {id: 0}
      }
    }
  },
  filters: {
    formatDate (date) {
      return DateUtils.formatDate(date);
    }
  },
  methods: {
    changePage () {
      if (this.$route.params.id) {
        this.id = parseInt(this.$route.params.id);
      }
      let that = this;
      axios({
        url: CommonConfig.webDomain + 'public/article',
        method: 'post',
        data: {
          'id': that.id
        }
      }).then(function (response) {
        that.article = response.data.data;
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
    box-shadow: 0 5px 30px 3px #cccccc;
    font-size: 16px;
    margin: 50px 10%;
    padding: 20px 30px;
    width: 80%;
  }
  .title{
    margin-top: 20px;
    font-size: 24px;
    margin-bottom: 40px;
  }
  .content{
    min-height: 600px;
  }
  .article-attr{
    margin-top: 20px;
  }
  .pre-next-router {
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .pre-next-router div{
    display: inline-block;
  }
  .next-router{
    float: right;
  }
  @media (max-width: 800px) {
    .main-content{
      box-shadow: none;
      font-size: 14px;
      margin: 10px 5%;
      padding: 0;
      width: 90%;
      word-break: break-all;
    }
    .title{
      margin-top: 10px;
      font-size: 24px;
      margin-bottom: 10px;
    }
  }
</style>
