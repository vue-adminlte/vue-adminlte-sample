<template>
  <div :class="themeClass">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  computed: {
    themeClass() {
      return this.$store.state.theme
    }
  }
}
</script>
