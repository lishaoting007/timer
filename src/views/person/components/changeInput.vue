<template>
  <div class="changeInputWrap">
    <slot name="icon"
          class="slot"></slot>
    <input class="input"
           :type="type"
           :value="value"
           @change="handleChange"
           :placeholder="placeholder">
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  components: {
    Button
  },
  props: {
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    value: String,
    title: String
  },
  data () {
    return {
    }
  },
  methods: {
    handleChange ($event) {
      this.$emit('input', $event.target.value)
      this.$emit('change', $event.target.value)
    },
    toggleType () {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/style/scss/p2r.scss";

.changeInputWrap {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  margin-top: p2r(90);
  width: p2r(660);
  border-bottom: p2r(4) solid #f85648;
  font-size: p2r(36);

  .slot {
    flex: 1;
  }
  .title {
    padding-left: p2r(10);
    height: p2r(100);
    line-height: p2r(100);
    font-size: p2r(32);
  }

  .input {
    flex: 1;
    align-self: flex-end;
    border: none;
    padding-left: p2r(20);
    line-height: p2r(100);
  }
}
</style>
