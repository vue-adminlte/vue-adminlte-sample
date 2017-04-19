<template>
  <div :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import FlexPanel from './FlexPanel'

export default {
  extends: FlexPanel,
  computed: {
    styleObject() {
      var temp = {
        display: 'flex',
        width: '100%',
        minHeight: '100vh'
      }
      return this.meregeObject(temp, this.$props)
    }
  },
  props: {
    flexDirection: {
      type: String,
      default: undefined
    }
  },
  components: {
    FlexPanel
  }
}
</script>