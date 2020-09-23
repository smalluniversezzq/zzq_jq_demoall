//Page Object
Page({
  data: {
    
  },
  //options(Object)
  onLoad: function(options) {
    console.log('请求发送前')
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      methods:"get",
      success:((res)=>{

      })
    })
    
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  