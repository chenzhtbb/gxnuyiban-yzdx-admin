<template>
  <div class="feedback">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <thead>
            <tr>
              <th class="col-xs-1">#</th>
              <th class="col-xs-1">uid</th>
              <th class="col-xs-1">类别</th>
              <th class="col-xs-1">标题</th>
              <th class="col-xs-1">内容</th>
              <th class="col-xs-1">时间</th>
              <th class="col-xs-1">状态</th>
              <th class="col-xs-1">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in items">
              <td class="col-xs-1">{{item.id}}</td>
              <td class="col-xs-1">{{item.uid}}</td>
              <td class="col-xs-1">{{item.type}}</td>
              <td class="col-xs-1">{{item.title}}</td>
              <td class="col-xs-2">{{item.content}}</td>
              <td class="col-xs-2">{{item.time}}</td>
              <td class="col-xs-2">
                <div class="label label-success" v-if="item.status">已回复</div>
                <div class="label label-danger" v-else>未回复</div>
              </td>
              <td class="col-xs-2">
                <button class="btn btn-xs btn-primary" @click="revert(item)">回复
                </button>
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
  import {getFeedBack} from 'api/adminApi'

  export default {
    data() {
      return {
        items: [],
        page: 1
      }
    },
    mounted() {
      setTimeout(() => {
        this.getFeedBack(this.page)
      }, 20)
    },
    methods: {
      getFeedBack(page) {
        getFeedBack(page).then((res) => {
          console.log(res)
          this.items = res.data
          console.log(this.items)
        })
      },
      revert(item) {

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
</style>
