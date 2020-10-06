import {request} from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    tabs:[
      {
        id:0,
        value:"综合",
        isActive:true
      },
      {
        id:1,
        value:"销量",
        isActive:false
      },
      {
        id:2,
        value:"价格",
        isActive:false
      },
    ],
    parameter:"",
    goods_list:"",
    total:"",


  },
  queryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10
  },
  //总页数
  totalPages:1,
  onLoad: function (options) {
    console.log(options)
    // this.parameter
      this.queryParams.cid=options.pic
    this.getGoodsSearchFn()
  },
  handChangetabs(e){
    const index = e.detail.index;
    let {tabs} = this.data;
    console.log(e,'handChangetabs',index)
    tabs.forEach((v,i)=>{
      i===index?v.isActive=true:v.isActive=false
    })
    console.log(tabs)
    this.setData({
      tabs
    })
  },
  async getGoodsSearchFn(){
    console.log(this.queryParams)
    const res = await request({url:"/goods/search",data:this.queryParams})
    const total = res.total;
    this.totalPages = Math.ceil(total/this.queryParams.pagesize);
    // const totalPages = Math.ceil(total/this.queryParams.pagesize);
    console.log(this.totalPages,'totalPages','total',total,this.queryParams.pagesize);
    console.log(res)
    this.setData({
      goods_list:[...this.data.goods_list,...res.goods]
    })
    wx.stopPullDownRefresh()
  },
  methods:{
 
  },
  onReachBottom(){
    console.log('触底了',this.queryParams.pagenum,this.totalPages)
    if(this.queryParams.pagenum >= this.totalPages){
      wx.showToast({title:'没有数据'})
    }else{
      this.queryParams.pagenum++;
      this.getGoodsSearchFn()
    }
  },
  onPullDownRefresh(){
    console.log('下拉')
    this.setData({
      goods_list:[]
    })
    this.queryParams.pagenum = 1;
    this.getGoodsSearchFn()
  }
})