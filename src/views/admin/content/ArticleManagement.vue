<template>
  <div>
    <div class="article-management-search">
      <div class="search-article">
        <Input class="search-input" placeholder="开始搜索" v-model="searchKeyword" @on-enter="searchArticle()" />
      </div>
    </div>
    <div class="article-management-main">
      <div class="article-title">
        <Input size="large" class="title-input" placeholder="这里是标题" v-model="article.title" />
      </div>
      <div class="article-category">
        <AutoComplete
          class="category-input"
          v-model="article.category.name"
          :data="category"
          @on-search="searchCategory"
          :filter-method="filterMethod"
          placeholder="这里是分类">
        </AutoComplete>
      </div>
      <div class="article-tags">
        <Tag :checkable="true" v-for="tag in checkedTagList" @on-change="uncheckTag" v-bind:key="tag.id" :name="tag.name" :color="tag.color" :checked="true">{{ tag.name }}</Tag>
        <Tag :checkable="true" v-for="tag in uncheckedTagList" @on-change="checkTag" v-bind:key="tag.id" :name="tag.name" :color="tag.color" :checked="false">{{ tag.name }}</Tag>
      </div>

      <div class="article-summary-admin">
        <Input class="content-input" type="textarea" v-model="article.summary" :autosize="{minRows: 3, maxRows: 3}" placeholder="这里是简介" />
      </div>
      <div class="article-content">
        <Input class="content-input" type="textarea" v-model="article.content" :autosize="{minRows: 20, maxRows: 20}" placeholder="写点什么东西吧" />
      </div>
      <div class="article-options">
        <Button class="delete-button" @click="deleteArticle" type="error">删除</Button>
        <Button @click="saveArticle">保存</Button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CommonConfig from '@/config/common-config'
import Cookies from 'js-cookie'
import store from '@/vuex/store'

export default {
  name: 'ArticleManagement',
  data () {
    return {
      searchKeyword: '',
      msg: '',
      category: [],
      tagSet: [],
      colorSet: ['primary', 'error', 'success', 'warning'],
      tag: '',
      uncheckedTagList: [],
      checkedTagList: [],
      article: { category: {}, tags: [{ name: 'Demo Tag' }] }
    }
  },
  store,
  methods: {
    uncheckTag (checked, name) {
      let that = this
      if (!this.article.tags) {
        this.article.tags = []
      }
      this.article.tags.forEach(function (item, index) {
        if (item.name === name) {
          that.article.tags.splice(index, 1)
        }
      })
    },
    checkTag (checked, name) {
      if (!this.article.tags) {
        this.article.tags = []
      }
      let that = this
      this.uncheckedTagList.forEach(function (item, index) {
        if (item.name === name) {
          that.article.tags.push(item)
        }
      })
    },
    deleteArticle () {
      if (!this.article.id) {
        this.$Message.error('无法删除该文章')
        return
      }
      // console.log(this.article)
      let that = this
      axios({
        url: CommonConfig.adminURL + 'admin/delete/article',
        headers: {
          Authorization: that.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          id: that.article.id
        }
      }).then(function (response) {
        if (response.data && response.data === 'Success') {
          that.$Message.info('删除成功')
        }
        console.log(response.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    saveArticle () {
      if (!this.article.title) {
        this.$Message.error('标题为空')
        return
      }
      let that = this
      axios({
        url: CommonConfig.adminURL + 'admin/save/article',
        headers: {
          Authorization: that.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: that.article
      }).then(function (response) {
        if (response.data && response.data === 'Success') {
          that.$Message.info('保存成功')
        }
        console.log(response.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    removeTag (event, name) {
      let index = 0
      this.article.tags.forEach(function (item) {
        if (item.name === name) {
          return
        }
        index += 1
      })
      this.article.tags.splice(index, 1)
    },
    filterMethod (value, option) {
      if (value && option) {
        return option.indexOf(value) !== -1
      }
      return false
    },
    searchCategory () {
      console.log(this.article.category.name)
      let that = this
      axios({
        url: CommonConfig.adminURL + 'admin/search/category',
        headers: {
          Authorization: that.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          searchKey: that.article.category.name
        }
      }).then(function (response) {
        that.category = []
        if (response.data) {
          response.data.forEach(function (item) {
            that.category.push(item.name)
          })
        } else {
          that.$Message.error('没有找到相关的文章')
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    searchArticle () {
      if (!this.$store.getters.getAuthorizeKey) {
        Cookies.remove('user')
        this.$router.push('/admin/login')
      }
      let that = this
      axios({
        url: CommonConfig.adminURL + 'admin/search/article',
        headers: {
          Authorization: that.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          searchKey: that.searchKeyword
        }
      }).then(function (response) {
        if (response.data) {
          that.article = response.data
          let articleTagList = []
          that.checkedTagList = []
          that.article.tags = that.article.tags || []
          that.article.tags.forEach(function (item) {
            articleTagList.push(item.name)
            let index = Math.floor(Math.random() * 4)
            that.checkedTagList.push({
              color: that.colorSet[index],
              name: item.name,
              id: item.id + 1000
            })
          })
          articleTagList.forEach(function (name) {
            that.uncheckedTagList.forEach(function (oriItem, index) {
              if (oriItem.name === name) {
                that.uncheckedTagList.splice(index, 1)
              }
            })
          })
        } else {
          that.article = { category: {}, tags: [{ name: '' }] }
          that.$Message.error('没有找到相关的文章')
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  mounted () {
    let that = this
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
          that.uncheckedTagList.push({
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
  .article-management-search{
    background-color: #fff;
    margin: 30px 230px auto 30px;
    padding: 10px;
  }
  .search-input > input:focus, .search-input > input{
    border: none;
    box-shadow: none;
    font-size: 14px;
  }
  .article-management-main{
    background-color: #fff;
    margin: 30px 230px auto 30px;
    padding: 30px;
    box-shadow: 0 5px 30px 3px #cccccc;
  }
  .article-title{
    margin-bottom: 10px;
  }
  .title-input > input:focus, .title-input > input{
    border: none;
    box-shadow: none;
    font-size: 20px;
  }
  .article-category{
    margin-left: 5px;
    margin-bottom: 10px;
    width: 30%;
  }
  .category-input input:focus, .category-input input{
    border: none;
    box-shadow: none;
    font-size: 14px;
  }
  .article-tags{
    padding-left: 10px;
    margin-bottom: 20px;
  }

  .article-summary-admin{
    border-bottom: 1px dashed #eaeaea;
    margin-bottom: 10px;
  }
  .content-input{
    padding: 5px;
  }
  .content-input textarea:focus, .content-input textarea{
    border: none;
    box-shadow: none;
  }
  .delete-button{
    margin-right: 10px;
  }
  @media (max-width: 800px) {
    .article-management-search{
      background-color: #fff;
      margin: 0;
      padding: 10px;
      box-shadow: none;
      border-bottom: 1px dashed #eaeaea;
    }
    .article-management-main{
      background-color: #fff;
      margin: 0;
      padding: 10px;
      box-shadow: none;
    }
  }
</style>
