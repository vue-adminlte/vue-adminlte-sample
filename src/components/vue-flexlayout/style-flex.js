import StyleCommon from './style-common.js'

export default {
  extends: StyleCommon,
  computed: {
    styleFlex() {
      var temp = this.meregeObject({}, this.$props)
      temp.display = 'flex'
      temp.display = '-webkit-flex'
      return temp
    }
  },
  props: {
    flexDirection: {
      type: String,
      default: undefined
    },
    flexWrap: {
      type: String,
      default: undefined
    },
    flexFlow: {
      type: String,
      default: undefined
    },
    justifyContent: {
      type: String,
      default: undefined
    },
    alignItems: {
      type: String,
      default: undefined
    },
    alignContent: {
      type: String,
      default: undefined
    }
  }
}
