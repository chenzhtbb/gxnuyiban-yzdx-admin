<template>
  <div class="news-list">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">轮播话题</h3>
          <div class="box-tools">
            <div class="input-group input-group-sm" style="width: 150px;">
              <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

              <div class="input-group-btn">
                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
          <div class="box-button">
            <router-link tag="button" to="/slidernews" class="btn btn-sm btn-primary">添加</router-link>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <tbody>
            <tr>
              <th>编号</th>
              <th>标题</th>
              <th>作者</th>
              <th>链接</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
            <tr v-for="item in items">
              <td>{{item.id}}</td>
              <td class="col-xs-4">{{item.title}}</td>
              <td>{{item.author}}</td>
              <td>
                <a :href="item.link">链接</a>
              </td>
              <td>
                <div class="label label-success" v-if="item.status===1">启用</div>
                <div class="label label-danger" v-else>下架</div>
              </td>
              <td>
                <button class="btn btn-xs btn-primary" @click="edit(item)">编辑</button>
                <button class="btn btn-xs btn-danger" v-if="item.status===1" @click="disable(item)">下架</button>
                <button class="btn btn-xs btn-success" v-else @click="enable(item)">启用</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getSliderList, updateSliderStatus} from 'api/adminApi'
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        items: []
      }
    },
    mounted() {
      this.page = 0
      setTimeout(() => {
        this.getSliderList(this.page)
      }, 20)
    },
    methods: {
      ...mapMutations({
        setNewslist: 'SET_NEWSLIST'
      }),
      getSliderList() {
        getSliderList(this.page).then((res) => {
          this.items = res
          this.setNewslist(this.items)
        })
        this.page++
      },
      edit(item) {
        this.$router.push({
          path: '/slidernews',
          query: {id: item.id}
        })
      },
      enable(item) {
        updateSliderStatus(item.id, 1).then((res) => {
          console.log(res)
          item.status = 1
        })
      },
      disable(item) {
        updateSliderStatus(item.id, 0).then((res) => {
          console.log(res)
          item.status = 0
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .box-button {
    position: relative;
    top: 5px;
  }

  tr > th {
    text-align: center;
  }

  tr > td {
    text-align: center;
  }
</style>
