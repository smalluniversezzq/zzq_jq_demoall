// pages/goods_detail/index.js
import {request} from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    goodsDetail:{}
  },
  goodsCid:{
    goods_id:""
  },
  GoodsInfo:{},
  onLoad: function (options) {
    console.log(options)
    this.goodsCid.goods_id = options.cid
    this.goodsDetailFn()
  },
  async goodsDetailFn(){
    console.log("执行请求")
    const goodsDetail = await request({url:"/goods/detail",data:this.goodsCid})
    this.GoodsInfo = goodsDetail;
    console.log(goodsDetail)
    this.setData({
      goodsDetail:{
        goods_name:goodsDetail.goods_name,
        goods_price:goodsDetail.goods_price,
        goods_introduce:goodsDetail.goods_introduce.replace(/\.webp/g,".jpg"),
        pics:goodsDetail.pics,
      }
    })
    console.log(this.goodsDetail)
  },
  handlePicChange(e){
    const urls = this.GoodsInfo.pics.map(v=>v.pics_mid);
    console.log(urls,'urls')
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current:current,
      urls:urls
    })
  },
  addCart(){
    let cart= wx.getStorageSync("cart")||[];
    let index = cart.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id)||[];
    
    console.log(index)
    if(index===-1){
      this.GoodsInfo.num = 1
      this.GoodsInfo.check = true
      cart.push(this.GoodsInfo)
    }else{
      cart[index].num++
    }
    wx.setStorageSync("cart",cart)
    wx.showToast({
      title: '加入购物车成功',
      mask:true
    })
  },
})