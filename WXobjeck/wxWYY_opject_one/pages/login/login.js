// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImgUrl: "/images/bgimg3.jpg",
    tmpName: undefined,
    tmpPwd: undefined,
    username: '',
    userpwd: ''
  },
  getname: function(e) {
    console.log(e.detail.value)
    this.setData({
      tmpName: e.detail.value
    })
  },
  getpwd: function(e) {
    console.log(e.detail.value)
    this.setData({
      tmpPwd: e.detail.value
    })
  },
  setInfo: function() {
    if (this.data.tmpName && this.data.tmpPwd) {
      if (this.data.tmpName == this.data.username) {
        wx.showToast({
          title: "用户名重复",
          icon: 'none'
        })
      } else {
        this.setData({
          username: this.data.tmpName,
          userpwd: this.data.tmpPwd
        })
        wx.showToast({
          title: "您已注册成功",
          icon: "none",
          duration: 2500,
          success: () => {
            this.setData({
              bgImgUrl: "/images/bgimg4.jpg"
            })
          }
        })
      }
    } else {
      wx.showToast({
        title: "请输入完整信息",
        icon: "none"
      })
    }
  },
  submitForm:function(e){
  
    if (!e.detail.value.username.length <= 0 && !e.detail.value.userpwd.length <= 0){
        if(this.data.username == e.detail.value.username && this.data.userpwd == e.detail.value.userpwd){
            wx.showToast({
              title: '登录成功',
              icon:'',
              success:()=>{
                wx.setStorage({
                  key:"username",
                  data: this.data.username,
                  success:()=>{
                    console.log("用户名本地存储成功")
                  }
                })
                wx.setStorage({
                   key:"userpwd",
                   data:this.data.userpwd,
                   success:()=>{
                     console.log("用户密码存储成功")
                   }
                })
                wx.switchTab({
                  url: '/pages/home/home',
                })
              }
            })
        } else {
          wx.showToast({
            title: '用户名密码输入不正确',
            icon: 'none',
          })
        }
    } else {
        console.log("用户名密码不能为空");
        wx.showToast({
          title: '用户名密码不能为空',
          icon: 'none',
        })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
      // wx.getStorage({
      //   key: 'username',
      //   success: function(res) {
      //     console.log("已经登陆啦");
      //     wx.switchTab({
      //       url: '/pages/home/home',
      //     })
      //   },
      // })
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