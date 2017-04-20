<template>
<!--为了演示菜单的生成方式，用了三种不同的方法。
1.可以直接在lte-tree-view中直接写入html，例如vue-flexlayout和Editors菜单
2.可以把lte-tree-view绑定到数据源，例如主题颜色菜单
3.可以在lte-tree-view内部用v-for生成菜单，例如UI Elements和Form Controls菜单-->
  <lte-main-sidebar>
    <lte-user-panel image="static/user.jpg"
                    status="online"></lte-user-panel>
    <lte-sidebar-search></lte-sidebar-search>
    <lte-sidebar-menu>
      <lte-header-item>App Samples</lte-header-item>
      <lte-tree-view icon="fa fa-tasks"
                     text="vue-flexlayout">
        <lte-router-item icon="fa fa-circle-o"
                         to="/AppSample/FlexLayout">布局骰子</lte-router-item>
        <lte-router-item icon="fa fa-circle-o"
                         to="/AppSample/FlexSample">圣杯布局</lte-router-item>
      </lte-tree-view>
      <lte-tree-view text="UI Elements"
                     icon="fa fa-cubes">
        <lte-router-item v-for="item in uiMenu"
                         icon="fa fa-circle-o"
                         :to="'/AppSample/'+item">{{item}}</lte-router-item>
      </lte-tree-view>
      <lte-tree-view text="Form Control"
                     icon="fa fa-plus-square">
        <lte-router-item v-for="item in formMenu"
                         icon="fa fa-circle-o"
                         :to="'/AppSample/'+item">{{item}}</lte-router-item>
      </lte-tree-view>
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
      uiMenu: ['Alert', 'Callout', 'Button', 'Box', 'Carousel'],
      formMenu: ['TextBox', 'ComboBox', 'Radio', 'CheckBox'],
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
      this.$store.commit('setTheme', v.target.innerText)
    }
  }
}
</script>