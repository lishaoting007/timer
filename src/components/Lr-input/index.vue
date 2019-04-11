<template>
  <div>
    <div class="inputWrap">
      <slot name='icon'></slot>
      <label>
        <input type="text"
               v-if="type==='text'"
               v-model="currentValue">
        <input :type="type"
               v-else
               v-model="currentValue">
      </label>
      <slot class="right"
            name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    type: {
      default: 'text'
    },
    max: Number
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue (newValue, oldValue) {
      if (this.max) {
        if (newValue.length > this.max) {
          this.currentValue = oldValue
        }
      }
      this.$emit('input', newValue)
    },
    value: {
      immediate: true,
      handler (val) {
        this.currentValue = val
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/scss/p2r.scss";

.inputWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    flex: 1;
  }

  input {
    width: 100%;
    border: none;
    padding-right: p2r(22);
  }

  .iconfont {
    width: p2r(72);
    height: p2r(72);
    font-size: p2r(40);
    color: #888;
  }
}
</style>
