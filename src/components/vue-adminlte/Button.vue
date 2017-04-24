<template>
  <button type="button"
          class="btn"
          :class="[typeClass,sizeClass,blockClass,bgClass,flatClass]"
          :disabled="disabled"
          @click="onClick($event)">
    <i v-if="icon"
       :class="icon"></i>
    <span><slot></slot></span>
    <span class="badge"
          v-if="badgeText"
          :class="badgeBgClass">{{badgeText}}</span>
  </button>
</template>

<script>
import UiElement from './ui-element.js'

export default {
  extends: UiElement,
  computed: {
    typeClass() { return `btn-${this.type}` },
    sizeClass() { return this.size ? `btn-${this.size}` : '' },
    blockClass() { return this.block ? 'btn-block' : '' },
    flatClass() { return this.flat ? 'btn-flat' : '' },
  },
  props: {
    block: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>