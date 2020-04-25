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
import DateUtils from '@/utils/date-utils'

export default {
  data () {
    return {
      colConfig: [
        {
          title: 'Id',
          key: 'id',
          width: 60
        },
        {
          title: '标题',
          key: 'title',
          width: 260
        },
        {
          title: '分类',
          key: 'categoryName',
          width: 100
        },
        {
          title: '摘要',
          key: 'summary'
        },
        {
          title: '标签',
          key: 'tagStr',
          width: 200
        },
        {
          title: '创建日期',
          key: 'createDate',
          width: 170,
          render: (h, params) => {
            return h('div', DateUtils.formatDate(this.articles[params.index].createDate))
          }
        },
        {
          title: '更新日期',
          key: 'updateDate',
          width: 170,
          render: (h, params) => {
            return h('div', DateUtils.formatDate(this.articles[params.index].updateDate))
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 410,
          render: (h, params) => {
            let me = this
            let btns = [h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              style: {
                marginRight: '5px',
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  window.open('/#/article/' + this.articles[params.index].id, '_blank')
                }
              }
            }, 'View'),
            h('Button', {
              props: {
                type: 'info',
                size: 'small'
              },
              style: {
                marginRight: '5px',
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  window.open('/#/admin/management/article/' + this.articles[params.index].id, '_blank')
                }
              }
            }, 'Edit')]
            if (me.articles[params.index].deleteFlag) {
              btns.push(h('Button', {
                props: {
                  type: 'success',
                  size: 'small'
                },
                style: {
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    this.enableArticle(params.index)
                  }
                }
              }, 'Enable'))
            } else {
              btns.push(h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    this.disableArticle(params.index)
                  }
                }
              }, 'Disable'))
            }
            return h('div', btns)
          }
        }
      ],
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
