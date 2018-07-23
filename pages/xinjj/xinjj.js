// pages/xinjj/xinjj.js
Page({
  data: {
  
  },

  onLoad: function (options) {
  
  },

  shurujj: function (e) {
    console.log(e.detail.value)
    this.setData({ xinjj: e.detail.value })
  },

  queding: function () {
    try {
      wx.setStorageSync('xinjj', this.data.xinjj)
    } catch (e) {
    }

    var pages = getCurrentPages(); // 当前页面
    var beforePage = pages[pages.length - 2]; // 前一个页面
    wx.navigateBack({
      changed: true,
      success: function () {
        beforePage.onLoad(); // 执行前一个页面的onLoad方法
      }
    })
  }

})