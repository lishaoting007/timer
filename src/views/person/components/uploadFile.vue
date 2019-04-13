<template>
  <div>
    <label>
      <input class="uploadFile"
             type="file"
             @change="handleChange">
      <slot></slot>
    </label>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      token: ''
    }
  },
  created () {
    this.getToken()
  },
  methods: {
    getToken () {
      axios.get('http://upload.yaojunrong.com/getToken').then(res => {
        this.token = res.data.data
      })
    },
    handleChange ($event) {
      let file = $event.target.files[0]
      let form = new FormData()
      form.append('file', file)
      form.append('token', this.token)
      axios.post('https://upload-z1.qiniup.com', form).then(res => {
        this.$emit('success', res.data.url)
      })
    }
  }
}
</script>

<style lang="scss">
.uploadFile {
  display: none;
}
</style>
