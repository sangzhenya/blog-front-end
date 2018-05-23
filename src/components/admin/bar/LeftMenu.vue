<template>
  <div>
    <div class="menu-header">
      <router-link to="/admin/"><div>Lin Xinyue</div></router-link>
    </div>
    <div>
      <ul class="menu-ul">
        <li :class="{active: indexType === 'index'}"><router-link to="/admin/"><div>Index</div></router-link></li>
        <li :class="{active: indexType === 'message'}"><router-link to="/admin/message"><div>Message</div></router-link></li>
        <li :class="{active: indexType === 'other'}"><router-link to="/admin/other"><div>Other</div></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  props: ['indexType'],
  data () {
    return {
      msg: ''
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    color: inherit;
  }
  .menu-header{
    width: 140px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 30px;
    color: #ccc;
    font-size: 24px;
    /*border-bottom: 1px solid #eaeaea;*/
  }
  .menu-ul{
  }
  .menu-ul li{
    padding-left: 50px;
    font-size: 16px;
    line-height: 3;
    color: #afafaf;
    list-style: none;
  }
  .menu-ul li:hover{
    color: #efefef;
    background-color: #000;
  }
  .active{
    color: #efefef;
    background-color: #000;
  }
</style>
