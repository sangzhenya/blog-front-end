<template>
  <div>
    <BlogHeader :pageType = '"about"' />
    <div class="about-me">
      <div class="pre-desc">风景很美、何不停下脚步看看。</div>
      <p class="middle-desc"><img src="https://i.loli.net/2018/07/29/5b5c936618050.jpg" alt="sunrise" class="photo"></p>
      <div class="sub-desc">
        <p>如有任何对博客内容的疑问或者涉及到文章内容引用侵权的问题，请联系我邮件地址：sangzhenya@gmail.com。一定会及时处理回复，谢谢！</p>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'

export default {
  name: 'About',
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
  .about-me {
    width: 80%;
    margin: 30px 10%;
    padding-left: 30px;
    font-size: 14px;
  }
  .pre-desc{
    margin-bottom: 20px;
  }
  .photo{
    width: 50%;
  }
  .sub-desc{
    width: 80%;
    margin-top: 20px;
    padding: 10px 10px;
    border-left: 2px solid #cccccc;
    background-color: #efefef;
  }
</style>
