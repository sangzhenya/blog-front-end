<template>
  <div>
    <BlogHeader :pageType = '"about"' />
    <div class="about-me">
      This is about me!
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
    margin-left: 10%;
    width: 80%;
    margin-top: 30px;
    padding-left: 30px;
  }
</style>
