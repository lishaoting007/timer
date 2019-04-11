import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL
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

export { instance }
