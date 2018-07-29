<template>
  <div class="page-main">
    <!--<div class="login-background">
      <img class="login-background-img" src="../../../assets/img/background/background_1.jpg" />
    </div>-->
    <div class="login-main">
      <div class="login-header">Login In</div>
      <div class="login-form">
        <div><i-input type="text"  v-model="userName"></i-input></div>
        <div><i-input type="password" v-model="password" @on-enter="login"></i-input></div>
        <div class="submit-field">
          <i-button type="primary" long @click="login">登录</i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/vuex/store'
import Cookies from 'js-cookie';
import CommonConfig from '@/config/common-config'

export default {
  name: 'AdminLogin',
  data () {
    return {
      userName: 'admin',
      password: 'admin',
      msg: 'hello vuex'
    }
  },
  store,
  methods: {
    login () {
      let that = this;
      axios({
        url: CommonConfig.webDomain + 'admin/login',
        method: 'post',
        data: {
          'username': that.userName,
          'password': that.password
        }
      }).then(function (response) {
        console.log(response.data);
        Cookies.set('user', that.userName);
        that.$store.state.authorizeKey = response.data.result;
        Cookies.set('authorizeKey', response.data.result);
        that.$router.push('/admin/index');
      }).catch(function (error) {
        console.log(error)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .page-main {
    background: url("https://i.loli.net/2018/07/17/5b4dd6e37cd40.jpg") 0 / cover fixed;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .login-main{
    position: relative;
    background: hsla(0, 0%, 100%, .3);
    border-radius: 5px;
    margin-top: 15%;
    width: 400px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
  .login-main:before {
    background: url("https://i.loli.net/2018/07/17/5b4dd6e37cd40.jpg") 0 / cover fixed;
    content: '';
    z-index: -1;
    filter: blur(10px);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -30px;
  }
  .login-header{
    margin-top: 15px;
    text-align: center;
    font-size: 26px;
    color: #fff;
    line-height: 1.5;
  }
  .login-form{
    margin-top: 20px;
    margin-left: 15%;
    margin-right: 15%;
  }
  .login-form div{
    margin-bottom: 10px;
  }
  .login-form input{
    color: #333333;
    background-color: #eaeaea99;
  }
  @media (max-width: 800px) {
    .login-main{
      position: relative;
      background: hsla(0, 0%, 100%, .3);
      margin-top: 40%;
      width: 80%;
      height: 250px;
    }
    .login-form{
      margin-top: 20px;
      margin-left: 5%;
      margin-right: 5%;
    }
    .page-main {
      background: url("https://i.loli.net/2018/07/29/5b5cff2951206.jpg") 0 / cover fixed;
    }
    .login-main:before {
      background: url("https://i.loli.net/2018/07/29/5b5cff2951206.jpg") 0 / cover fixed;
    }
  }
</style>
