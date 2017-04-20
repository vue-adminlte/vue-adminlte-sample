<template>
  <li>
    <router-link :to="to">
      <div style="display:flex;align-items:center">
        <i v-if="icon"
           :class="icon"
           style="margin-right:5px"></i>
        <span style="flex:1"><slot></slot></span>
        <small v-if="badgeText"
               class="label"
               style="margin-left:5px"
               :class="[badgeBgClass]">{{badgeText}}</small>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  computed: {
    badgeBgClass() {
      return this.badgeBg ? `bg-${this.badgeBg}` : ''
    }
  },
  props: {
    to: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    },
    badgeText: {
      type: String,
      default: undefined
    },
    badgeBg: {
      type: String,
      default: 'primary'
    }
  }
}
</script>