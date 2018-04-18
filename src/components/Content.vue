<template>
  <div>
    <BlogHeader :pageType = '"index"' />
    <div class="main-content">
      <div class="contents">
        <div class="content">
          <router-link to='/article/0'><div class="article-title">这是测试标题</div></router-link>
          <div class="article-content">
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
          </div>
        </div>
        <div class="content">
          <router-link to='/article/1'><div class="article-title">这是测试标题</div></router-link>
          <div class="article-content">
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
          </div>
        </div>
        <div class="content">
          <router-link to='/article/2'><div class="article-title">这是测试标题</div></router-link>
          <div class="article-content">
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
            这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，这是测试主要内容，
          </div>
        </div>
      </div>
      <div class="pages">
        <ul class="page-ul">
          <li v-for="n in 10" v-bind:key="n" v-bind:class="{ 'page-active': n === page }">
            <router-link :to="'/' + n"><div>{{ n }}</div></router-link>
          </li>
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
      page: 1
    }
  },
  methods: {
    changePage () {
      this.page = parseInt(this.$route.params.page);
    }
  },
  watch: {
    $route: 'changePage'
  },
  mounted () {
    if (this.$route.params.page) {
      this.page = parseInt(this.$route.params.page);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    color: inherit;
  }
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
