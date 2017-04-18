<template>
  <lte-top-header :fluid="isFluid">
    <lte-navbar-header>
      <lte-brand icon="fa fa-home"
                 to="#">VueAdminLTE</lte-brand>
      <lte-navbar-toggle target="#header-collapse"></lte-navbar-toggle>
    </lte-navbar-header>
    <lte-navbar-collapse id="header-collapse">
      <lte-navbar>
        <lte-router-item>Home</lte-router-item>
        <lte-router-item to="/AppStarter">AppStarter</lte-router-item>
        <lte-menu text="Links">
          <lte-link-item href="http://www.cnblogs.com/durow/"
                         icon="fa fa-edit">durow's blogsdfsdfsdfsdsfsfdsfsd</lte-link-item>
          <lte-link-item href="https://github.com/durow"
                         icon="fa fa-github">durow's github</lte-link-item>
        </lte-menu>
        <lte-menu text="Theme">
          <lte-btn-item @click="setTheme('skin-blue')"
                        icon="fa fa-themeisle"><div class="label bg-primary">skin-blue</div></lte-btn-item>
          <lte-btn-item icon="fa fa-themeisle"
                        @click="setTheme('skin-green')"><span class="label bg-green">skin-green</span></lte-btn-item>
          <lte-btn-item icon="fa fa-themeisle"
                        @click="setTheme('skin-purple')"><span class="label bg-purple">skin-purple</span></lte-btn-item>
          <lte-btn-item icon="fa fa-themeisle"
                        @click="setTheme('skin-yellow')"><span class="label bg-orange">skin-yellow</span></lte-btn-item>
          <lte-btn-item icon="fa fa-themeisle"
                        @click="setTheme('skin-red')"><span class="label bg-red">skin-red</span></lte-btn-item>
          <lte-btn-item icon="fa fa-themeisle"
                        @click="setTheme('skin-black')"><span class="label bg-black">skin-black</span></lte-btn-item>
        </lte-menu>
      </lte-navbar>
      <lte-navbar right>
        <lte-link-item icon="fa fa-github"
                       href="https://github.com/vue-adminlte/vue-adminlte-starter"></lte-link-item>
        <lte-router-item icon="fa fa-user"></lte-router-item>
        <lte-btn-item @click="changeLayout"
                      icon="fa fa-arrows-alt"></lte-btn-item>
      </lte-navbar>
    </lte-navbar-collapse>
  </lte-top-header>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    isFluid() {
      return this.$store.state.layout == 'container-fluid'
    }
  },
  methods: {
    setTheme(v) {
      this.$store.commit('setTheme', v)
    },
    changeLayout() {
      this.$store.commit('changeLayout')
    }
  }
}
</script>