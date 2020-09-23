// pages/demo16/demo16.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruits:[
      {
        "name":"苹果",
        "value":"apple",
        
      },
      { 
        "name":"梨子",
        "value":"Pear",
      },
      { 
        "name":"香蕉",
        "value":"banana",
      },
    ],
    getfruits:"",
    arr:[1,2,3,4]
  },
  handleChange(e){
    console.log(e.detail.value);
    this.setData({
      getfruits:e.detail.value.join(",")
    })
  },
})