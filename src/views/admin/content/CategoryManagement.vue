<template>
  <div>
    <Modal
      v-model="categoryModal"
      title="提示"
      @on-ok="confirmAddCategory"
      @on-cancel="cancel">
      <p>确认添加此分类: {{newCategory}} ? </p>
    </Modal>
    <Modal
      v-model="tagModal"
      title="提示"
      @on-ok="confirmAddTag"
      @on-cancel="cancel">
      <p>确认添加此标签: {{newTag}} ? </p>
    </Modal>
    <div class="category-management">
      <div class="title">分类管理</div>
      <div class="category-set">
        <Tag @on-close="removeCategory" closable class="category" v-for="category in categoryList" v-bind:key="category.id" :name="category.name" :color="category.color">{{category.name}}</Tag>
      </div>
      <div class="category-input-part">
        <Input class="category-input" placeholder="新分类" v-model="newCategory" @on-enter="addCategory" />
      </div>
    </div>
    <div class="category-management">
      <div class="title">标签管理</div>
      <div class="category-set">
        <Tag @on-close="removeTag" type="border" class="tag" closable  v-for="tag in tagList" v-bind:key="tag.id" :name="tag.name" :color="tag.color">{{tag.name}}</Tag>
      </div>
      <div class="category-input-part">
        <Input class="category-input" placeholder="新标签" v-model="newTag" @on-enter="addTag" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CommonConfig from '@/config/common-config'
import store from '@/vuex/store'

export default {
  name: 'CategoryManagement',
  data () {
    return {
      categoryModal: false,
      tagModal: false,
      msg: '',
      newCategory: '',
      newTag: '',
      categoryList: [],
      tagList: [],
      colorSet: ['primary', 'error', 'success', 'warning']
    }
  },
  store,
  methods: {
    confirmAddCategory () {
      let me = this
      me.categoryList.push({
        color: me.colorSet[Math.floor(Math.random() * 4)],
        name: this.newCategory,
        id: this.categoryList.length + 1000
      })
      axios({
        url: CommonConfig.adminURL + 'admin/save/category',
        headers: {
          Authorization: me.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          name: me.newCategory
        }
      }).then(function (response) {
        if (response.data && response.data === 'Success') {
          me.$Message.info('成功添加 分类：' + me.newCategory)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    confirmAddTag () {
      let me = this
      me.tagList.push({
        color: me.colorSet[Math.floor(Math.random() * 4)],
        name: this.newTag,
        id: this.tagList.length + 1000
      })
      axios({
        url: CommonConfig.adminURL + 'admin/save/tag',
        headers: {
          Authorization: me.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          name: me.newTag
        }
      }).then(function (response) {
        if (response.data && response.data === 'Success') {
          me.$Message.info('成功添加 标签：' + me.newTag)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    cancel () {
      this.$Message.info('已取消添加')
    },
    addCategory () {
      this.categoryModal = true
    },
    addTag () {
      this.tagModal = true
    },
    removeCategory (event, name) {
      this.$Message.error('无法删除 分类：' + name)
    },
    removeTag (event, name) {
      this.$Message.error('无法删除 标签：' + name)
    }
  },
  mounted () {
    let that = this
    axios({
      url: CommonConfig.adminURL + 'admin/list/category',
      headers: {
        Authorization: that.$store.getters.getAuthorizeKey
      },
      method: 'post'
    }).then(function (response) {
      if (response.data) {
        that.categoryList = []
        response.data.forEach(function (item) {
          let index = Math.floor(Math.random() * 4)
          that.categoryList.push({
            color: that.colorSet[index],
            name: item.name,
            id: item.id
          })
        })
      }
    }).catch(function (error) {
      console.log(error)
    })

    axios({
      url: CommonConfig.adminURL + 'admin/list/tag',
      headers: {
        Authorization: that.$store.getters.getAuthorizeKey
      },
      method: 'post'
    }).then(function (response) {
      if (response.data) {
        that.tagList = []
        response.data.forEach(function (item) {
          let index = Math.floor(Math.random() * 4)
          that.tagList.push({
            color: that.colorSet[index],
            name: item.name,
            id: item.id
          })
        })
      }
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .category-management{
    margin: 30px 230px auto 30px;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0 5px 30px 3px #cccccc;
  }
  .title{
    font-size: 20px;
  }
  .category-set{
    margin-left: 10px;
    margin-top: 20px;
  }
  .category{
    margin-right: 15px;
    font-size: 14px;
    line-height: 40px;
    height: 40px;
  }
  .tag{
    height: 25px;
    line-height: 25px;
    margin-bottom: 10px;
  }
  .category-input-part{
    margin: 20px auto 20px 10px;
    width: 300px;
  }
  .category-input > input, .category-input > input:hover {
    border: none;
    box-shadow: none;
    border-bottom: 1px solid #eaeaea;
  }
  @media (max-width: 800px) {
    .category-management{
      background-color: #fff;
      margin: 0;
      padding: 10px;
      box-shadow: none;
    }
  }
</style>
