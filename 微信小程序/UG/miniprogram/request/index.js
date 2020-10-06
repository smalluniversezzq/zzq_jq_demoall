export const request = (params)=>{
  // console.log(...params,'params')
  const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
  return new Promise((resolve,reject)=>{
    wx.request({
      // ...params,
      url:baseUrl + params.url,
      data:params.data,
      success:(result)=>{
        resolve(result.data.message)
      },
      fail:(err)=>{
        reject(err)
      },
    })
  })
}