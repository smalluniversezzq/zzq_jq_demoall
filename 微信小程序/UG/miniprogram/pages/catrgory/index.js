// pages/catrgory/index.js
import {request} from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    categorieList:"",
    currentIndex:0,
    Cates:[],
    scrollTop:0
  },
  onLoad: function (options) {
    let Cates = wx.getStorageSync("cates")
    console.log(Cates,'Cates')
    if(!Cates){
      console.log('没有数据')
      this.getCatrgoryFn()
    }else{
      console.log('有数据',Cates.time,Date.now() ,Date.now()-Cates.time)
      if((Date.now() - Cates.time) > 1000*10){
        console.log('数据超时了')
        this.getCatrgoryFn()
      }else{
        console.log('数据可以使用')
        this.setData({
          categorieList:Cates.data
        })
      }
    }
  },
    // 请求数据并缓存
    async getCatrgoryFn(){
      // request({url:"/categories"}).then(res=>{
      //   console.log('atrgory',res);
      //   this.setData({
      //     categorieList:res
      //   })
      //   wx.setStorageSync('cates', {time:Date.now(),data:res});
      // })
      const res = await request({url:"/categories"});
      console.log(res)
      this.setData({
        categorieList:res
      })
      wx.setStorageSync('cates', {time:Date.now(),data:res});
    },
    // 切换列表时回到顶部
    handleItemTap(e){
      console.log(e.target.dataset.index)
      let currentIndex = e.target.dataset.index
      this.setData({
        currentIndex,
        scrollTop:0
      })
    },

})