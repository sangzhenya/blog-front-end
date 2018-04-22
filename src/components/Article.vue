<template>
  <div>
    <div class="main-content">
      <router-link to='/index'><div class="back-main">回首页</div></router-link>
      <div class="title">这里是测试标题 {{id}}</div>
      <div class="category">分类1</div>
      <div>
        <ul class="tg-ul">
          <li>标签1</li>
          <li>标签2</li>
          <li>标签3</li>
          <li>标签4</li>
        </ul>
      </div>
      <div class="content">
        <p>
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
        </p>
        <p>
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
        </p>
        <p>
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
        </p>
        <p>
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
          c测试内容，测试内容，测试内容，测试内容测试。
        </p>
      </div>
      <div class="pre-next-router">
        <div class="pre-router">Pre</div>
        <div class="next-router">Next</div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'

export default {
  name: 'Article',
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
  .tg-ul{
    display: inline-block;
    margin-bottom: 20px;
  }
  .tg-ul li{
    list-style: none;
    display: inline-block;
    width: 50px;
    height: 24px;
  }
  .title{
    margin-top: 20px;
    font-size: 24px;
  }
  .category {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .pre-next-router {
    margin-top: 50px;
  }
  .pre-next-router div{
    display: inline-block;
  }
  .next-router{
    float: right;
  }
</style>
