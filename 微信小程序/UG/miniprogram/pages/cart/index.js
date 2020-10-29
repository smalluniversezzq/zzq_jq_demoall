// pages/cart/index.js
Page({
  data: {
    address:{},
    cartInfo:[],
    allChecked:false,
    totalPrice:"",
    totalNum:""
  },
  onShow(){
    let address = wx.getStorageSync("address");
    let cartInfo = wx.getStorageSync("cart")
    address?address.all = address.provinceName + address.cityName +address.countyName +address.detailInfo:""
    const allChecked = cartInfo.length?cartInfo.every(v=>v.check):false
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
      allChecked,
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
          console.log(2)
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
  // 删除地址
  delAddress(){
    console.log("remove")
    wx.removeStorageSync("address")
  },
  handleTiemChange(e){
    const goods_id = e.currentTarget.dataset.id
    let cart = this.data.cartInfo;
    console.log(goods_id,this.data,cart)
    let index = cart.findIndex(v => v.goods_id === goods_id)
    console.log(index)
    cart[index].check = !cart[index].check
    this.setCart(cart)
  },
  setCart(cartInfo){
    const allChecked = cartInfo.length?cartInfo.every(v=>v.check):false
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
      allChecked,
      totalNum,
      totalPrice
    })
    wx.setStorageSync("cart",cartInfo)

  },
  handleAllChangle(){
    console.log("all")
   let cart = this.data.cartInfo
   let checkedAll = this.data.allChecked
   console.log(cart,checkedAll)
   cart.forEach((item,index)=>{
     item.check = !checkedAll
   })
   console.log(cart)
   this.setCart(cart)
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
  //购物车结算
  settlement(){
    const address = wx.getStorageSync("address");
    const cart = wx.getStorageSync("cart");

    if(!address){
      this.showToast("请填写收货地址")
    }else if(!cart.length>0){
      this.showToast("购物车里没有结算的商品")
    }else{ 
      wx.navigateTo({
        url: '/pages/pay/index',
      })
    }

  },
  // 封装 showToast
  showToast(content){
    console.log(content)
    wx.showToast({
      title: content,
      icon: 'none',
      duration: 2000

    }) 
  }
})