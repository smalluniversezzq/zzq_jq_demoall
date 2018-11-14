// pages/topList/topList.js
var app = getApp();
import util from '../../utils/util.js';

const innerAudioContext = wx.createInnerAudioContext(); //音乐
const backgroundAudioManager = wx.getBackgroundAudioManager(); //背景音乐
//背景播放器设置
function bgMusic(title, singer, coverImgUrl, src) {
  backgroundAudioManager.title = title
  backgroundAudioManager.singer = singer
  backgroundAudioManager.coverImgUrl = coverImgUrl;
  backgroundAudioManager.src = src;
}
//播放下一个
function nextPlay(that) {
  var i = that.data.selectIndex;
  if (that.data.srcs[i] === "") {
    i = i + 1;
  }
  if (i + 1 >= that.data.total) {
    i = 0
  } else {
    i = i + 1
  }
  var title = that.data.songlist[i].data.songname;
  var singer = '';
  that.data.songlist[i].data.singer.forEach((item) => {
    singer += item.name + "  ";
  })
  var coverImgUrl = that.data.linkUrl;
  var src = that.data.srcs[i];
  bgMusic(title, singer, coverImgUrl, src);
  that.setData({
    selectIndex: i
  })
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    topinfo: {},
    songlist: [],
    total: 0,
    linkUrl: '', //排行榜背景图
    src: '', //当前播放地址
    srcs: [], //播放地址
    day: '', //显示日期
    date: '', //更新时间
    ids: [], //
    mids: [], //
    types: [], //
    selectIndex: -1, //当前选中歌曲的索引值
    playAllIndex: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //loading
    wx.showLoading({
      title: '加载中',
      mask: true
    })

    var that = this;
    var id = options.id;

    //获取排行榜具体内容
    util.getTopListDetail(id, function(res) {
      var linkUrl = res.topinfo.pic_album + "?max_age=2592000";
      //根据返回的不同参数显示不同结果
      var week = util.getWeek(res.date);
      var day = res.day_of_year == "" ? week : '第' + res.day_of_year + '天';
      that.setData({
        topinfo: res.topinfo,
        songlist: res.songlist,
        linkUrl: linkUrl,
        total: res.total_song_num,
        day: day,
        date: res.update_time + " 更新",
      });

      var songlist = that.data.songlist;
      var ids = songlist.map((item) => {
        return item.data.songid
      })
      var mids = songlist.map((item) => {
        return item.data.songmid
      })
      var types = songlist.map((item) => {
        return item.data.type
      })
      that.setData({
        ids: ids,
        mids: mids,
        types: types
      })
      //获取歌曲播放链接
      util.getKey(mids, types, function(res) {
        var midurlinfo = res.data.req_0.data.midurlinfo
        var srcs = midurlinfo.map((item) => {
          return item.purl
        })
        that.setData({
          srcs: srcs
        })
        wx.hideLoading();
      })
    })

  },
  playMusic(e) {
    var that = this;
    var i = e.currentTarget.dataset.index;
    if (i == that.data.selectIndex) {
      return;
    }
    innerAudioContext.stop();
    if (that.data.srcs[i] === "") {
      i = i + 1;
    }
    that.setData({
      selectIndex: i
    })
    var title = that.data.songlist[i].data.songname;
    var singer = '';
    that.data.songlist[i].data.singer.forEach((item) => {
      singer += item.name + "  ";
    })
    var coverImgUrl = that.data.linkUrl;
    var src = that.data.srcs[i]
    bgMusic(title, singer, coverImgUrl, src);
    //播放上一首
    backgroundAudioManager.onPrev((res) => {
      var i = that.data.selectIndex;
      if (that.data.srcs[i] === "") {
        i = i + 1;
      }
      if (i - 1 < 0) {
        i = that.data.total - 1;
      } else {
        i = i - 1
      }
      var title = that.data.songlist[i].data.songname;
      var singer = '';
      that.data.songlist[i].data.singer.forEach((item) => {
        singer += item.name + "  ";
      })
      var coverImgUrl = that.data.linkUrl;
      var src = that.data.srcs[i];
      bgMusic(title, singer, coverImgUrl, src);
      that.setData({
        selectIndex: i
      })
    });
    //监听播放下一首
    backgroundAudioManager.onNext((res) => {
      nextPlay(that)
    })
    //播放完毕自动播放下一首
    backgroundAudioManager.onEnded((res) => {
        nextPlay(that)
      })
     
  }


})