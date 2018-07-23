
//在该页面的确认提交函数处应该发起网络请求来上传数据，数据都在缓存中。应该包括，key为相应数字的所点菜品，key为shopid的的商户标识，key为time的到店时间，和key为beizhu的用户备注。
var use=require("../../data/user.js")
const cailist = [];
Page({

  data: {
    jiage:"a",
    time: '12:00',
    cailist: cailist,
    
  },

  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value,
      daotime: e.detail.value
    })
  },

  

  bindTextAreaBlur: function (e) {  
    console.log(e.detail.value)
    this.setData({ beizhu: e.detail.value })
  },

wxpay:function(e){

  try {
    wx.setStorageSync('daotime', this.data.daotime)
  } catch (e) {
  }
  try {
    wx.setStorageSync('jiage', this.data.numprice)
  } catch (e) {
  }
  try {
    wx.setStorageSync('beizhu', this.data.beizhu)
  } catch (e) {
  }

 

  wx.navigateTo({
    url: '/pages/payDone/payDone',
  })
},
  onLoad: function(options) {
    var test;
    var j = 0;
    for (let i = 0; i < 16; i++) {
      test = wx.getStorageSync(String(i))
      if (typeof(test) == "object") {
        this.data.cailist[j] = test;
        this.setData({
          cailist: this.data.cailist

        })
        j = j + 1;
      }
    }

    this.setData({
      dianjia: wx.getStorageSync('dianjia'),
      use:use

    })

  }
})







