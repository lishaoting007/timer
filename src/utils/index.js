import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL
  // baseURL: 'https://m.yaojunrong.com'
  // baseURL: 'https://localhost:3000'
})
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data
  },
  error => {
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
