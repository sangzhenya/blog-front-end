<template>
  <div>
    <div>
      <div class="left-menu">
        <LeftMenu :indexType = 'indexType'/>
      </div>
      <div class="top-bar">
        <TopBar />
      </div>
      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/admin/bar/LeftMenu'
import TopBar from '@/components/admin/bar/TopBar'

export default {
  name: 'AdminContent',
  components: {
    LeftMenu, TopBar
  },
  data () {
    return {
      msg: '',
      indexType: 'index',
      routerMap: {
        'adminIndex': 'index',
        'adminMessage': 'message',
        'adminOther': 'other'
      }
    }
  },
  methods: {
    paramsChange () {
      this.indexType = this.routerMap[this.$route.name];
    }
  },
  watch: {
    $route: 'paramsChange'
  },
  mounted () {
    this.indexType = this.routerMap[this.$route.name];
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
    background-color: #515A6E;
  }
  .top-bar{
    position: fixed;
    left: 200px;
    right: 0;
    height: 40px;
  }
  .right-content{
    overflow-y: auto;
    position: fixed;
    left: 200px;
    top: 40px;
    width: 100%;
    bottom: 0;
    background-color: #F0F0F0;
  }
</style>
