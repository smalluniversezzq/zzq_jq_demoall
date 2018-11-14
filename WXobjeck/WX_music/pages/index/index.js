var app = getApp();
var data = [{
  "sysCode": 5001, orderNo: "qqpww180905105110424"}]
console.log(JSON.stringify(data));
var util = require('../../utils/util.js');
Page({
  data: {
    navList: ["推荐", "排行", "搜索"], //导航菜单
    checkIndex: 2, //导航选项卡
    slider: [], //推荐页广告图
    radioList: [], //电台列表
    showCancel: true, //显示取消按钮
    searchWordLength: 0, //根据输入长度显示清除图标
    keyword: '', //搜索关键字
    searchHisWord: [], //历史搜索
    showHistory: true, //是否显示历史搜索
    showHotSearch: false, //显示热门搜索
    showSearchRes: true, //显示搜索结果
    hotSearch: {}, //热门搜索数据
    topList: [], //排行榜数据
    contentlist: [], //搜索结果
    page: 0 //分页
  },
  onLoad() {
    //调用监听器
    getApp().setWatcher(this);
    var that = this;
    //获取缓存的历史搜索
    wx.getStorage({
      key: 'history',
      success: function(res) {
        that.setData({
          searchHisWord: res.data || []
        })
      }
    })

    //获取推荐频道数据
    util.getRecommend(function(data) {
      var res = data.data;
      that.setData({
        slider: res.slider,
        radioList: res.radioList
      })
    });
    //获取热门搜索关键字
    util.getHotSearch(function(data) {
      var res = data.data;
      res.hotkey.splice(9)
      that.setData({
        hotSearch: res
      })

    })
    //获取排行榜数据
    util.getTopList(function(data) {
      var topList = data.topList;

      for (var i = 0; i < topList.length; i++) {
        topList[i].listenCount = parseFloat(topList[i].listenCount / 10000).toFixed(1) + '万'
      }
      that.setData({
        topList: topList
      })
    })
  },
  // 选项卡，点击导航切换页面
  changeNavIndex(e) {
    this.setData({
      checkIndex: e.currentTarget.dataset.index
    })
  },
  //输入
  onInput(e) {
    this.setData({
      keyword: e.detail.value,
    })
  }, //聚焦输入框
  onFocus() {
    var flag = this.data.showSearchRes == false ? true : false;
    this.setData({
      showCancel: false,
      showHistory: flag,
      showHotSearch: true
    })
  },
  //清除输入框
  clearInput() {
    this.setData({
      keyword: '',
      showSearchRes: true,
      showHistory: false
    })
  },
  //取消搜索
  cancelInput() {
    this.setData({
      keyword: '',
      showCancel: true,
      showHistory: true,
      showHotSearch: false,
      showSearchRes: true
    })
  },
  //开始搜索
  onSearch() {
    var that = this;
    var page = that.data.page;
    if (that.data.keyword.trim() == "") { //输入为空弹出模态框
      wx.showModal({
        title: '提示',
        content: '关键字不能为空',
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return;
    }
    util.getSearchContent(that.data.keyword, page, function(res) {
      var contentlist = res.data.showapi_res_body.pagebean.contentlist;
      that.setData({
        contentlist: contentlist,
      })
      var history = that.data.searchHisWord;
      history.push(that.data.keyword);
      var hisList = Array.from(new Set(history)); //去除重复搜索
      //缓存历史记录
      wx.setStorage({
        key: "history",
        data: hisList
      })
      that.setData({
        searchHisWord: hisList,
        showHotSearch: true,
        showSearchRes: false,
        showHistory: true,
      })
    })
  },
  //清除单个历史搜索
  clearHisOne(e) {
    var history = this.data.searchHisWord;
    var index = e.currentTarget.dataset.index;
    history.splice(index, 1)
    this.setData({
      searchHisWord: history
    });
    wx.setStorage({
      key: "history",
      data: history
    });
  },
  //清除全部历史搜索
  clearHisAll() {
    wx.setStorage({
      key: "history",
      data: []
    });
    this.setData({
      searchHisWord: []
    });
  },
  //点击历史记录或者热门搜索
  tapSearch(e) {
    var keyword = e.currentTarget.dataset.text;
    this.setData({
      keyword: keyword,
      showHistory: true
    })
    this.onSearch();

  },
  //跳转外链网页
  outUrl(e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: '../outurl/outurl?outurl=' + url,
    })
  },
  // 跳转排行榜详情页
  toTopList(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../topList/topList?id=' + id,
    })
  },
  watch: {
    keyword: function(newValue) {
      this.setData({
        searchWordLength: newValue.length
      })
    },
  },
  goPlay(e) {
    var ids = this.data.contentlist.map((item) => {
      return item.songid
    })
    var mids = this.data.contentlist.map((item) => {
      return item.songmid
    })
    var types = this.data.contentlist.map((item) => {
      return 0;
    })
    var i = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../play/play?ids=' + JSON.stringify(ids) + '&mids=' + JSON.stringify(mids) + '&types=' + JSON.stringify(types) + '&i=' + i,
    })
  }

})