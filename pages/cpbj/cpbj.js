// pages/cpbj/cpbj.js
var sourceType = [['camera'], ['album'], ['camera', 'album']]
var sizeType = [['compressed'], ['original'], ['compressed', 'original']]

Page({
  data: {
    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 0,
    count: [1]  
  },

  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },

  sizeTypeChange: function (e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    })
  },

  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value
    })
  },

  chooseImage: function (e) {
    var that = this
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success: function (res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })       
      }
    })   
  },

  previewImage: function (e) {
    var current = e.target.dataset.src

    wx.previewImage({
      current: current,
      urls: this.data.imageList
    })
  },

  onLoad: function (options) {
  
  },

  huicp: function () {

    wx.showToast({
      title: '添加成功！',
      icon: 'success',
      duration: 2000
    })


    try {
      wx.setStorageSync('xincm', this.data.xincm)
    } catch (e) {
    }

    try {
      wx.setStorageSync('xinjg', this.data.xinjg)
    } catch (e) {
    }

    try {
      wx.setStorageSync('imageList', this.data.imageList)
    } catch (e) {
    }

    var pages = getCurrentPages(); // 当前页面
    var beforePage = pages[pages.length - 2]; // 前一个页面
    wx.navigateBack({ 
      changed: true,
      success: function () {
        beforePage.tiaosc(); // 执行前一个页面的onLoad方法
      }
    });
  }, 

  shurucm: function (e) {
    console.log(e.detail.value)
    this.setData({ xincm: e.detail.value })    
  },

  shurujg: function (e) {
    console.log(e.detail.value)
    this.setData({ xinjg: e.detail.value })   
  }
})