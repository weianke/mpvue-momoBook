import config from '@/config'

export function get (url, data) {
  return request(url, data, 'GET')
}

export function post (url, data) {
  return request(url, data, 'POST')
}

function request (url, data, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      url: config.host + url,
      success: function (res) {
        console.log(res)
        if (res.code === 0) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}
