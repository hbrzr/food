
Page({
  data: {
  
  },

  onLoad: function (options) {
  
  },

  shurudz: function (e) {
    console.log(e.detail.value)
    this.setData({ xindz: e.detail.value })
  },

  queding: function () {
    try {
      wx.setStorageSync('xindz', this.data.xindz)
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