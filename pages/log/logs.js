var use = require("../../data/user.js")
const cailist = [];
Page({

  data: {

    jiage: "a",
    time: '12:00',
    cailist: cailist,

  },

  onLoad: function (options) {
    var ddtime;
    var that = this;
    wx.getStorage({
      key: 'daotime',
      success: function (res) {
        that.setData({
          ddtime: res.data,
        })
      }
    });

    var _this = this;
    wx.getStorage({
      key: 'beizhu',
      success: function (res) {
        _this.setData({
          beizhushow: res.data,
        })
      }
    })

    var test;
    var j = 0;
    for (let i = 0; i < 16; i++) {
      test = wx.getStorageSync(String(i))
      if (typeof (test) == "object") {
        this.data.cailist[j] = test;
        this.setData({
          cailist: this.data.cailist

        })
        j = j + 1;
      }
    }

    this.setData({
      dianjia: wx.getStorageSync('dianjia'),
      use: use

    })
  }
})
