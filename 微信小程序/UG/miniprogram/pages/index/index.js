//Page Object
import {request} from "../../request/index.js"
Page({
  data: {
    swiperDate:"",
    cateDate:"", 
    floorList:"", 
  },
  getSwiperFn(){
    console.log('执行请求前')
    request({url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"}).then(res=>{
      console.log(res);
      this.setData({
        swiperDate:res.data.message
      })
    })
  },
  getCateFn(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"}).then(res=>{
      console.log(res)
      this.setData({
        cateDate:res.data.message
      })
    })
  },
  getFloorFn(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"}).then(res=>{
      console.log(res,'floor')
      this.setData({
        floorList:res.data.message
      })
    })
  },
  //options(Object)
  onLoad:function(options) {
    console.log('请求发送前')
    this.getSwiperFn()
    this.getCateFn()
    this.getFloorFn()
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
});
  