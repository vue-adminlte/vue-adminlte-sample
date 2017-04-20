import FlexPanel from './FlexPanel.vue'

var components = {
  FlexPanel: require('./FlexPanel.vue'),
  StyleDiv: require('./StyleDiv.vue'),
  HPanel: require('./HorizontalPanel.vue'),
  VPanel: require('./VerticalPanel.vue')
}
export default {
  install(Vue) {
    if (Vue._vue_flexlayout_installed) {
      return
    }
    for (var component in components) {
      Vue.component(component, components[component])
    }
    Vue._vue_flexlayout_installed = true
  }
}
