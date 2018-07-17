<template>
  <div>
    <div>
      This is the index page!
    </div>
    <Upload  action="http://localhost:8080/upload" name="test">
      <Button type="ghost"  icon="ios-cloud-upload-outline">Upload file</Button>
    </Upload>
    <a href="http://localhost:8080/download">下载test</a>
    <p>多文件上传</p>

    <Upload multiple action="http://localhost:8080/batch/upload" name="file">
      <Button type="ghost"  icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
  </div>
</template>

<script>
import '../../assets/style/simplemde.min.css';

export default {
  name: 'AdminIndex',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
