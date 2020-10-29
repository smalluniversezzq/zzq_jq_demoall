import { request } from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  async handleGetUserInfo(e){
    console.log(e)
    const {encryptedData , rowData , iv , signature } = e.detail;
    const loginParams = {encryptedData , rowData , iv , signature}
    console.log(encryptedData , rowData , iv , signature )
    wx.login({
      timeout:10000,
      success:(result)=>{
        console.log(result)
        const { code } = result;
      }
    })
    const res = await request({url:"/users/wxlogin",data:loginParams,method:"post"})
    console.log(res)
  },
})