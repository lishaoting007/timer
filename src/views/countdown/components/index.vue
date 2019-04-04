<template>
  <div>
    <template>
      <Ring :percent="percent"
            :stroke-color="color">
        <slot></slot>
      </Ring>
      <ButtonGroup size="large">
        <Button icon="ios-remove"></Button>
      </ButtonGroup>
    </template>
  </div>
</template>

<script>
import { Circle, Button, ButtonGroup, Icon } from 'iview'
export default {
  name: 'ring',
  components: {
    'Ring': Circle,
    Button,
    ButtonGroup,
    Icon
  },
  data () {
    return {
      percent: 100
    }
  },
  computed: {
    color () {
      let color = '#409eff'
      if (this.percent === 100) {
        color = '#5cb85c'
      }
      return color
    }
  },
  methods: {
    intervalTime () {
      setInterval(() => {
        this.percent -= 100 / 1500
      }, 1000)
    },
    minus () {
      if (this.percent <= 0) {
        return false
      }
      this.intervalTime()
    },
    timeEnd () {
      this.percent = 0
    }
  }
}
</script>

<style scoped>
</style>
