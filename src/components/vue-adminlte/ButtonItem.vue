<template>
  <li>
    <a @click="onClick($event)"
       href="javascript:void(0)">
      <flex-panel align-items="center">
        <i v-if="icon"
           :class="icon"
           style="padding-right:5px"></i>
        <div style="flex:1">
          <slot></slot>
        </div>
        <small v-if="badgeText || badgeBg"
               class="label"
               :class="[badgeBgClass]">{{badgeText}}</small>
      </flex-panel>
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