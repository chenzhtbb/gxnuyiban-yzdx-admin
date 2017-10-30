<template>
  <div class="slider-news">
    <div class="row">
      <div class="col-md-3">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">添加轮播新闻</h3>
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <form role="form">
            <div class="box-body">
              <div class="form-group">
                <label>话题标题</label>
                <input class="form-control" placeholder="话题标题" v-model="title">
              </div>
              <div class="form-group">
                <label>话题链接</label>
                <input class="form-control" placeholder="话题链接" v-model="link">
              </div>
              <div class="form-group">
                <label>话题作者</label>
                <input class="form-control" placeholder="话题作者" v-model="author">
              </div>
            </div>
            <!-- /.box-body -->
            <div class="box-footer">
              <button class="btn btn-primary" @click="putSliderNews">发布</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-9">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">话题预览</h3>
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <div class="box-body">
            <iframe :src="link" ref="iframe"></iframe>
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button class="btn btn-primary" @click="refresh">刷新</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {addSliderNews} from 'api/adminApi'

  export default {
    data() {
      return {
        title: '',
        link: '',
        author: ''
      }
    },
    methods: {
      putSliderNews() {
        addSliderNews(this.title, this.link, this.author).then((res) => {
          console.log(res)
        })
      },
      refresh() {
        this.$refs.iframe.src = this.link
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .box-body {
    height: 500px;
  }

  iframe {
    position: relative;
    width: 100%;
    height: 480px;
    border-width: 0;
  }
</style>
