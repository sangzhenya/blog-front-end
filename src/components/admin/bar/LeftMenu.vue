<template>
  <div>
    <div class="menu-header">
      <router-link to="/admin/"><div>Lin Xinyue</div></router-link>
    </div>
    <div>
      <!--<ul class="menu-ul">
        <li :class="{active: indexType === 'index'}"><router-link to="/admin/"><div>Index</div></router-link></li>
        <li :class="{active: indexType === 'message'}"><router-link to="/admin/message"><div>Message</div></router-link></li>
        <li :class="{active: indexType === 'other'}"><router-link to="/admin/other"><div>Other</div></router-link></li>
      </ul>-->
      <Menu theme="dark">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            内容管理
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
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
    background-color: #1c2438;
  }
  .active{
    color: #efefef;
    background-color: #1c2438;
  }
</style>
