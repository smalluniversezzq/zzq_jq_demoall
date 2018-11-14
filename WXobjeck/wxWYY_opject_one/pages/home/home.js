// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    icons: [{
        name: "景点",
        imgsUrl: "/images/swith1.jpg"
      },
      {
        name: "酒店",
        imgsUrl: "/images/swith2.jpg"
      },
      {
        name: "餐饮",
        imgsUrl: "/images/swith3.jpg"
      },
      {
        name: "机票",
        imgsUrl: "/images/swith4.jpg"
      },
      {
        name: "购物",
        imgsUrl: "/images/swith5.jpg"
      }, {
        name: "轮渡",
        imgsUrl: "/images/swith6.jpg"
      },
      {
        name: "附近",
        imgsUrl: "/images/swith7.jpg"
      },
      {
        name: "游记",
        imgsUrl: "/images/swith8.jpg"
      },
    ],
    article: [{
        title: "格兰蒂安西海滩 塞舌尔拉迪格岛",
        picUrl: "/images/seabeach1.jpg",
      link: "../article01/article01",
        content: "这里很容易被遗忘， 因为不仅静谧之极， 还不易到达。 尽管如此， 还是不能遮住这里的魅力拉迪格岛的格兰蒂安西海滩是原生态型的海滩， 这里的一切都充满原生态的气息。 如果你是冲浪爱好者， 那么不要犹豫， 这里绝对不会让你失望。"
      },
      {
        title: "兔子海滩 意大利兰佩杜萨岛",
        picUrl: "/images/seabeach2.jpg",
        link: "../article02/article02",
        content: "这里有炫目的白色悬崖，荧光碧蓝的海水。温度偏高，可能有人不会觉得这是最美的沙滩之一，但这里就是。因为这里是海龟和海豚的聚集地，所以动物爱好者们千万不要错过哦。"
      },
      {
        title: "格雷斯海湾 普罗维登西亚莱斯岛，特克斯和凯科斯群岛",
        picUrl: "/images/seabeach3.jpg",
        link: "../article03/article03",
        content: "你只要听着海滩的名字去感受这里的热闹。普洛佛岛一直以来以游客多而著名，那是因为这里的确有世界上最好的沙滩，也可以说是世界排名第三的最美沙滩。海岸线上，伸出的珊瑚礁为海生动物们提供了极好的栖息地，因此，这里时不时就会看到在沙滩上晒太阳的海生物。"
      },
      {
        title: "德阿让海滩 塞舌尔群岛拉格斯岛",
        picUrl: "/images/seabeach4.jpg",
        link: "../article04/article04",
        content: "位于塞舌尔的第三大岛屿，有着绸缎般的沙滩，加上白色和红粉色的沙子，成为世界上最适合拍照的沙滩。一片暗礁掩护着海水，使其保持平静，为潜水爱好者提供最佳潜水场所。"
      }
    ]
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