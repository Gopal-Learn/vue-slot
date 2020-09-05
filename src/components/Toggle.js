export const toggle = {
  data() {
    return {
      currentState: this.state
    }
  },
  render() {
    return this.$scopedSlots.default({
      currentState: this.currentState,
      setOn: this.openState,
      setOff: this.closeState,
      toggle: this.toggle,
    })
  },
  props: {
    state: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openState() {
      this.currentState = true;
    },
    closeState() {
      this.currentState = false;
    },
    toggle() {
      this.currentState = !this.currentState;
    }
  }
}
 