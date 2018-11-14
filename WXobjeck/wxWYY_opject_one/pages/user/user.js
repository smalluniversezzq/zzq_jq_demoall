// pages/user/user.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    userbg: "/images/userbg.jpg",
    userhead: "/images/userhead.jpeg",
    username: "",
    nickName: "",
    avatarUrl: "",
    weather: "实时天气"
  },
  switchchange: function(e) {
    // console.log(e)
    if (e.detail.value) {
      wx.request({
        url: "https://free-api.heweather.com/s6/weather/now?parameters",
        data: {
          location: "青岛",
          key: "8dda60d1afc549339bf5d0964955ce91"
        },
        success: (res) => {
          // console.log(res);
       
          var location = res.data.HeWeather6[0].basic.location;
          var weather = res.data.HeWeather6[0].now.cond_txt;
          var tmp = res.data.HeWeather6[0].now.tmp;
          this.setData({
            weather: location + " " + weather + " " + tmp + "度"
          })
        }
      })
    } else {
      this.setData({
        weather: "实时天气"
      })
    }
  },
  toBolg: function() {
    wx.navigateTo({
      url: "../blog/blog",
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取用户信息
    // wx.getSetting({
    //   success: (res) => {
    //     wx.getUserInfo({
    //       success: (res) => {
    //         // console.log(res)
    //         this.setData({
    //           username: res.userInfo.nickName,
    //           userhead: res.userInfo.avatarUrl
    //         })
    //       }
    //     })
    //   }
    // })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})