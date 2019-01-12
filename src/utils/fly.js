import Fly from 'flyio'

var fly = new Fly()

// 添加拦截器
fly.interceptors.request.use((config, promise) => {
  return config
})

// 配置请求基地址
fly.config.baseURL = 'http://localhost:5757'

export default fly
