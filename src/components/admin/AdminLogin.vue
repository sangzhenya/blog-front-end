<template>
  <div>
    <div>
      <div>
        <label for="userName">User Name: </label>
        <input type="text" id="userName"/>
      </div>
      <div>
        <label for="password">Password: </label>
        <input type="password" id="password"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdminLogin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
