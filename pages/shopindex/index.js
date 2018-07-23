// pages/caiDan.js
var diansCai = require('../../data/dianCai.js')
const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

Page({ 
  data: {
    a: a,
    numprice: 0,              
  },
 
  onLoad: function(options) {
    var number=diansCai.dianCai.length;
    this.setData({
      dianCai: diansCai.dianCai,
      number:number     
    });        
  },

  delete:function(e){
    var id = e.currentTarget.dataset.id;
    var number = this.data.number;
    var dianCai = this.data.dianCai    
    for (let i = id; i < number - 1; i++) {
      dianCai[i] = dianCai[i + 1]
    }
    dianCai.length = number - 1;
    number = number - 1;
    this.setData({
      dianCai: dianCai,
      number: number
    })
  },

  tiaosc: function () {
    var ximgsrc;
    var xcainame;
    var xprice;
    var _this = this;
    ximgsrc = wx.getStorageSync("imageList");
    xcainame= wx.getStorageSync("xincm");
    xprice=wx.getStorageSync("xinjg");
    this.data.ximgsrc=ximgsrc;
    this.data.xcainame=xcainame;
    this.data.xprice=xprice;
    var newarray = [{
      imgsrc:this.data.ximgsrc,
      cainame:this.data.xcainame,
      price:this.data.xprice
    }];
    this.setData({
      dianCai: this.data.dianCai.concat(newarray)
    });
  },

  tiaocpbj:function(){
    wx.navigateTo({
      url: '/pages/cpbj/cpbj',
    })
  }  
})