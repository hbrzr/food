
Page({
  data: {

  },

  onLoad: function () {
  
  },

  huiwode: function () {
    try {
      wx.setStorageSync('xinjj', this.data.xinjj)
    } catch (e) {
    }

    try {
      wx.setStorageSync('xindz', this.data.xindz)
    } catch (e) {
    }

    try {
      wx.setStorageSync('xingg', this.data.xingg)
    } catch (e) {
    }

    try {
      wx.setStorageSync('xindh', this.data.xindh)
    } catch (e) {
    }

    try {
      wx.setStorageSync('xinsj', this.data.xinsj)
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
  },

  shurujj: function (e) {
    console.log(e.detail.value)
    this.setData({xinjj: e.detail.value })
  },

  shurudz: function (e) {
    console.log(e.detail.value)
    this.setData({xindz: e.detail.value })
  },

  shurudh: function (e) {
    console.log(e.detail.value)
    this.setData({xindh: e.detail.value })
  },

  shurugg: function (e) {
    console.log(e.detail.value)
    this.setData({xingg: e.detail.value })
  },

  shurusj: function (e) {
    console.log(e.detail.value)
    this.setData({xinsj: e.detail.value })
  }
 
})