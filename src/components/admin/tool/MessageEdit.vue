<template>
  <div>
    <div class="message-management-main">
      <div class="article-content">
        <Input class="content-input" type="textarea" :autosize="{minRows: 5, maxRows: 15}" placeholder="写点什么东西吧"></Input>
      </div>
      <div class="file-content">
        <Upload multiple :action="batchUploadUrl" :headers="headers" name="file">
          <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
      </div>
      <div class="article-options">
        <Button type="error" class="article-option-button">删除</Button>
        <Button class="article-option-button">保存</Button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import CommonConfig from '@/config/common-config'
// import Cookies from 'js-cookie';
import store from '@/vuex/store'

export default {
  name: 'MessageEdit',
  data () {
    return {
      msg: '',
      headers: {
        Authorization: this.$store.getters.getAuthorizeKey
      },
      batchUploadUrl: CommonConfig.webDomain + 'admin/batch/upload'
    }
  },
  store,
  methods: {
  },
  mounted () {
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
  .article-content{
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
</style>
