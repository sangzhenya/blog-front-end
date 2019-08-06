<template>
  <div>
    <BlogHeader :pageType = '"category"' />
    <div class="category-content">
      <Tag class="category" :color="colorSet[Math.floor(Math.random() * 4)]"
           v-for="category in categories" v-bind:key="category.id" :name="category.name">
        <router-link :to="'/category/' + category.id">{{category.name}}</router-link>
      </Tag>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/views/header/BlogHeader'
import axios from 'axios'
import CommonConfig from '@/config/common-config'

export default {
  name: 'Category',
  components: {
    BlogHeader
  },
  data () {
    return {
      categories: [],
      colorSet: ['primary', 'error', 'success', 'warning']
    }
  },
  methods: {
    changePage () {
      let that = this
      axios({
        url: CommonConfig.webDomain + 'public/categories',
        method: 'post'
      }).then(function (response) {
        response.data.data.categoryVOList.forEach(function (item) {
          that.categories.push({
            id: item.id,
            name: item.name,
            style: 'style' + Math.ceil(Math.random() * 5)
          })
        })
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  mounted () {
    this.changePage()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    color: inherit;
  }
  .category-content {
    margin-left: 10%;
    margin-top: 30px;
    padding-left: 20px;
    width: 80%;
  }
  .category{
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
    line-height: 35px;
    height: 35px;
  }
  @media (max-width: 800px) {
    .category-content {
      margin-left: 5%;
      margin-top: 10px;
      padding: 0;
      width: 90%;
    }
  }
</style>
