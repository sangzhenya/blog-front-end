<template>
  <div class="header">
    <div>
      <div class="header-title"><router-link to="/1">半庭新月</router-link></div>
      <ul class="header-menu" style="margin-bottom: 0">
        <router-link to="/1"><li :class="{active: isIndexActive}">首页</li></router-link><router-link
                     to="/category"><li :class="{active: isCategoryActive}">分类</li></router-link><router-link
                     to="/about"><li :class="{active: isAboutActive}">关于</li></router-link>
      </ul>
    </div>
    <div class="header-line"></div>
  </div>
</template>

<script>

export default {
  name: 'BlogHeader',
  props: ['pageType'],
  data () {
    return {
      isIndexActive: false,
      isCategoryActive: false,
      isAboutActive: false
    }
  },
  mounted () {
    if (this.pageType === 'index') {
      this.isIndexActive = true
    }
    if (this.pageType === 'category') {
      this.isCategoryActive = true
    }
    if (this.pageType === 'about') {
      this.isAboutActive = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    color: inherit;
  }
  .header {
    margin: 3% 10% auto 10%;
    padding: 10px 10px;
    width: 80%;
  }
  .header-menu {
    display: inline-block;
    margin-left: 50px;
    margin-bottom: 0;
  }
  .header-menu li {
    list-style: none;
    display: inline-block;
    width: 100px;
    text-align: center;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
    margin-bottom: -1px;
    border-bottom: 1px solid #eaeaea;
  }
  .header-menu li:hover {
    background-color: #eaeaea;
  }
  .header-menu li.active{
    background-color: #eaeaea;
    border-bottom: 1px solid #666666;
  }
  .header-title{
    cursor: pointer;
    font-size: 30px;
    padding-left: 20px;
    display: inline-block;
  }
  .header-line{
    width: 50%;
    border-bottom: 1px solid #eaeaea;
  }
  @media (max-width: 800px) {
    .header {
      padding: 10px 0;
      margin: 10px auto auto auto;
      width: 100%;
    }
    .header-title{
      padding-left: 10px;
      font-size: 24px;
    }

    .header-menu {
      width: 180px;
      margin-left: 20px;
    }
    .header-menu li {
      list-style: none;
      display: inline-block;
      width: 60px;
      text-align: center;
      font-size: 16px;
    }
    .header-line{
      width: 90%;
      margin-left: 10px;
    }
  }
</style>
