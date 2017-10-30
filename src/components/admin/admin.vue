<template>
  <div class="wrapper">
    <main-header></main-header>
    <main-sidebar></main-sidebar>
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

  export default {
    components: {
      MainHeader,
      MainSidebar,
      ContentWrapper,
      MainFooter,
      ControlSidebar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
