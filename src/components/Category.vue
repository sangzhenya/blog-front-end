<template>
  <div>
    <BlogHeader :pageType = '"category"' />
    <div class="category-content">
      <ul class="category-ul">
        <li v-for="category in categories" :key="category.name">
          <router-link :to="'/category/' + category.id"><div :class="category.style">{{category.name}}</div></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'
import axios from 'axios'

export default {
  name: 'Category',
  components: {
    BlogHeader
  },
  data () {
    return {
      categories: []
    }
  },
  methods: {
    changePage () {
      let that = this;
      axios({
        url: 'http://localhost:8080/public/categories',
        method: 'post'
      }).then(function (response) {
        response.data.data.categoryVOList.forEach(function (item) {
          that.categories.push({
            id: item.id,
            name: item.name,
            style: 'style' + Math.ceil(Math.random() * 5)
          })
        });
      }).catch(function (error) {
        console.log(error)
      });
    }
  },
  mounted () {
    this.changePage();
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
  .category-ul li {
    list-style: none;
    display: inline-block;
    text-align: center;
    margin: auto 10px;
  }
  .category-ul div{
    cursor: pointer;
    font-size: 16px;
    padding: 5px 15px;
    border-radius: 3px;
  }
  .style1{
    background-color: burlywood;
  }
  .style2{
    background-color: gray;
  }
  .style3{
    background-color: green;
  }
  .style4{
    background-color: greenyellow;
  }
  .style5{
    background-color: darkseagreen;
  }
</style>
