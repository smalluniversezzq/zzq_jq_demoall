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
    request({url: "/home/swiperdata"}).then(res=>{
      console.log(res);
      this.setData({
        swiperDate:res
      })
    })
  },
  getCateFn(){
    request({url:"/home/catitems"}).then(res=>{
      console.log(res)
      this.setData({
        cateDate:res
      })
    })
  },
  getFloorFn(){
    request({url:"/home/floordata"}).then(res=>{
      console.log(res,'floor')
      this.setData({
        floorList:res
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
  