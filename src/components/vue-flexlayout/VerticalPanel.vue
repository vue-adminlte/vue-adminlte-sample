<template>
  <div :style="verticalPanelStyle">
    <slot></slot>
  </div>
</template>

<script>
import FlexPanel from './FlexPanel.vue'

export default {
  extends: FlexPanel,
  computed: {
    verticalPanelStyle() {
      var temp = this.flexPanelStyle
      console.debug(temp)
      temp.flexDirection = 'column'
      return temp
    }
  }
}
</script>