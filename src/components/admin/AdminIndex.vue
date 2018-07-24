<template>
  <div>
    <div>
      This is the index page!
    </div>
  </div>
</template>

<script>
import '../../assets/style/simplemde.min.css';
import store from '@/vuex/store'

export default {
  name: 'AdminIndex',
  data () {
    return {
      msg: ''
    }
  },
  store,
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
