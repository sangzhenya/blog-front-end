<template>
  <div>
    <BlogHeader :pageType = '"index"' />
    <div class="main-content">
      <div class="contents">
        <div class="content">
          <div class="article-title">这是测试标题</div>
          <div class="article-content">
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
          </div>
        </div>
        <div class="content">
          <div class="article-title">这是测试标题</div>
          <div class="article-content">
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
          </div>
        </div>
        <div class="content">
          <div class="article-title">这是测试标题</div>
          <div class="article-content">
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
          </div>
        </div>
      </div>
      <div class="pages">
        <ul class="page-ul">
          <li class="page-active">1</li><li>2</li><li>3</li><li>4</li><li>5</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'

export default {
  name: 'Content',
  components: {
    BlogHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-content{
    margin-top: 30px;
    margin-left: 10%;
    padding-left: 30px;
    width: 80%;
  }
  .article-title{
    font-size: 24px;
  }
  .article-content{
    margin-top: 5px;
    margin-bottom: 30px;
  }
  .pages{
    margin-top: 50px;
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
</style>
