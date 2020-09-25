// pages/catrgory/index.js
import {request} from "../../request/index.js"
Page({
  data: {
    categorieList:"",
    currentIndex:0,
  },
  onLoad: function (options) {
    this.getCatrgoryFn()
  },
    getCatrgoryFn(){
      request({url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"}).then(res=>{
        console.log('atrgory',res.data.message);
        this.setData({
          categorieList:res.data.message
        })
      })
    },
    handleItemTap(e){
      console.log(e.target.dataset.index)
      let currentIndex = e.target.dataset.index
      this.setData({
        currentIndex
      })
    },

})