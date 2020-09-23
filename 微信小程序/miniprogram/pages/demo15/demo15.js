// pages/demo15/demo15.js
Page({

  data: {
    gender:""
  },
  handleChange (e){
    console.log(e.detail.value)
    this.setData({
      gender:e.detail.value
    })

  },
})