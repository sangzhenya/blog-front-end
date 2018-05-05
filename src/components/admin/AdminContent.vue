<template>
  <div>
    <div>
      <div class="left-menu">
        <LeftMenu :indexType = 'indexType'/>
      </div>
      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/admin/LeftMenu'

export default {
  name: 'AdminContent',
  components: {
    LeftMenu
  },
  data () {
    return {
      msg: '',
      indexType: 'index'
    }
  },
  methods: {
    paramsChange () {
      let routerName = this.$route.name;
      if (routerName === 'adminContentIndex') {
        this.indexType = 'index'
      } else if (routerName === 'adminContentMessage') {
        this.indexType = 'message'
      } else if (routerName === 'adminContentOther') {
        this.indexType = 'other'
      }
      console.log(this.$route.params);
    }
  },
  watch: {
    $route: 'paramsChange'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li{
    list-style: none;
  }
  .left-menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: #333;
  }
  .right-content{
    overflow-y: auto;
    position: fixed;
    left: 200px;
    top: 0;
    width: 100%;
    bottom: 0;
    background-color: aliceblue;
  }
</style>
