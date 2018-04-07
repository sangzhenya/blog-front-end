<template>
  <div class="header">
    <div>
      <div class="header-title">半庭新月</div>
      <ul class="header-menu">
        <li>首页</li>
        <li>分类</li>
        <li>关于</li>
      </ul>
    </div>
    <div class="header-line"></div>
  </div>
</template>

<script>

export default {
  name: 'BlogHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    margin: 3% 10% auto 10%;
    padding: 10px 10px;
    width: 80%;
  }
  .header-menu {
    display: inline-block;
    margin-left: 50px;
  }
  .header-menu li {
    list-style: none;
    display: inline-block;
    width: 100px;
    text-align: center;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
  }
  .header-menu li:hover {
    background-color: #eaeaea;
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
</style>
