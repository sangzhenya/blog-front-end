<template>
  <div class="top-menu">
    <Menu mode="horizontal" theme="dark" :active-name="$route.name" @on-select="handleChange">
      <MenuItem class="menu-item" name="adminIndex">
        首页
      </MenuItem>
      <Submenu name="content">
        <template slot="title">
          <Icon type="md-create" />
          管理
        </template>
        <MenuGroup title="内容管理">
          <MenuItem name="articleManage">文章管理</MenuItem>
          <MenuItem name="categoryManage">分类标签管理</MenuItem>
        </MenuGroup>
        <MenuGroup title="小工具">
          <MenuItem name="messageTool">信息中心</MenuItem>
        </MenuGroup>
      </Submenu>
      <Submenu name="user">
        <template slot="title">
          <Icon type="md-person" />
          用户
        </template>
        <MenuItem name="defaultUser">Xin Yue</MenuItem>
        <MenuItem name="defaultLogout"><span @click="loginOut">退出</span></MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'TopMenu',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    loginOut () {
      Cookies.remove('user');
      this.$router.push('/login');
    },
    handleChange (name) {
      if (name && name !== 'defaultUser' && name !== 'defaultLogout') {
        this.$router.push({
          name: name
        });
      }
      // this.$emit('on-change', name);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-menu{
  }
  .menu-item{
    width: 80px;
    padding: 0;
    text-align: center;
  }
</style>
