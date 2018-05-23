<template>
  <div class="top-bar">
    <div class="user-info-part">
      <span class="user-name">User Name</span>
      <span class="login-out" @click="loginOut">Login Out</span>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'TopBar',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    loginOut () {
      Cookies.remove('user');
      this.$router.push('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    color: inherit;
  }
  .top-bar{
    background-color: #eaeaea;
  }
  .user-info-part span{
    float: right;
    display: inline-block;
    width: 100px;
    line-height: 40px;
    cursor: pointer;
    text-align: center;
  }
  .user-info-part span:hover{
    background-color: #cccccc;
  }
</style>
