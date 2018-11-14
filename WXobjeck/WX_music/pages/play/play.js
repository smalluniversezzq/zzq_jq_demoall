// pages/play/play.js

var util = require('../../utils/util.js');
const backgroundAudioManager = wx.getBackgroundAudioManager(); //背景音乐
function bgMusic(title, singer , coverImgUrl, src) {
  backgroundAudioManager.title = title
  backgroundAudioManager.singer = singer
  backgroundAudioManager.coverImgUrl = coverImgUrl;
  backgroundAudioManager.src = src;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    var that = this;
    var ids = JSON.parse(options.ids);
    var mids = JSON.parse(options.mids);
    var types = JSON.parse(options.types);
    var i = options.i;

    util.getKey(mids, types, function(res) {
      var midurlinfo = res.data.req_0.data.midurlinfo
      var srcs = midurlinfo.map((item) => {
        return item.purl
      })
      that.setData({
        srcs: srcs,
        i: i
      })
      wx.hideLoading();
       var title='';
       var singer="";
       var coverImgUrl="";
      bgMusic(title, singer, coverImgUrl, srcs[i]);
    })
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