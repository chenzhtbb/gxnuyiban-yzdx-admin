<template>
  <div class="login">
    <div class="hold-transition login-page">
      <div class="login-box">
        <div class="login-logo">
          <a href="../../index2.html"><b>易知独秀</b>后台管理系统</a>
        </div>
        <!-- /.login-logo -->
        <div class="login-box-body">
          <p class="login-box-msg">登录</p>
          <div class="form-group has-feedback">
            <input class="form-control" placeholder="用户名" v-model="username">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="密码" v-model="password">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <button class="btn btn-primary btn-block btn-flat" @click="_login">登录</button>
            </div>
          </div>
          <br>
        </div>
        <!-- /.login-box-body -->
      </div>
      <!-- /.login-box -->
      <div class="alertify-notifier ajs-bottom ajs-right"></div>
    </div>
  </div>
</template>

<script>
  import {login} from 'api/adminApi'
  import {setToken} from 'src/common/js/auth'

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      _login() {
//        setToken(1)
        this.$router.push('/admin')
        login(this.username, this.password).then((res) => {
          if (res.code === 0) {
            setToken(res.token)
          } else {
            alert('login error')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #d2d6de;
  }
</style>
