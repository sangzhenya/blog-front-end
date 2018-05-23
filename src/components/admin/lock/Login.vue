<template>
  <div class="page-main">
    <!--<div>
      <label for="userName">User Name: </label>
      <input type="text" id="userName" v-model="userName"/>
    </div>
    <div>
      <label for="password">Password: </label>
      <input type="password" id="password" v-model="password"/>
    </div>
    <input type="button" value="Login" @click="login"/>
    <i-input>1231</i-input>-->
    <div class="login-main">
      <div class="login-header">Login</div>
      <div><i-input type="text"  v-model="userName"></i-input></div>
      <div><i-input type="password" v-model="password" @on-enter="login"></i-input></div>
      <div>
        <i-button type="primary" @click="login">登录</i-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/vuex/store'
import Cookies from 'js-cookie';

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
        url: 'http://localhost:8080/admin/login',
        method: 'post',
        data: {
          'username': that.userName,
          'password': that.password
        }
      }).then(function (response) {
        console.log(response.data);
        Cookies.set('user', that.userName);
        that.$router.push('/admin/index');
      }).catch(function (error) {
        console.log(error)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-main {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #cccccc;
  }
  .login-main{
    margin-top: 15%;
    width: 400px;
    height: 300px;
    background-color: red;
    margin-left: auto;
    margin-right: auto;
  }
</style>
