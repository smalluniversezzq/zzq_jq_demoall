// pages/cart/index.js
Page({
  data: {
    address:{},
    cartInfo:[],
    totalPrice:"",
    totalNum:""
  },
  onShow(){
    let address = wx.getStorageSync("address");
    let cartInfo = wx.getStorageSync("cart")
    address?address.all = address.provinceName + address.cityName +address.countyName +address.detailInfo:""
    cartInfo = cartInfo.filter(v=>v.check);
    let totalPrice = 0
    let totalNum = 0
    cartInfo.forEach(v=>{
      if(v.check){
        totalPrice += v.num*v.goods_price;
        totalNum += v.num;
      }
    })
    this.setData({
      address,
      cartInfo,
      totalNum,
      totalPrice
    })
    console.log(address,'addressInfo',this.data.address)
  },
  handleChooseAddress(){
    console.log("handleChooseAddress")
    wx.getSetting({
      success:(result)=>{
        console.log(result)
        let scopedAddress = result.authSetting["scope.address"];
        if(scopedAddress===true||scopedAddress===undefined){
          console.log(1)
          wx.chooseAddress({
            success:(chooseAddress)=>{
              console.log("获取信息",chooseAddress)
              wx.setStorageSync("address",chooseAddress)
            },
            fail:(err)=>{
              console.log(err)
            }
          })
        }else{
          wx.openSetting({
            success:(resultOpenSetting)=>{
              wx.chooseAddress({
                success: (resultchooseAddress) => {
                  console.log(resultchooseAddress,"resultchooseAddress")
                },
              })
            }
          })
        }
      }
    })
  },
  setCart(cartInfo){
    let totalPrice = 0
    let totalNum = 0
    cartInfo.forEach(v=>{
      if(v.check){
        totalPrice += v.num*v.goods_price;
        totalNum += v.num;
      }
    })
    this.setData({
      cartInfo,
      totalNum,
      totalPrice
    })
    wx.setStorageSync("cart",cartInfo)
  },
  // 商品数量编辑
  handleTiemNumEdit(e){
    let id = e.currentTarget.dataset.id
    let operation = e.currentTarget.dataset.operation
    let cart = this.data.cartInfo
    const index = cart.findIndex(v => v.goods_id===id)
    if(cart[index].num===1 && operation === -1){
      wx.showModal({
        title: '提示',
        content: `您是否要删除${cart[index].goods_name}？`,
        success:(res)=>{
          if(res.confirm){
            cart.splice(index,1)
            this.setCart(cart)
          }else if(res.cancel){
            console.log("取消删除")
          }
        } 
      })
    }else{
      cart[index].num += operation
    }
    this.setCart(cart)
    console.log(id,operation)
  },

  // 封装 showToast
  showToast(content){
    console.log(content)
    wx.showToast({
      title: content,
      icon: 'none',
      duration: 2000
    }) 
  },
  // 支付
  bindOrderPay(){
    let token = wx.getStorageSync("token");
    if(!token){
      wx.navigateTo({
        url: '/pages/auth/index',
      })
      return 
    }
    console.log("已经获取到token")
  },
})