export default {
  computed: {
    bgClass() {
      return this.bg ? `bg-${this.bg}` : ''
    },
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
    }
  }
}
