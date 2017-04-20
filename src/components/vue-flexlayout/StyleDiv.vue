<template>
  <div :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import StyleCommon from './style-common.js'

export default {
  extends: StyleCommon
}
</script>