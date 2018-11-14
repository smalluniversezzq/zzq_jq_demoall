// pages/blog/blog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrl: "",
    upImg: false,
    location: "所在位置",
    blog:"",
    month:"",
    date:"",
    show:true
    

  },
  addImg: function() {
    wx.chooseImage({   //图片上传
      success: (res) => {
        console.log(res)
        var tempFilePaths = res.tempFilePaths;
        this.setData({
          picUrl: tempFilePaths[0],
          temPath: tempFilePaths,
          upImg: true
        })
      }
    });
    wx.uploadFile({
      url: "https://522435231.tlv2018.xyz",
      filePath: tempFilePaths[0],
      name: "image"
    })

  },
  getLocation: function() {
    wx.getSetting({ //获取用户信息
      success: (res) => {
        if (!res.authSetting['scope.userLocation']) { //判断有没有用户信息
          wx.authorize({
            scope: "scope.userLocation",
            success: (res) => {
                wx.chooseLocation({ //获取地理信息
                  success:(res)=>{
                    console.log(res);
                    this.setData({
                      location:res.name
                    })
                  }
                })
            }
          })
        }else {
          wx.chooseLocation({  //打开地图选择位置
            success:(res)=>{
              console.log(res);
              this.setData({
                location:res.name
              })
            }
          })
        }
      }
    })
  },
  fromSubmit:function(e){
    console.log(e);
    var now = new Date();
    var month = now.getMonth();
    var date = now.getDate();
    this.setData({
      blog:e.detail.value.blog,
      month:month + 1,
      date:date,
      show:false
    })
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