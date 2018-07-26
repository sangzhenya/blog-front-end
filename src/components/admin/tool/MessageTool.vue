<template>
  <div>
    <div class="message-main">
      <div class="message-item" v-for="(item, index) in items" v-bind:key="index" v-on:dblclick="messageClick(index)">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageTool',
  data () {
    return {
      msg: '',
      previewEnable: false,
      previewItem: '',
      items: [
        '<div>1AhighqualityUIToolkitbasedonVueAhighqualityUIToolkitbasedonVueAhighqualityUIToolkitbasedonVue.js</div>\n' +
        '<div>视频提供了功能强大的方法帮助您证明您的观点。当您单击联机视频时，可以在想要添加的视频的嵌入代码中进行粘贴。您也可以键入一个关键字以联机搜索最适合您的文档的视频。为使您的文档具有专业外观，Word 提供了页眉、页脚、封面和文本框设计，这些设计可互为补充。例如，您可以添加匹配的封面、页眉和提要栏。\n' +
        '单击“插入”，然后从不同库中选择所需元素。主题和样式也有助于文档保持协调。当您单击设计并选择新的主题时，图片、图表或 SmartArt 图形将会更改以匹配新的主题。当应用样式时，您的标题会进行更改以匹配新的主题。使用在需要位置出现的新按钮在 Word 中保存时间。\n' +
        '若要更改图片适应文档的方式，请单击该图片，图片旁边将会显示布局选项按钮。当处理表格时，单击要添加行或列的位置，然后单击加号。在新的阅读视图中阅读更加容易。可以折叠文档某些部分并关注所需文本。如果在达到结尾处之前需要停止读取，Word 会记住您的停止位置 - 即使在另一个设备上。\n' +
        '</div>',
        '<div>2AhighqualityUIToolkitbasedonVueAhighqualityUIToolkitbasedonVueAhighqualityUIToolkitbasedonVue.js</div>\n' +
        '<div>视频提供了功能强大的方法帮助您证明您的观点。当您单击联机视频时，可以在想要添加的视频的嵌入代码中进行粘贴。您也可以键入一个关键字以联机搜索最适合您的文档的视频。为使您的文档具有专业外观，Word 提供了页眉、页脚、封面和文本框设计，这些设计可互为补充。例如，您可以添加匹配的封面、页眉和提要栏。\n' +
        '单击“插入”，然后从不同库中选择所需元素。主题和样式也有助于文档保持协调。当您单击设计并选择新的主题时，图片、图表或 SmartArt 图形将会更改以匹配新的主题。当应用样式时，您的标题会进行更改以匹配新的主题。使用在需要位置出现的新按钮在 Word 中保存时间。\n' +
        '若要更改图片适应文档的方式，请单击该图片，图片旁边将会显示布局选项按钮。当处理表格时，单击要添加行或列的位置，然后单击加号。在新的阅读视图中阅读更加容易。可以折叠文档某些部分并关注所需文本。如果在达到结尾处之前需要停止读取，Word 会记住您的停止位置 - 即使在另一个设备上。\n' +
        '</div>',
        '<div>3AhighqualityUIToolkitbasedonVueAhighqualityUIToolkitbasedonVueAhighqualityUIToolkitbasedonVue.js</div>\n' +
        '<div>视频提供了功能强大的方法帮助您证明您的观点。当您单击联机视频时，可以在想要添加的视频的嵌入代码中进行粘贴。您也可以键入一个关键字以联机搜索最适合您的文档的视频。为使您的文档具有专业外观，Word 提供了页眉、页脚、封面和文本框设计，这些设计可互为补充。例如，您可以添加匹配的封面、页眉和提要栏。\n' +
        '单击“插入”，然后从不同库中选择所需元素。主题和样式也有助于文档保持协调。当您单击设计并选择新的主题时，图片、图表或 SmartArt 图形将会更改以匹配新的主题。当应用样式时，您的标题会进行更改以匹配新的主题。使用在需要位置出现的新按钮在 Word 中保存时间。\n' +
        '若要更改图片适应文档的方式，请单击该图片，图片旁边将会显示布局选项按钮。当处理表格时，单击要添加行或列的位置，然后单击加号。在新的阅读视图中阅读更加容易。可以折叠文档某些部分并关注所需文本。如果在达到结尾处之前需要停止读取，Word 会记住您的停止位置 - 即使在另一个设备上。\n' +
        '</div>'
      ]
    }
  },
  methods: {
    messageClick (index) {
      alert(index);
    }
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
</style>
