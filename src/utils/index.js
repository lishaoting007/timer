import axios from 'axios'

const instance = axios.create({
  // baseURL: process.env.BASE_URL
  baseURL: 'https://m.yaojunrong.com'
})
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

instance.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers.token = token
      return config
    } else {
      return config
    }
  },
  err => Promise.reject(err)
)

export { instance }
