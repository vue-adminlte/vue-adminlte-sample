import UiBase from './ui-base.js'

export default {
  extends: UiBase,
  props: {
    header: {
      type: String,
      default: undefined
    }
  }
}
