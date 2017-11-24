<template>
  <div class="wrapper">
    <main-header :name="name" :type="type" :photo="photo"></main-header>
    <main-sidebar :photo="photo" :name="name"></main-sidebar>
    <content-wrapper></content-wrapper>
    <main-footer></main-footer>
    <control-sidebar></control-sidebar>
    <!-- Add the sidebar's background. This div must be placed
    immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
  <!-- ./wrapper -->
</template>

<script>
  import MainHeader from './main-header'
  import MainSidebar from './main-sidebar'
  import ContentWrapper from './content-wrapper'
  import MainFooter from './main-footer'
  import ControlSidebar from './control-sidebar'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      MainHeader,
      MainSidebar,
      ContentWrapper,
      MainFooter,
      ControlSidebar
    },
    computed: {
      ...mapGetters([
        'userinfo'
      ])
    },
    mounted() {
      setTimeout(() => {
        this.name = this.userinfo.name
        this.type = this.userinfo.type
        this.photo = this.userinfo.photo
      }, 20)
    },
    data() {
      return {
        name: '',
        type: '',
        photo: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
