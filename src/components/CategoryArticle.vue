<template>
  <div>
    <BlogHeader :pageType = '"category"' />
    <div class="main-content">
      <div class="category-title">测试分类 {{id}}</div>
      <div>
        <ul class="article-ul">
          <li><router-link to='/article/0'><div>这里是测试标题1</div><div>这里是测试标题1</div></router-link></li>
          <li><router-link to='/article/0'><div>这里是测试标题1</div><div>这里是测试标题1</div></router-link></li>
          <li><router-link to='/article/0'><div>这里是测试标题1</div><div>这里是测试标题1</div></router-link></li>
          <li><router-link to='/article/0'><div>这里是测试标题1</div><div>这里是测试标题1</div></router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'

export default {
  name: 'CategoryArticle',
  components: {
    BlogHeader
  },
  data () {
    return {
      id: 0
    }
  },
  mounted () {
    this.id = parseInt(this.$route.params.id);
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
