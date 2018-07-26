<template>
  <div>
    <div class="article-management-search">
      <div class="search-article">
        <Input class="search-input" placeholder="开始搜索" v-model="searchKeyword" @on-enter="searchArticle()"></Input>
      </div>
    </div>
    <div class="article-management-main">
      <div class="article-title">
        <Input size="large" class="title-input" placeholder="这里是标题" v-model="article.title"></Input>
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
        <Tag type="border" closable v-for="tag in article.tags" v-bind:key="tag.id">{{ tag.name }}</Tag>
        <AutoComplete
          style="width: 180px;"
          v-model="tag"
          :data="tagSet"
          @on-search="searchTag"
          :filter-method="filterMethod"
          icon="pricetag"
          placeholder="标签">
        </AutoComplete>
      </div>
      <div class="article-content">
        <Input class="content-input" type="textarea" v-model="article.content" :autosize="{minRows: 20, maxRows: 25}" placeholder="写点什么东西吧"></Input>
      </div>
      <div class="article-options">
        <Button>保存</Button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CommonConfig from '@/config/common-config'
import Cookies from 'js-cookie';
import store from '@/vuex/store'

export default {
  name: 'ArticleManagement',
  data () {
    return {
      searchKeyword: '',
      msg: '',
      category: [],
      tagSet: [],
      tag: '',
      article: {category: {}, tags: [{name: 'Demo Tag'}]}
    }
  },
  store,
  methods: {
    filterMethod (value, option) {
      if (value && option) {
        return option.indexOf(value) !== -1;
      }
      return false;
    },
    searchCategory () {
      console.log(this.article.category.name);
      let that = this;
      axios({
        url: CommonConfig.webDomain + 'admin/search/category',
        headers: {
          Authorization: that.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          searchKey: that.article.category.name
        }
      }).then(function (response) {
        that.category = [];
        if (response.data) {
          response.data.forEach(function (item) {
            that.category.push(item.name);
          });
          console.log(response.data)
        } else {
          that.$Message.error('没有找到相关的文章');
        }
      }).catch(function (error) {
        console.log(error)
      });
    },
    searchTag () {
      console.log(this.tag);
      let that = this;
      axios({
        url: CommonConfig.webDomain + 'admin/search/tag',
        headers: {
          Authorization: that.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          searchKey: that.tag
        }
      }).then(function (response) {
        that.tagSet = [];
        if (response.data) {
          response.data.forEach(function (item) {
            that.tagSet.push(item.name);
          });
          console.log(response.data)
        } else {
          that.$Message.error('没有找到相关的文章');
        }
      }).catch(function (error) {
        console.log(error)
      });
    },
    searchArticle () {
      if (!this.$store.getters.getAuthorizeKey) {
        debugger;
        Cookies.remove('user');
        this.$router.push('/admin/login');
      }
      let that = this;
      axios({
        url: CommonConfig.webDomain + 'admin/search/article',
        headers: {
          Authorization: that.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          searchKey: that.searchKeyword
        }
      }).then(function (response) {
        // that.data = response.data.data;
        if (response.data) {
          that.article = response.data;
          console.log(that.article)
        } else {
          that.article = {category: {}, tags: [{name: 'Demo Tag'}]};
          that.$Message.error('没有找到相关的文章');
        }
      }).catch(function (error) {
        console.log(error)
      });
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /*.line {
    margin-bottom: 10px;
  }
  .title-line{
    margin-top: 20px;
  }
  .title{
    font-size: 20px;
    line-height: 36px;
    margin-left: 20px;
  }*/
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
  .content-input{
    padding: 5px;
  }
  .content-input textarea:focus, .content-input textarea{
    border: none;
    box-shadow: none;
  }
</style>
