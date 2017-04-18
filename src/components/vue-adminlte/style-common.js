export default {
  methods: {
    meregeObject(a, b) {
      for (var p in b) {
        if (b[p]) {
          a[p] = b[p]
        }
      }
      return a
    }
  },
  computed: {
    styleObject() {
      return commonStyle
    },
    commonStyle() {
      return this.meregeObject({}, this.$props)
    }
  },
  props: {
    display: {
      type: String,
      default: undefined
    },
    background: {
      type: String,
      default: undefined
    },
    color: {
      type: String,
      default: undefined
    },
    width: {
      type: String,
      default: undefined
    },
    minWidth: {
      type: String,
      default: undefined
    },
    height: {
      type: String,
      default: undefined
    },
    minHeight: {
      type: String,
      default: undefined
    },
    margin: {
      type: String,
      default: undefined
    },
    padding: {
      type: String,
      default: undefined
    },
    border: {
      type: String,
      default: undefined
    },
    fontFamily: {
      type: String,
      default: undefined
    },
    fontSize: {
      type: String,
      default: undefined
    },
    textAlign: {
      type: String,
      default: undefined
    },
    position: {
      type: String,
      default: undefined
    },
    left: {
      type: String,
      default: undefined
    },
    top: {
      type: String,
      default: undefined
    },
    zIndex: {
      type: String,
      default: undefined
    },
    flex: {
      type: String,
      default: undefined
    },
    alignSelf: {
      type: String,
      default: undefined
    },
    order: {
      type: String,
      default: undefined
    }
  }
}
