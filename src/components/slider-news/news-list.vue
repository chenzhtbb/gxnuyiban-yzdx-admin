<template>
  <div class="news-list">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <router-link tag="button" to="/admin/slidernews" class="btn btn-sm btn-primary">添加话题</router-link>
          <div class="box-tools">
            <div class="input-group input-group-sm" style="width: 150px;">
              <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

              <div class="input-group-btn">
                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
              </div>
            </div>
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
              <td class="col-xs-1">{{item.id}}</td>
              <td class="col-xs-4">{{item.title}}</td>
              <td>{{item.author}}</td>
              <td>
                <a :href="item.link" target="view_window">链接</a>
              </td>
              <td>
                <div class="label label-success" v-if="item.status=='1'">启用</div>
                <div class="label label-danger" v-else>下架</div>
              </td>
              <td>
                <router-link class="btn btn-xs btn-primary" tag="button"
                             :to="{path: 'slidernews',query: {id: item.id}}">编辑
                </router-link>
                <button class="btn btn-xs btn-danger" v-if="item.status=='1'" @click="disable(item)">下架</button>
                <button class="btn btn-xs btn-success" v-else @click="enable(item)">启用</button>
                <button class="btn btn-xs btn-warning" @click="del(item)">删除</button>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="row next-page">
            <div class="col-xs-12">
              <div class="dataTables_paginate paging_simple_numbers">
                <ul class="pagination next-right">
                  <li class="paginate_button previous disabled">
                    <a href="#">上一页</a>
                  </li>
                  <li class="paginate_button active">
                    <a href="#">1</a>
                  </li>
                  <li class="paginate_button ">
                    <a href="#">2</a>
                  </li>
                  <li class="paginate_button ">
                    <a href="#">3</a>
                  </li>
                  <li class="paginate_button ">
                    <a href="#">4</a>
                  </li>
                  <li class="paginate_button ">
                    <a href="#">5</a>
                  </li>
                  <li class="paginate_button ">
                    <a href="#">6</a>
                  </li>
                  <li class="paginate_button next">
                    <a href="#">下一页</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getSliderList, updateSliderStatus, deleteSliderItem} from 'api/adminApi'
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
      del(item) {
        deleteSliderItem(item.id, 1).then((res) => {
          console.log(res)
          this.page--
          this.getSliderList()
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

  tr > th {
    text-align: center;
  }

  tr > td {
    text-align: center;
  }

  .next-page
    position relative
    width 100%
    height 80px

  .next-right
    position absolute
    right 0

</style>
