import DateUtils from '@/utils/date-utils'

const articleConfig = [
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
      return h('div', params.row && DateUtils.formatDate(params.row.createDate))
    }
  },
  {
    title: '更新日期',
    key: 'updateDate',
    width: 170,
    render: (h, params) => {
      return h('div', params.row && DateUtils.formatDate(params.row.updateDate))
    }
  },
  {
    title: '操作',
    key: 'action',
    width: 410,
    render: (h, params) => {
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
            window.open('/#/article/' + params.row.id, '_blank')
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
            window.open('/#/admin/management/article/' + params.row.id, '_blank')
          }
        }
      }, 'Edit')]
      if (params.row.deleteFlag) {
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
]

export default articleConfig

export {
  articleConfig
}
