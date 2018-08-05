<template>
  <div>
    <div class="global-va-main-content">
      <div class="global-va-title"> Article Demo </div>
      <div class="global-va-content">
        <div class="global-va-article-content">
          <div>
            <blockquote>这里默认你是已经安装好pip和easy_install，并且已经配置好环境变量</blockquote>
            <h3>方法一</h3>
            <div style="margin-left: 10px;">
              <p>直接通过</p>
              <pre>pip install 第三方库的名称</pre>
              <p>或者</p>
              <pre>easy_install 第三方库的名称</pre>
              <p>以上两种方法简单直接可以成功的安装绝大多数第三方的库文件，但是部分文件也许是和底层关系密切，所以通过以上方法安装的时候可能由于有部分的依赖文件没有安装导致安装失败，此时就要使用第二种安装方法了！</p>
            </div>
            <h3>方法二</h3>
            <div style="margin-left: 10px;">
              <p>首先通过</p>
              <pre>pip install wheel</pre>
              <p>安装完成wheel</p>
              <p>然后到  <a href='http://www.lfd.uci.edu/~gohlke/pythonlibs/' target='_blank' class='url'>http://www.lfd.uci.edu/~gohlke/pythonlibs/</a>  找到你需要的库文件下载下来，这里应该是编译好的可以直接使用的。</p>
              <p>然后通过命令提示符（管理员权限）运行</p>
              <pre>wheel install 你下载的文件名（包含后缀）</pre>
              <p>如果什么都没有显示证明你已经安装成功了，这时你可以通过python简单的测试一下是否安装成功。</p>
              <p>如果提示平台不对，那就换一个连接找到时候你电脑的版本下载安装。</p>
            </div>
            <i>通过以上方法你基本上可以顺利的安装第三方的库文件了</i>
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
