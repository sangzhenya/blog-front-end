<template>
  <div>
    <div class="message-management-main">
      <div class="message-content">
        <Input class="content-input" type="textarea" :autosize="{minRows: 5, maxRows: 15}" v-model="message.content" placeholder="写点什么东西吧" />
      </div>
      <div class="exist-file-list">
        <Tag type="border" @on-close="removeTag" :color="colorSet[Math.floor(Math.random() * 4)]" closable v-for="file in message.files" v-bind:key="file.id" :name="file.fileName">{{file.fileName}}</Tag>
      </div>
      <div class="file-content">
        <Upload multiple :action="batchUploadUrl" :headers="headers" :on-success="handleSuccess" name="file">
          <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
      </div>
      <div class="article-options">
        <Button type="error" @click="deleteMessage" class="article-option-button">删除</Button>
        <Button type="primary" @click="saveMessage" class="article-option-button">保存</Button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CommonConfig from '@/config/common-config'
// import Cookies from 'js-cookie'
import store from '@/vuex/store'

export default {
  name: 'MessageEdit',
  data () {
    return {
      id: 0,
      msg: '',
      message: { files: [] },
      colorSet: ['primary', 'error', 'success', 'warning'],
      headers: {
        Authorization: this.$store.getters.getAuthorizeKey
      },
      batchUploadUrl: CommonConfig.webDomain + 'admin/batch/upload'
    }
  },
  store,
  methods: {
    handleSuccess (res, file) {
      this.message.files.push({
        fileName: file.name,
        fileSize: file.size,
        fileType: file.name.substring(file.name.lastIndexOf('.')),
        filePath: file.response
      })
    },
    removeTag (event, name) {
      let index = 0
      this.message.files.forEach(function (item) {
        if (item.fileName === name) {
          return
        }
        index += 1
      })
      this.message.files.splice(index, 1)
    },
    saveMessage () {
      if (this.message.content) {
        let that = this
        axios({
          url: CommonConfig.webDomain + 'admin/save/message',
          headers: {
            Authorization: that.$store.getters.getAuthorizeKey
          },
          method: 'post',
          data: this.message
        }).then(function (response) {
          if (response.data) {
            that.message = response.data
            that.$Message.info('保存成功')
          }
        }).catch(function (error) {
          console.log(error)
        })
      } else {
        this.$Message.error('内容为空')
      }
    },
    deleteMessage () {
      let that = this
      if (that.message.id && that.message.id !== 0) {
        axios({
          url: CommonConfig.webDomain + 'admin/delete/message',
          headers: {
            Authorization: that.$store.getters.getAuthorizeKey
          },
          method: 'post',
          data: {
            id: that.message.id
          }
        }).then(function (response) {
          if (response.data) {
            that.$Message.info('删除成功')
            that.$router.push('/admin/tool/message')
          }
        }).catch(function (error) {
          that.$Message.error(error)
        })
      } else {
        this.$Message.error('内容为空')
      }
    },
    changePage () {
      if (this.$route.params.id) {
        this.id = parseInt(this.$route.params.id)
      }
      if (this.id === 0) {
        return
      }
      let that = this
      axios({
        url: CommonConfig.webDomain + 'admin/search/message',
        headers: {
          Authorization: that.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          'id': that.id
        }
      }).then(function (response) {
        if (response.data) {
          that.message = response.data
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  watch: {
    $route: 'changePage'
  },
  mounted () {
    this.changePage()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .message-management-main{
    background-color: #fff;
    margin: 30px 230px auto 30px;
    padding: 30px;
    box-shadow: 0 5px 30px 3px #cccccc;
  }
  .message-content{
    border-bottom: 1px dashed #eaeaea;
  }
  .file-content{
    border-bottom: 1px dashed #eaeaea;
    padding-bottom: 30px;
  }
  .content-input{
    padding: 5px;
  }
  .content-input textarea:focus, .content-input textarea{
    border: none;
    box-shadow: none;
  }
  .file-content{
    margin-top: 20px;
  }
  .article-options{
    margin-top: 20px;
  }
  .article-option-button{
    margin-right: 15px;
  }
  .exist-file-list{
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px dashed #eaeaea;
  }
  @media (max-width: 800px) {
    .message-management-main{
      margin: 0;
      padding: 10px;
      box-shadow: none;
      word-break: break-all;
    }
  }
</style>
