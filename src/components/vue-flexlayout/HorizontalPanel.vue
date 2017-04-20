<template>
  <div :style="horizontalPanelStyle">
    <slot></slot>
  </div>
</template>

<script>
import FlexPanel from './FlexPanel.vue'

export default {
  extends:FlexPanel,
  computed: {
    horizontalPanelStyle() {
      var temp = this.flexPanelStyle
      temp.flexDirection = 'row'
      if (!temp.itemsAligen) {
        temp.itemsAligen = 'center'
      }
      return temp
    }
  }
}
</script>