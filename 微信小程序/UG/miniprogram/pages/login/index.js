Page({
  data: {
  },
  bindUserInfo(e){
    console.log(123)
    const { userInfo }  = e.detail
    console.log(userInfo)
    wx.setStorageSync("userInfo",userInfo)
    wx.switchTab({
      url: '/pages/user/index',

    })
  }
})