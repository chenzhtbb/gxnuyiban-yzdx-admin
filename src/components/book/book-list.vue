<template>
  <div class="book-list">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <router-link tag="button" to="/admin/slidernews" class="btn btn-sm btn-primary">添加电话</router-link>
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
              <th>名称</th>
              <th>部门</th>
              <th>类别</th>
              <th>电话</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
            <tr v-for="item in items.data">
              <td class="col-xs-1">{{item.id}}</td>
              <td class="col-xs-3">{{item.name}}</td>
              <td class="col-xs-3">{{item.department}}</td>
              <td>{{item.type}}</td>
              <td>{{item.tel}}</td>
              <td>
                <div class="label label-success" v-if="item.status=='1'">启用</div>
                <div class="label label-danger" v-else>下架</div>
              </td>
              <td>
                <button class="btn btn-xs btn-primary" @click="edit(item)">编辑</button>
                <button class="btn btn-xs btn-warning" @click="del(item)">删除</button>
                <button class="btn btn-xs btn-danger" v-if="item.status=='1'" @click="disable(item)">下架</button>
                <button class="btn btn-xs btn-success" v-else @click="enable(item)">启用</button>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="row next-page">
            <div class="col-xs-12">
              <div class="dataTables_paginate paging_simple_numbers">
                <ul class="pagination next-right">
                  <li class="paginate_button previous" :class="items.current_page == 1 ? 'disabled' : ''">
                    <a href="#" @click="nextPage(items.current_page - 1)">上一页</a>
                  </li>
                  <li class="paginate_button ">
                    <a href="#">{{items.current_page}}</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#"
                       @click="nextPage(items.current_page + 1)">{{items.current_page + 1}}</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#" @click="nextPage(items.current_page + 0)">{{items.current_page + 2}}</a>
                  </li>
                  <li class="paginate_button" v-if="items.current_page + 3 <= items.last_page">
                    <a href="#">...</a>
                  </li>
                  <li class="paginate_button" v-if="items.current_page + 3 <= items.last_page">
                    <a href="#" @click="nextPage(items.last_page)">{{items.last_page}}</a>
                  </li>
                  <li class="paginate_button next" :class="items.last_page == items.current_page ? 'disabled' : ''">
                    <a href="#" @click="nextPage(items.current_page + 1)">下一页</a>
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
  import {getBookList, updateBookStatus, deleteBookItem} from 'src/api/book'

  export default {
    data() {
      return {
        items: []
      }
    },
    mounted() {
      getBookList().then((res) => {
        this.items = res
      })
    },
    methods: {
      nextPage(page) {
        getBookList(page).then((res) => {
          this.items = res
        })
      },
      del(item) {
        deleteBookItem(item.id).then((res) => {
          console.log(res)
        })
      },
      edit(item) {
        console.log(item)
      },
      enable(item) {
        updateBookStatus(item.id, 1).then((res) => {
          console.log(res)
          item.status = 1
        })
      },
      disable(item) {
        updateBookStatus(item.id, 0).then((res) => {
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
