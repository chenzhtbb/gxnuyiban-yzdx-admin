<template>
  <div class="hold-transition login-page" style="">
    <div class="login-box">
      <div class="login-logo">
        <a href="../../index2.html"><b>易知独秀</b>后台管理系统</a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">登录</p>
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="用户名">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="密码">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-4"></div>
          <div class="col-xs-4">
            <router-link tag="button" to="/home" type="submit" class="btn btn-primary btn-block btn-flat">登录
            </router-link>
          </div>

        </div>
        <router-link class="center" tag="a" to="/">忘记密码</router-link>
        <br>


      </div>
      <!-- /.login-box-body -->
    </div>
    <!-- /.login-box -->
    <div class="alertify-notifier ajs-bottom ajs-right"></div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
