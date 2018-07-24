<template>
  <div>
    <div class="article-management-search">
      <div class="search-article">
        <Input class="search-input" placeholder="开始搜索"></Input>
      </div>
    </div>
    <div class="article-management-main">
      <div class="article-title">
        <Input size="large" class="title-input" placeholder="这里是标题"></Input>
      </div>
      <div class="article-category">
        <AutoComplete
          class="category-input"
          v-model="value3"
          :data="data3"
          :filter-method="filterMethod"
          placeholder="这里是分类">
        </AutoComplete>
      </div>
      <div class="article-tags">
        <Tag type="border" closable>标签四</Tag>
        <Tag type="border" closable>标签四</Tag>
        <Tag type="border" closable>标签一</Tag>
        <Tag type="border" closable>标签四</Tag>
        <Tag type="border" closable>标签一</Tag>
        <Tag type="border" closable>标签四</Tag>
        <Input placeholder="标签" style="width: 180px;" icon="pricetag"></Input>
      </div>
      <div class="article-content">
        <Input class="content-input" type="textarea" :autosize="{minRows: 25}" placeholder="写点什么东西吧"></Input>
      </div>
      <div class="article-options">
        <Button>保存</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleManagement',
  data () {
    return {
      msg: '',
      value3: '',
      data3: ['启示录', '启示录2', '梦想']
    }
  },
  methods: {
    filterMethod (value, option) {
      if (value && option) {
        return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
      }
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
