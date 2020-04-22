<template>
  <div>
    <div class="global-va-main-content">
      <div class="global-va-content">
        <!-- <div class="global-va-article-content" v-html="article.content"></div> -->
        <markdown-it-vue class="global-va-article-content" :content="article.content" :options="options"/>
        <div class="global-va-article-attr">
          <Tag><router-link to='/1'>首页</router-link></Tag>
          <Tag type="border">{{article.createDate | formatDate}}</Tag>
          <Tag :color="colorSet[Math.floor(Math.random() * 4)]">
            <router-link :to="'/category/' + article.category.id">{{article.category.name}}</router-link>
          </Tag>
          <Tag type="border" :color="colorSet[Math.floor(Math.random() * 4)]"
               v-for="tag in article.tags" v-bind:key="tag.id" :name="tag.name">{{ tag.name }}</Tag>
        </div>
      </div>
      <div class="global-va-pre-next-router">
        <router-link :to="'/article/' + article.preArticle.id" v-if="article.preArticle != null">
          <div class="global-va-pre-router"><Icon type="ios-arrow-back" /> {{article.preArticle.title}}</div>
        </router-link>
        <router-link :to="'/article/' + article.nextArticle.id"  v-if="article.nextArticle != null">
          <div class="global-va-next-router">{{article.nextArticle.title}} <Icon type="ios-arrow-forward" /></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CommonConfig from '@/config/common-config'
import DateUtils from '@/utils/date-utils'
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'Article',
  components: {
    MarkdownItVue
  },
  data () {
    return {
      id: 0,
      colorSet: ['primary', 'error', 'success', 'warning'],
      article: {
        category: { id: 0 },
        content: ''
      },
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        }
      }
    }
  },
  filters: {
    formatDate (date) {
      return DateUtils.formatDate(date)
    }
  },
  methods: {
    changePage () {
      if (this.$route.params.id) {
        this.id = parseInt(this.$route.params.id)
      }
      let that = this
      axios({
        url: CommonConfig.webDomain + 'public/article',
        method: 'post',
        data: {
          'id': that.id
        }
      }).then(function (response) {
        that.article = response.data.data
      }).catch(function (error) {
        console.log(error)
      })
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

<style scoped>
  .global-va-article-content h1, .global-va-article-content h2, .global-va-article-content  h3, .global-va-article-content  h4 {
    margin-top: 1.33em;
    margin-bottom: 1.33em;
  }
  .global-va-article-content p {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  .global-va-article-content ol, .global-va-article-content ul {
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 40px;
  }
  .global-va-article-content blockquote{
    background-color: #F6F6F6;
    padding: 10px 30px 10px 10px;
    border-left: 2px solid #009A61;
    display: inline-block;
  }
  .global-va-article-content .url{
    color: #1753e4;
  }
  a{
    color: inherit;
  }
  .global-va-main-content{
    box-shadow: 0 5px 30px 3px #cccccc;
    font-size: 16px;
    margin: 50px 10%;
    padding: 20px 30px;
    width: 80%;
  }
  .global-va-title{
    margin-top: 20px;
    font-size: 24px;
    margin-bottom: 40px;
  }
  .global-va-content{
    min-height: 600px;
  }
  .global-va-article-attr{
    margin-top: 20px;
  }
  .global-va-pre-next-router {
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .global-va-pre-next-router div{
    display: inline-block;
  }
  .global-va-next-router{
    float: right;
  }
  @media (max-width: 800px) {
    .global-va-main-content{
      box-shadow: none;
      font-size: 14px;
      margin: 10px 5%;
      padding: 0;
      width: 90%;
      word-break: break-all;
    }
    .global-va-title{
      margin-top: 10px;
      font-size: 24px;
      margin-bottom: 10px;
    }
  }
</style>
