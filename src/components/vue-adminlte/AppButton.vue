<template>
  <a class="btn btn-app"
     @click="onClick($event)">
    <span class="badge"
          v-if="badgeText"
          :class="badgeBgClass">{{badgeText}}</span>
    <i :class="icon"></i>
    <slot></slot>
  </a>
</template>

<script>
import UiBase from './ui-base.js'

export default {
  extends: UiBase,
  props: {
    icon: {
      type: String,
      default: 'fa fa-square-o'
    }
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}

</script>