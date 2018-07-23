// pages/payDone/payDone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },


  
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },


  list:function(e){
    wx.switchTab({
      url: '../Order/order',
    })
  }



})