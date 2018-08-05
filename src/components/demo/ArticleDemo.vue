<template>
  <div>
    <div class="global-va-main-content">
      <div class="global-va-title"> Article Demo </div>
      <div class="global-va-content">
        <div class="global-va-article-content">
          <div>
            <pre># 开启gzip
gzip on;
# 启用gzip压缩的最小文件，小于设置值的文件将不会压缩
gzip_min_length 1k;
# gzip 压缩级别，1-10，数字越大压缩的越好，也越占用CPU时间
gzip_comp_level 2;
# 进行压缩的文件类型。javascript有多种形式。其中的值可以在 mime.types 文件中找到。
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png font/ttf font/otf image/svg+xml;
# 是否在http header中添加Vary: Accept-Encoding，建议开启
gzip_vary on;
# 禁用IE 6 gzip
gzip_disable "MSIE [1-6]\.";</pre>
          </div>
        </div>
        <div class="global-va-article-attr">
          <Tag><router-link to='/1'>首页</router-link></Tag>
          <Tag type="border"> 2018-7-31 23:58 </Tag>
          <Tag :color="colorSet[Math.floor(Math.random() * 4)]">测试分类</Tag>
          <Tag type="border" :color="colorSet[Math.floor(Math.random() * 4)]">测试标签 1</Tag>
          <Tag type="border" :color="colorSet[Math.floor(Math.random() * 4)]">测试标签 2</Tag>
          <Tag type="border" :color="colorSet[Math.floor(Math.random() * 4)]">测试标签 3</Tag>
          <Tag type="border" :color="colorSet[Math.floor(Math.random() * 4)]">测试标签 4</Tag>
        </div>
      </div>
      <div class="global-va-pre-next-router">
        <div class="global-va-pre-router"><Icon type="ios-arrow-back" /> 上一篇文章 </div>
        <div class="global-va-next-router"> 下一篇文章 <Icon type="ios-arrow-forward" /></div>
      </div>
    </div>
  </div>
</template>util.title

<script>
import BlogHeader from '@/components/BlogHeader'
import DateUtils from '@/libs/date-utils'

export default {
  name: 'ArticleDemo',
  components: {
    BlogHeader
  },
  data () {
    return {
      colorSet: ['primary', 'error', 'success', 'warning']
    }
  },
  filters: {
    formatDate (date) {
      return DateUtils.formatDate(date);
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  .global-va-article-content pre {
    background-color: #f5f2f0;
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    color: #000;
    font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
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
