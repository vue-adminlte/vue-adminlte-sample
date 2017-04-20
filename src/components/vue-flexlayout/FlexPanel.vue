<template>
  <div :style="flexPanelStyle">
    <slot></slot>
  </div>
</template>

<script>
import StyleFlex from './style-flex.js'

export default {
  extends: StyleFlex,
  computed: {
    flexPanelStyle() {
      var temp = this.styleFlex
      if (this.v) { temp.flexDirection = 'column' }
      if (this.h) { p.direction = 'row' }
      if (this.vr) { temp.flexDirection = 'column-reverse' }
      if (this.hr) { temp.flexDirection = 'row-reverse' }

      if (this.mSart) { temp.justifyContent = 'flex-start' }
      if (this.mEnd) { temp.justifyContent = 'flex-end' }
      if (this.mCenter) { temp.justifyContent = 'center' }
      if (this.mBetween) { temp.justifyContent = 'space-between' }
      if (this.mAround) { temp.justifyContent = 'space-around' }

      if (this.cStart) { temp.alignItems = 'flex-start' }
      if (this.cEnd) { temp.alignItems = 'flex-end' }
      if (this.cCenter) { temp.alignItems = 'center' }
      if (this.cBaseline) { temp.alignItems = 'baseline' }
      if (this.cStretch) { temp.alignItems = 'stretch' }

      if (this.wrap) { temp.flexWrap = 'wrap' }
      if (this.wrapr) { temp.flexWrap = 'wrap-reverse' }

      return temp
    }
  },
  props: {
    v: {
      type: Boolean,
      default: undefined
    },
    h: {
      type: Boolean,
      default: undefined
    },
    vr: {
      type: Boolean,
      default: undefined
    },
    hr: {
      type: Boolean,
      default: undefined
    },
    mCenter: {
      type: Boolean,
      default: undefined
    },
    mStart: {
      type: Boolean,
      default: undefined
    },
    mEnd: {
      type: Boolean,
      default: undefined
    },
    mBetween: {
      type: Boolean,
      default: undefined
    },
    mAround: {
      type: Boolean,
      default: undefined
    },
    cStart: {
      type: Boolean,
      default: undefined
    },
    cEnd: {
      type: Boolean,
      default: undefined
    },
    cCenter: {
      type: Boolean,
      default: undefined
    },
    cBaseline: {
      type: Boolean,
      default: undefined
    },
    cStretch: {
      type: Boolean,
      default: undefined
    },
    wrap: {
      type: Boolean,
      default: undefined
    },
    wrapr: {
      type: Boolean,
      default: undefined
    }
  }
}
</script>