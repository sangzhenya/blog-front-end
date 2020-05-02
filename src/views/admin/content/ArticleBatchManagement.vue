<template>
  <div>
    <div class="title batch-edit-title">批量更新</div>
    <Table border :columns="colConfig" :data="articles" height="700"></Table>
    <div class="pager-content">
      <Page :total="totalCount" :current="page" :page-size="pageSize" :page-size-opts="pageSizeOpts" show-sizer show-total @on-change="changePage" @on-page-size-change="pageSizeChange" />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import CommonConfig from '@/config/common-config'
// import store from '@/vuex/store'
// import DateUtils from '@/utils/date-utils'
import articleConfig from '@/utils/article-util'

export default {
  data () {
    return {
      colConfig: articleConfig,
      articles: [],
      page: 1,
      totalCount: 1,
      pageSize: 20,
      pageSizeOpts: [10, 20, 50, 100]
    }
  },
  methods: {
    enableArticle (index) {
      let me = this
      axios({
        url: CommonConfig.adminURL + 'admin/article/enable',
        headers: {
          Authorization: me.$store.getters.getAuthorizeKey
        },
        data: {
          id: me.articles[index].id
        },
        method: 'post'
      }).then(function (response) {
        me.articles[index].deleteFlag = false
        me.$Message.info('恢复成功')
      }).catch(error => console.log(error))
    },
    disableArticle (index) {
      let me = this
      axios({
        url: CommonConfig.adminURL + 'admin/article/disable',
        headers: {
          Authorization: me.$store.getters.getAuthorizeKey
        },
        data: {
          id: me.articles[index].id
        },
        method: 'post'
      }).then(function (response) {
        me.articles[index].deleteFlag = true
        me.$Message.info('删除成功')
      }).catch(error => console.log(error))
    },
    changePage (page) {
      this.page = page
      this.listArticle()
    },
    pageSizeChange (pageSize) {
      this.pageSize = pageSize
      this.listArticle()
    },
    listArticle () {
      let me = this
      axios({
        url: CommonConfig.adminURL + 'admin/article/list',
        headers: {
          Authorization: me.$store.getters.getAuthorizeKey
        },
        data: {
          'page': me.page,
          'pageSize': me.pageSize
        },
        method: 'post'
      }).then(function (response) {
        if (response.data) {
          let data = response.data.data
          me.articles = []
          data.articles.forEach(ac => {
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
          me.totalCount = data.page.totalCount
        }
      }).catch(error => console.log(error))
    }
  },
  mounted () {
    this.listArticle()
  }
}
</script>
<style scoped>
.title{
  font-size: 20px;
  margin: 20px;
}
.pager-content {
  padding-left: 5px;
  background-color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 50px;
}
</style>
