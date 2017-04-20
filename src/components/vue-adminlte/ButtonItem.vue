<template>
  <li>
    <a @click="onClick($event)"
       href="javascript:void(0)">
      <div style="display:flex;align-items:center">
        <i v-if="icon"
           :class="icon"
           style="margin-right:5px"></i>
        <div style="flex:1">
          <slot></slot>
        </div>
        <small v-if="badgeText || badgeBg"
               class="label"
               style="margin-left:5px"
               :class="[badgeBgClass]">{{badgeText}}</small>
      </div>
    </a>
  </li>
</template>

<script>
import UiBase from './ui-base.js'

export default {
  extends: UiBase,
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>