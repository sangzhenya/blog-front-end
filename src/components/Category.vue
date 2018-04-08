<template>
  <div>
    <BlogHeader :pageType = '"category"' />
    <div class="category-content">
      <ul class="category-ul">
        <li v-for="category in categories" :key="category.name">
          <div :class="category.style">{{category.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'

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
  mounted () {
    let categories = ['前段', 'Java', '数据结构', '沉思集', '无聊'];
    let that = this;
    categories.forEach(function (item) {
      that.categories.push({
        name: item,
        style: 'style' + Math.ceil(Math.random() * 5)
      })
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
