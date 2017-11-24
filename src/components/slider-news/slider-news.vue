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
              <button class="btn btn-success" @click="back">返回</button>
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
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        title: '',
        link: '',
        author: ''
      }
    },
    computed: {
      ...mapGetters([
        'newslist'
      ])
    },
    mounted() {
      this.id = this.$route.query.id
      if (this.id) {
        this.title = this.newslist[this.id - 1].title
        this.link = this.newslist[this.id - 1].link
        this.author = this.newslist[this.id - 1].author
      }
    },
    methods: {
      back() {
        setTimeout(() => {
          this.$router.go(-1)
        }, 20)
      },
      putSliderNews() {
        if (this.id) {

        } else {
          addSliderNews(this.title, this.link, this.author).then((res) => {
            console.log(res)
          })
        }
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
