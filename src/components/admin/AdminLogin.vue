<template>
  <div>
    <div>
      <div>
        <label for="userName">User Name: </label>
        <input type="text" id="userName" v-model="userName"/>
      </div>
      <div>
        <label for="password">Password: </label>
        <input type="password" id="password" v-model="password"/>
      </div>
      <input type="button" value="Login" @click="login"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminLogin',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
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
        alert(response.data.status)
      }).catch(function (error) {
        console.log(error)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
