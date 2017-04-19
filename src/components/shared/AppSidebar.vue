<template>
  <lte-main-sidebar>
    <lte-user-panel image="static/user.jpg"
                    status="online"></lte-user-panel>
    <lte-sidebar-search></lte-sidebar-search>
    <lte-sidebar-menu>
      <lte-header-item>App Samples</lte-header-item>
      <lte-tree-view icon="fa fa-tasks"
                     text="Layout"
                     :items="layoutMenu"></lte-tree-view>
      <lte-tree-view text="UI Elements"
                     icon="fa fa-cubes"
                     :items="uiMenu"></lte-tree-view>
      <lte-tree-view text="Form Control"
                     :items="formMenu"
                     icon="fa fa-plus-square"></lte-tree-view>
      <lte-tree-view text="Editors"
                     icon="fa fa-edit">
        <lte-router-item to="/AppSample/UEditor"
                         icon="fa fa-circle-o">UEditor</lte-router-item>
        <lte-router-item to="/AppSample/CKEditor"
                         icon="fa fa-circle-o">CKEditor</lte-router-item>
        <lte-router-item to="/AppSample/WYSI"
                         icon="fa fa-circle-o">WYSI</lte-router-item>
      </lte-tree-view>
      <lte-tree-view text="Modals"
                     icon="fa fa-warning"></lte-tree-view>
      <lte-tree-view text="Theme"
                     icon="fa fa-picture-o"
                     :items="themeMenu"></lte-tree-view>
    </lte-sidebar-menu>
  </lte-main-sidebar>
</template>

<script>
var store = undefined
var vm = undefined

export default {
  mounted() {
    vm = this
  },
  data() {
    return {
      layoutMenu: [{
        text: 'Flex Layout',
        to: '/AppSample/FlexLayout',
        icon: 'fa fa-circle-o'
      }, {
        text: 'Flex Sample',
        to: '/AppSample/FlexSample',
        icon: 'fa fa-circle-o'
      }, {
        text: '12 Layout',
        to: '/AppSample/FlexLayout',
        icon: 'fa fa-circle-o'
      }],
      uiMenu: [{
        text: 'Alert & Callout',
        to: '/AppSample/AlertLayout',
        icon: 'fa fa-circle-o'
      }, {
        text: 'Button',
        to: '/AppSample/Buton',
        icon: 'fa fa-circle-o'
      }, {
        text: 'Box',
        to: '/AppSample/Box',
        icon: 'fa fa-circle-o'
      }, {
        text: 'Progress Bar',
        to: '/AppSample/Progress',
        icon: 'fa fa-circle-o'
      }, {
        text: 'Carousel',
        to: '/AppSample/Carousel',
        icon: 'fa fa-circle-o'
      }],
      formMenu: [{
        text: 'TextBox',
        to: '/AppSample/TextBox',
        icon: 'fa fa-circle-o'
      }, {
        text: 'ComboBox',
        to: '/AppSample/ComboBox',
        icon: 'fa fa-circle-o'
      }, {
        text: 'Radio & CheckBox',
        to: '/AppSample/CheckBox',
        icon: 'fa fa-circle-o'
      }],
      themeMenu: [{
        type: 'b',
        text: 'skin-blue',
        click(e) { vm.setTheme(e) },
        badgeText: ' ',
        icon: 'fa fa-circle-o',
        badgeBg: 'primary'
      }, {
        type: 'b',
        text: 'skin-blue-light',
        badgeText: ' ',
        badgeBg: 'primary',
        icon: 'fa fa-circle-o',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-green',
        badgeText: ' ',
        badgeBg: 'green',
        icon: 'fa fa-circle-o',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-green-light',
        badgeText: ' ',
        badgeBg: 'green',
        icon: 'fa fa-circle-o',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-yellow',
        badgeText: ' ',
        badgeBg: 'yellow',
        icon: 'fa fa-circle-o',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-yellow-light',
        badgeText: ' ',
        badgeBg: 'yellow',
        icon: 'fa fa-circle-o',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-purple',
        badgeText: ' ',
        badgeBg: 'purple',
        icon: 'fa fa-circle-o',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-purple-light',
        badgeText: ' ',
        badgeBg: 'purple',
        icon: 'fa fa-circle-o',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-red',
        badgeText: ' ',
        badgeBg: 'red',
        icon: 'fa fa-circle-o',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-red-light',
        badgeText: ' ',
        badgeBg: 'red',
        icon: 'fa fa-circle-o',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-black',
        badgeText: ' ',
        badgeBg: 'black',
        icon: 'fa fa-circle-o',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-black-light',
        badgeText: ' ',
        badgeBg: 'black',
        icon: 'fa fa-circle-o',
        click(e) { vm.setTheme(e) }
      }]
    }
  },
  methods: {
    setTheme(v) {
      // console.debug(v.target.innerText)
      this.$store.commit('setTheme', v.target.innerText)
    }
  }
}
</script>