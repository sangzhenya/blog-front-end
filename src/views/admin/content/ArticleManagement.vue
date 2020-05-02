<template>
  <div>
    <div class="article-management-search">
      <div class="search-article">
        <Input class="search-input" placeholder="开始搜索" v-model="searchKeyword" @on-enter="searchArticle()" />
      </div>
      <Table border :columns="colConfig" :data="articles" height="200"></Table>
    </div>
    <div class="article-management-main">
      <div class="article-title">
        <Input size="large" class="title-input" placeholder="这里是标题" v-model="article.title" />
      </div>
      <div class="article-category">
        <AutoComplete
          class="category-input"
          v-model="article.category.name"
          :data="categoryValueList"
          placeholder="这里是分类">
        </AutoComplete>
      </div>
      <div class="article-tags">
        <Tag class="article-tag" :checkable="true" v-for="tag in tagList" @on-change="checkTag" v-bind:key="tag.id" :name="tag.name" :color="tag.color" :checked="tag.checked">{{ tag.name }}</Tag>
      </div>

      <div class="article-summary-admin">
        <Input class="content-input" type="textarea" v-model="article.summary" :autosize="{minRows: 3, maxRows: 3}" placeholder="这里是简介" />
      </div>
      <div class="article-content">
        <Input class="content-input" type="textarea" v-model="article.content" :autosize="{minRows: 20, maxRows: 20}" placeholder="写点什么东西吧" />
      </div>
      <div class="article-options">
        <Button class="delete-button" v-if="!article.deleteFlag" @click="deleteArticle" type="error">删除</Button>
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
// import DateUtils from '@/utils/date-utils'
import articleConfig from '@/utils/article-util'

export default {
  name: 'ArticleManagement',
  data () {
    return {
      colConfig: articleConfig,
      searchKeyword: '',
      msg: '',
      categoryValueList: [],
      colorSet: ['primary', 'error', 'success', 'warning'],
      tag: '',
      tagList: [],
      article: { category: { name: '' }, tags: [{ name: '' }] },
      articles: []
    }
  },
  store,
  methods: {
    checkTag (checked, name) {
      let tag = this.tagList.find(item => item.name === name)
      tag.checked = checked
    },
    deleteArticle () {
      let me = this
      if (!this.article.id) {
        this.$Message.error('无法删除该文章')
        return
      }
      axios({
        url: CommonConfig.adminURL + 'admin/delete/article',
        headers: {
          Authorization: me.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          id: me.article.id
        }
      }).then(response => {
        if (response.data && response.data === 'Success') {
          me.$Message.info('删除成功')
        }
      }).catch(error => console.log(error))
    },
    saveArticle () {
      let me = this
      if (!this.article.title) {
        this.$Message.error('标题为空')
        return
      }
      me.article.tags = []
      me.tagList.filter(tag => tag.checked).forEach(tag => {
        me.article.tags.push({ name: tag.name })
      })
      console.log(me.article)
      axios({
        url: CommonConfig.adminURL + 'admin/save/article',
        headers: {
          Authorization: me.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: me.article
      }).then(function (response) {
        if (response.data && response.data === 'Success') {
          me.$Message.info('保存成功')
        }
      }).catch(error => console.log(error))
    },
    searchArticle () {
      let me = this
      if (!me.$store.getters.getAuthorizeKey) {
        Cookies.remove('user')
        me.$router.push('/admin/login')
      }
      axios({
        url: CommonConfig.adminURL + 'admin/article/search',
        headers: {
          Authorization: me.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          searchKey: me.searchKeyword
        }
      }).then(function (response) {
        console.log(response)
        if (response.data && response.data.length >= 1) {
          if (response.data.length === 1) {
            let articleData = response.data[0]
            me.tagList.forEach(tag => { tag.checked = false })
            me.article = articleData;
            (me.article.tags || []).forEach(item => {
              let tag = me.tagList.find(tag => tag.name === item.name)
              if (tag) {
                tag.checked = true
                tag.color = me.colorSet[Math.floor(Math.random() * 4)]
              }
            })
          } else {
            me.articles = []
            response.data.forEach(ac => {
              ac.categoryName = ac.category.name
              ac.tagStr = ''
              if (ac.tags) {
                ac.tags.forEach(tg => {
                  ac.tagStr += tg.name + ' / '
                })
                ac.tagStr = ac.tagStr.substr(0, ac.tagStr.length - 3)
              }
              me.articles.push(ac)
            })
          }
        } else {
          me.article = { category: {}, tags: [{ name: '' }] }
          me.$Message.error('没有找到相关的文章')
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    changePage () {
      this.searchKeyword = this.$route.params.id
      if (this.searchKeyword) {
        this.searchArticle()
      }
    }
  },
  watch: {
    $route: 'changePage'
  },
  mounted () {
    let me = this
    axios({
      url: CommonConfig.adminURL + 'admin/list/tag',
      headers: {
        Authorization: me.$store.getters.getAuthorizeKey
      },
      method: 'post'
    }).then(function (response) {
      if (response.data) {
        me.tagList = []
        response.data.forEach(function (item) {
          let index = Math.floor(Math.random() * 4)
          me.tagList.push({
            color: me.colorSet[index],
            name: item.name,
            id: item.id,
            checked: false
          })
        })
      }
    }).catch(function (error) {
      console.log(error)
    })
    axios({
      url: CommonConfig.adminURL + 'admin/list/category',
      headers: {
        Authorization: me.$store.getters.getAuthorizeKey
      },
      method: 'post'
    }).then(function (response) {
      if (response.data) {
        response.data.forEach(function (item) {
          me.categoryValueList.push(item.name)
        })
      }
    }).catch(function (error) {
      console.log(error)
    })
    this.changePage()
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
  .search-article {
    margin-bottom: 10px;
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
  .article-tag {
    cursor: pointer;
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
