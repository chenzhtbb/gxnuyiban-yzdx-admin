<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Admin</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
        </div>
      </div>

      <!-- search form (Optional) -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">易知独秀</li>
        <!-- Optionally, you can add icons to the links -->
        <!-- <li class="active"> -->
        <li>
          <router-link tag="a" to="/admin/home">
            <i class="fa fa-link"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link tag="a" to="/admin/newslist">
            <i class="fa fa-link"></i>
            <span>轮播新闻</span>
          </router-link>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-link"></i>
            <span>校园报修</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link tag="a" to="/admin/home/1">宿舍报修</router-link>
            </li>
            <li>
              <router-link tag="a" to="/admin/home/2">网络报修</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
</script>

<style scoped>
  .router-link-active {
    color: #fff;
    background: #1e282c;
  }

  .router-link-active > a {
    border-left-color: #3c8dbc;
  }
</style>
