import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.API_PREFIX, // api的base_url
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 开发环境 使用代理配置
  if (process.env.NODE_ENV === 'development') {
    config.proxy = {
      host: 'localhost',
      port: 80
    }
  }
  // 如果携带了token，则添加token
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

service.interceptors.response.use(
  response => response.data,
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  })

export default service
