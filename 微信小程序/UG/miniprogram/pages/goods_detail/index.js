// pages/goos_detail/index.js
import {request} from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:"",
    queryParams:{
      cid
    }
  },
  onLoad: function (options) {
    console.log(options,'options')
    this.queryParams.cid = options.pid
    // this.getGoodsDetail(goods_id)
  },
  // 获取商品详情数据
    getGoodsDetail(goods_id){
      const res =await request({url:"/goods/detail",data:{goods_is}});
      console.log(res)
    }
})