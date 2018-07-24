<template>
  <div>
    <div class="menu-header">
      <router-link to="/admin/"><div>控制中心</div></router-link>
    </div>
    <div>
      <template>
        <Menu theme="dark" :active-name="$route.name" @on-select="handleChange">
          <MenuItem name="adminIndex">
            首页
          </MenuItem>
          <MenuGroup title="内容管理">
            <MenuItem name="articleManage">
              <Icon type="document-text"></Icon>
              文章管理
            </MenuItem>
            <MenuItem name="categoryManage">
              <Icon type="edit"></Icon>
              分类标签管理
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="小工具">
            <MenuItem name="messageTool">
              <Icon type="email"></Icon>
              信息中心
            </MenuItem>
          </MenuGroup>
        </Menu>
      </template>
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
  methods: {
    handleChange (name) {
      this.$router.push({
        name: name
      });
      // this.$emit('on-change', name);
    }
  }
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
    color: #ccc;
    font-size: 24px;
  }
</style>
