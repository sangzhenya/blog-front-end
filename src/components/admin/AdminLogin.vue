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
    <div>
      <h2>{{msg}}</h2>
      <hr />
      <h4>{{$store.state.count}} - {{count}}</h4>
      <hr/>
      <p>
        <button @click="$store.commit('add', 10)">Add</button>
        <button @click="reduce">Min</button>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/vuex/store'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'AdminLogin',
  data () {
    return {
      userName: 'admin',
      password: 'admin',
      msg: 'hello vuex'
    }
  },
  computed: {
    ...mapState(['count'])
  },
  store,
  methods: {
    ...mapMutations(['reduce']),
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
        alert(response.data.message)
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
