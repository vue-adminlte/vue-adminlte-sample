import UiBase from './ui-base.js'

export default {
  extends: UiBase,
  props: {
    size: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
