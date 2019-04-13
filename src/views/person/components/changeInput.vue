<template>
  <div>
    <input class="input"
           :type="type"
           :value="value"
           @change="handleChange"
           :placeholder="placeholder">
    <input class="input"
           :type="type"
           :value="value"
           v-show="type==='password'"
           placeholder="请输入新密码">
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
    value: String
  },
  data () {
    return {
    }
  },
  methods: {
    handleChange ($event) {
      this.$emit('input', $event.target.value)
      this.$emit('change', $event.target.value)
    }
  }
}
</script>

<style lang="scss">
@import "@/style/scss/p2r.scss";
.input {
  margin-top: p2r(90);
  padding-left: p2r(20);
  width: p2r(660);
  height: p2r(100);
  border: none;
  border-bottom: p2r(4) solid #f85648;
  font-size: p2r(36);
}
</style>
