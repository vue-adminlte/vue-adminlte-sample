<template>
  <lte-main-sidebar>
    <lte-sidebar-menu>
      <lte-tree-view icon="fa fa-tasks"
                     text="Layout"
                     :items="layoutMenu"></lte-tree-view>
      <lte-tree-view text="UI Element"
                     icon="fa fa-cubes"
                     :items="uiMenu"></lte-tree-view>
      <lte-tree-view text="Form Control"
                     icon="fa fa-plus-square"></lte-tree-view>
      <lte-tree-view text="Editors"></lte-tree-view>
      <lte-tree-view text="Modals"></lte-tree-view>
      <lte-tree-view text="Theme"
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
        icon: 'fa fa-square-o'
      }, {
        text: '12 Layout',
        to: '/AppSample/FlexLayout',
        icon: 'fa fa-square-o'
      }],
      uiMenu: [{
        text: 'Alert & Callout',
        to: '/AppSample/AlertLayout',
        icon: 'fa fa-square-o'
      }, {
        text: 'Button',
        to: '/AppSample/Buton',
        icon: 'fa fa-square-o'
      }, {
        text: 'Box',
        to: '/AppSample/Box',
        icon: 'fa fa-square-o'
      }, {
        text: 'Progress Bar',
        to: '/AppSample/Progress',
        icon: 'fa fa-square-o'
      }, {
        text: 'Carousel',
        to: '/AppSample/Carousel',
        icon: 'fa fa-square-o'
      }],
      formMenu: [{
        text: 'TextBox',
        to: '/AppSample/TextBox',
        icon: 'fa fa-square-o'
      }, {
        text: 'ComboBox',
        to: '/AppSample/ComboBox',
        icon: 'fa fa-square-o'
      }, {
        text: 'Radio & CheckBox',
        to: '/AppSample/CheckBox',
        icon: 'fa fa-square-o'
      }],
      themeMenu: [{
        type: 'b',
        text: 'skin-blue',
        click(e) { vm.setTheme(e) },
        badgeText: ' ',
        badgeBg: 'primary'
      }, {
        type: 'b',
        text: 'skin-blue-light',
        badgeText: ' ',
        badgeBg: 'primary',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-green',
        badgeText: ' ',
        badgeBg: 'green',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-green-light',
        badgeText: ' ',
        badgeBg: 'green',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-yellow',
        badgeText: ' ',
        badgeBg: 'yellow',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-yellow-light',
        badgeText: ' ',
        badgeBg: 'yellow',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-purple',
        badgeText: ' ',
        badgeBg: 'purple',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-purple-light',
        badgeText: ' ',
        badgeBg: 'purple',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-red',
        badgeText: ' ',
        badgeBg: 'red',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-red-light',
        badgeText: ' ',
        badgeBg: 'red',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-black',
        badgeText: ' ',
        badgeBg: 'black',
        click(e) { vm.setTheme(e) }
      }, {
        type: 'b',
        text: 'skin-black-light',
        badgeText: ' ',
        badgeBg: 'black',
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