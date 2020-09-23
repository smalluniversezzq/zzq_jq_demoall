// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },


  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      console.log('点击我了')
      console.log(e.currentTarget.dataset)
      const index = e.currentTarget.dataset.index
      this.triggerEvent("itemChange",index)
      // console.log(index)
      // let tabs = this.data.tabs
      // tabs.forEach((v,i)=>{
      //   if(i === index){
      //     v.isActive = true
      //   }else{
      //     v.isActive = false
      //   }
      // })
      // console.log(tabs,'tabs')
      // this.setData({
      //   tabs
      // })
    }
  }
})
