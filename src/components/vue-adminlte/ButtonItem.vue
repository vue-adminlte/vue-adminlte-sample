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
export default {
  computed: {
    badgeBgClass() {
      return this.badgeBg ? `bg-${this.badgeBg}` : ''
    }
  },
  props: {
    icon: {
      type: String,
      default: null
    },
    badgeText: {
      type: String,
      default: undefined
    },
    badgeBg: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    onClick(e) {
      this.$emit('click',e)
    }
  }
}
</script>