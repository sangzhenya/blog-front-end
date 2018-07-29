<template>
  <div>
    <BlogHeader :pageType = '"category"' />
    <div class="main-content">
      <div class="category-title">{{data.name}}</div>
      <div class="article-list">
        <Timeline>
          <TimelineItem :color="colorSet[Math.floor(Math.random() * 4)]" v-for="article in data.articleList" v-bind:key="article.id">
            <router-link :to="'/article/' + article.id">
              <div class="article-timeline">{{article.title}}
                <Tag class="article-create-date">{{article.createDate | formatDate}}</Tag></div>
            </router-link>
            </TimelineItem>
        </Timeline>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'
import axios from 'axios'
import CommonConfig from '@/config/common-config'
import DateUtils from '@/libs/date-utils'

export default {
  name: 'CategoryArticle',
  components: {
    BlogHeader
  },
  data () {
    return {
      id: 0,
      data: {articleList: [{id: 0}]},
      colorSet: ['blue', 'green', 'red', 'yellow']
    }
  },
  filters: {
    formatDate (date) {
      return DateUtils.formatDate(date);
    }
  },
  methods: {
    changePage () {
      if (this.$route.params.id) {
        this.id = parseInt(this.$route.params.id);
      }
      let that = this;
      axios({
        url: CommonConfig.webDomain + 'public/category',
        method: 'post',
        data: {
          'id': that.id
        }
      }).then(function (response) {
        console.log(that.data);
        that.data = response.data.data;
      }).catch(function (error) {
        console.log(error)
      });
    }
  },
  watch: {
    $route: 'changePage'
  },
  mounted () {
    this.changePage();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  .article-list{
    margin-left: 10px;
    margin-top: 20px;
  }
  .article-timeline{
    font-size: 14px;
    margin-top: -2px;
  }
  .article-create-date{
    margin-left: 20px;
  }
  @media (max-width: 800px) {
    .main-content{
      font-size: 16px;
      margin-top: 10px;
      margin-left: 5%;
      padding: 0;
      width: 90%;
    }
    .article-timeline{
      font-size: 12px;
      margin-top: 0;
    }
  }
</style>
