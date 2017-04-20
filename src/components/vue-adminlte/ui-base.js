export default {
  computed: {
    bgClass() {
      return this.bg ? `bg-${this.bg}` : ''
    },
    badgeBgClass() {
      return this.badgeBg ? `bg-${this.badgeBg}` : ''
    }
  },
  props: {
    type: {
      type: String,
      default: undefined
    },
    bg: {
      type: String,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    },
    badgeText: {
      type: String,
      default: undefined
    },
    badgeBg: {
      type: String,
      default: undefined
    }
  }
}
