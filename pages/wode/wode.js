// pages/wode/wode.js
const app = getApp()
Page({
  data: {
    sjming:'全聚德王府井店',
    jianjie: '这是公司的简介',
    dizhi: '这是公司的地址',
    gonggao: '这是公司的公告',
    dianhua: '这是公司的电话',
    shijian: '这是公司的营业时间'
  },

  tiaojj: function () {
    wx.navigateTo({
      url: '/pages/xinjj/xinjj',
    })
  },

  tiaodz: function () {
    wx.navigateTo({
      url: '/pages/xindz/xindz',
    })
  },

  tiaodh: function () {
    wx.navigateTo({
      url: '/pages/xindh/xindh',
    })
  },

  tiaogg: function () {
    wx.navigateTo({
      url: '/pages/xingg/xingg',
    })
  },

  tiaosj: function () {
    wx.navigateTo({
      url: '/pages/xinsj/xinsj',
    })
  },

  onLoad: function (options) {
    var _this = this;
    wx.getStorage({
      key: 'xinjj',
      success: function (res) {
        _this.setData({
          jianjie: res.data,
        })
      }   
    })

    wx.getStorage({
      key: 'xindz',
      success: function (res) {
        _this.setData({
          dizhi: res.data,
        })
      }
    })

    wx.getStorage({
      key: 'xingg',
      success: function (res) {
         _this.setData({
            gonggao: res.data,
        })
      }
    })

    wx.getStorage({
      key: 'xindh',
      success: function (res) {
        _this.setData({
            dianhua: res.data,
        })
      }
    })

    wx.getStorage({
      key: 'xinsj',
      success: function (res) {
        _this.setData({
          shijian: res.data,
        })
      }
    })
  },

  tiaowdbj: function () {
    wx.navigateTo({
      url: '/pages/sjbj/sjbj',
    })
  },

  tiaowdcp: function () {
    wx.navigateTo({
      url: '/pages/shopindex/index',
    })
  },

  tiaowddd: function () {
    wx.navigateTo({
      url: '/pages/log/logs',
    })
  }

})
