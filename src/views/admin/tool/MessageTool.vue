<template>
  <div>
    <div class="message-main">
      <div class="message-item">
        <router-link to="/admin/tool/message/edit/0"><Button>增加一条</Button></router-link>
      </div>
      <div class="message-item" v-for="message in messageList" v-bind:key="message.id" v-on:dblclick="messageClick(message.id)">
        <div>{{ message.content }}</div>
        <div class="message-files-view">
          <Tag :color="colorSet[Math.floor(Math.random() * 4)]"
               v-for="file in message.files" v-bind:key="file.id" :name="file.fileName">
            <span @click="downloadFile(file)">{{file.fileName}} </span>
          </Tag>
        </div>
        <div class="message-option">
          <router-link :to="'/admin/tool/message/edit/' + message.id"><Button type="error">删除</Button></router-link>
          <router-link :to="'/admin/tool/message/edit/' + message.id"><Button type="primary">编辑</Button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonConfig from '@/config/common-config'
import axios from 'axios'
import store from '@/vuex/store'

export default {
  name: 'MessageTool',
  data () {
    return {
      msg: '',
      previewEnable: false,
      previewItem: '',
      colorSet: ['primary', 'error', 'success', 'warning'],
      items: [],
      messageList: []
    }
  },
  store,
  methods: {
    messageClick (index) {
      this.$router.push('/admin/tool/message/edit/' + index);
    },
    downloadFile (file) {
      let that = this;
      axios({
        url: CommonConfig.webDomain + 'admin/download',
        headers: {
          Authorization: that.$store.getters.getAuthorizeKey
        },
        method: 'post',
        data: {
          id: file.id
        },
        responseType: 'arraybuffer'
      }).then(function (response) {
        if (response.data) {
          that.download(response.data, file);
        }
      }).catch(function (error) {
        that.$Message.error(error);
      });
    },
    download (data, file) {
      if (!data) {
        return
      }
      let url = window.URL.createObjectURL(new Blob([data], { type: '' }));
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = url;
      link.setAttribute('download', file.fileName);

      document.body.appendChild(link);
      link.click()
    }
  },
  mounted () {
    let that = this;
    axios({
      url: CommonConfig.webDomain + 'admin/list/message',
      headers: {
        Authorization: that.$store.getters.getAuthorizeKey
      },
      method: 'post'
    }).then(function (response) {
      if (response.data) {
        that.messageList = response.data;
        console.log(response.data);
      }
    }).catch(function (error) {
      console.log(error)
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message-main {
    margin: 30px 230px auto 30px;
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0 5px 30px 3px #cccccc;
  }
  .message-item{
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    line-height: 1.7;
  }
  .message-item:not(:last-child){
    border-bottom: 1px dashed #cccccc;
  }
  .message-item:last-child{
    margin-bottom: 20px;
  }
  .message-option{
    margin-top: 10px;
    display: none;
  }
  .message-files-view{
    margin-top: 10px;
  }
  @media (max-width: 800px) {
    .message-main{
      margin: 0;
      padding: 10px;
      box-shadow: none;
      word-break: break-all;
    }
    .message-option{
      display: inherit;
    }
  }
</style>
