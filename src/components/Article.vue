<template>
  <div>
    <div class="main-content">
      <div class="contents">
        {{id}}
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
