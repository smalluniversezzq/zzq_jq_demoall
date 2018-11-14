//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    list: "sdasa",
    array: [
      "你好呀",
      "我很好"
    ],
    shows: false,
    numbers: 0
  },
  onLoad: function() {

  },
  leiJia: function() {
    var num = this.data.numbers;
    num++;
    this.setData({
      numbers: num
    })
  },
  jianjian : function(){
    var nums = this.data.numbers;
    nums --;
    this.setData({
      numbers:nums
    })
  }
})