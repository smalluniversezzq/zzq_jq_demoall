//获取推荐
function getRecommend(callback) {
  wx.request({
    url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
    data: {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: Date.now()
    },
    method: "GET",
    header: {
      "content-Type": "application/json"
    },
    success: function(res) {
      if (res.statusCode == 200) {
        var data = res.data;

        callback(data);
      }
    }
  })
}
//获取热门搜索
function getHotSearch(callback) {
  wx.request({
    url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
    data: {
      g_tk: 5381,
      uin: 0,
      format: 'jsonp',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: Date.now()
    },
    method: "GET",
    header: {
      "content-Type": "application/json"
    },
    success(res) {

      if (res.statusCode == 200) {
        var data = res.data;
        callback(data);
      }
    }
  })
}


//获取排行榜
function getTopList(callback) {
  wx.request({
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
    data: {
      g_tk: '5381',
      uin: "0",
      format: "json",
      inCharset: "utf - 8",
      outCharset: "utf - 8",
      notice: "0",
      platform: "h5",
      needNewCode: "1",
      _: "1535704605926"
    },
    method: "GET",
    header: {
      "content-Type": "application/json",
    },
    success(res) {
      if (res.statusCode == 200) {
        var data = res.data.data;
        callback(data)
      }
    }
  })
}
//获取排行榜歌单内容
function getTopListDetail(id, callback) {
  wx.request({
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',
    data: {
      tpl: "3",
      page: 'detail',
      type: 'top',
      topid: id,
      g_tk: '5381',
      uin: "0",
      format: "json",
      inCharset: "utf - 8",
      outCharset: "utf - 8",
      notice: "0",
      platform: "h5",
      needNewCode: "1",
      _: "1535704605926"
    },
    success(res) {
      if (res.statusCode == 200) {
        var data = res.data;
        callback(data)
      }
    }
  })
}
//获取歌曲信息
function playMusic(ids, types, callback) {
  wx.request({
    url: 'https://u.y.qq.com/cgi-bin/musicu.fcg',
    method: 'POST',
    header: {
      "content-Type": "application/json",
    },
    data: {
      "req_0": {
        "module": "track_info.UniformRuleCtrlServer",
        "method": "GetTrackInfo",
        "param": {
          "ids": ids,
          "types": types
        }
      },
      "comm": {
        "g_tk": 5381,
        "uin": 0,
        "format": "json",
        "ct": 23,
        "cv": 0
      }
    },
    success(res) {
      if (res.statusCode == 200) {
        var data = res.data;
        callback(res);
      }

    }
  })
}
//获取播放地址
function getKey(mids, types, callback) {
  wx.request({
    url: 'https://u.y.qq.com/cgi-bin/musicu.fcg',
    data: {
      "req_0": {
        "module": "vkey.GetVkeyServer",
        "method": "CgiGetVkey",
        "param": {
          "guid": "3220148235",
          "songmid": mids,
          "songtype": types,
          "uin": "0",
          "loginflag": 0,
          "platform": "23"
        }
      },
      "comm": {
        "g_tk": 5381,
        "uin": 0,
        "format": "json",
        "ct": 23,
        "cv": 0
      }

    },
    method: 'POST',
    header: {
      "content-Type": "application/json",
    },
    success(res) {
      if (res.statusCode == 200) {
        var data = res.data;
        callback(res);
      }

    }
  })
}
// 取出第几周
function getWeek(str) {
  var i = str.indexOf('_') + 1;
  return "第" + str.substr(i, 2) + "周";
}


//获取搜索结果
function getSearchContent(keyword, page, callback) {
  wx.request({
    url: 'http://route.showapi.com/213-1',
    data: {
      showapi_appid: '73516',
      showapi_sign: '58a20ba85b4f4d2cb4c22e311e722793',
      keyword: keyword,
      page: page
    },
    method: 'GET',
    header: {
      "content-Type": "application/x-www-form-urlencoded"
  },
    success(res) {
      if (res.statusCode == 200) {
        var data = res.data;
        callback(res);
      }

    }
  })
}

module.exports = {
  getRecommend: getRecommend,
  getHotSearch: getHotSearch,
  getTopList: getTopList,
  getTopListDetail: getTopListDetail,
  playMusic: playMusic,
  getKey: getKey,
  getWeek: getWeek,
  getSearchContent: getSearchContent
}