// pages/demo17/demo17.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"首页",
        isActive:true
      },
      {
        id:1,
        name:"原创",
        isActive:false
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"关于",
        isActive:false
      },
    ]
  },
  ItemChange(e){
    console.log(e.detail,'index')
    let index = e.detail
    let {tabs} = this.data
    tabs.forEach((v,i)=>{
      if(i===index){
        v.isActive = true
      }else{
        v.isActive = false
      }
    })
    this.setData({
      tabs
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})