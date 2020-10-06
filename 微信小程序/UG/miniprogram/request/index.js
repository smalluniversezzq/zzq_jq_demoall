let axajTimes = 0;
export const request = (params)=>{
  // console.log(...params,'params')
    axajTimes++;
    wx.showLoading({
      title:"加载中",
      mask:true
    })
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
      complete:()=>{
        axajTimes--;
        axajTimes===0?wx.hideLoading():""
      }
    })
  })
}