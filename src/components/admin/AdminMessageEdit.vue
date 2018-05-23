<template>
  <div class="edit-message-markdown">
    <div class="markdown-card">
      <Card>
        <textarea class="markdown-editor" id="markdown_editor" style="display:none;"></textarea>
      </Card>
    </div>
    <div class="button-group">
      <Button type="error">删除</Button>
      <Button type="info" @click="saveMessage">保存</Button>
    </div>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde';
import '../../assets/style/simplemde.min.css';

export default {
  name: 'AdminMessage',
  data () {
    return {
      msg: '',
      simpleMDE: {}
    }
  },
  methods: {
    saveMessage () {
      console.log(this.simpleMDE.value())
    }
  },
  mounted () {
    this.simpleMDE = new SimpleMDE({
      element: document.getElementById('markdown_editor'),
      spellChecker: false,
      toolbar: ['bold', 'italic', 'strikethrough', 'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'guide']
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .edit-message-markdown {
    position: fixed;
    left: 200px;
    top: 40px;
    right: 0;
    bottom: 0;
  }
  .markdown-card{
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  .markdown-editor{
    width: 90%;
  }
  .button-group{
    margin-top: 20px;
    margin-left: 10%;
  }
  .button-group button{
    width: 150px;
    margin-right: 20px;
    height: 40px;
  }
  .CodeMirror, .CodeMirror-scroll {
    max-height: 600px !important;
  }

</style>
