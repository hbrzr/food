Page({
  data: {
    Durl: null
  },
  onLoad: function (options) {
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    });
    console.log(options)
    that.setData({
      Durl: options.Murl
    })
  },
})