// 应该加载从服务器获取的信息，包括菜单的信息，商家的静态信息
var diansCai = require('../../data/dianCai.js')
var namedatas = require('../../data/namedata.js')
Page({

  data: {
    numprice: 0
  },
  addnumber: function(event) {
    var idx = event.currentTarget.dataset.idx;
    var zong = event.currentTarget.dataset.zong;
    var price = event.currentTarget.dataset.price;
    var cainame = event.currentTarget.dataset.cainame;
    var imgsrc = event.currentTarget.dataset.imgsrc;
    var test = wx.getStorageSync(String(idx));
    for (let i = 0; i < zong; i++) {
      if (i == idx) {
        this.data.a[i] = this.data.a[i] + 1;
      }
    }
    this.data.numprice = this.data.numprice + price;
    this.setData({
      num: this.data.a,
      numprice: this.data.numprice
    })
    if (typeof(test) == "object") {

      test[3] = test[3] + 1;
      wx.setStorageSync(String(idx), test)
    } else {
      wx.setStorageSync(String(idx), [price, cainame, imgsrc, 1])
    }
  },
  deletenumber: function(event) {
    var idx = event.currentTarget.dataset.idx;
    var zong = event.currentTarget.dataset.zong;
    var price = event.currentTarget.dataset.price;
    var test = wx.getStorageSync(String(idx));
    this.setData({
      num: this.data.a,
      numprice: this.data.numprice
    })
    if ((this.data.a[idx]) > 0) {
      this.data.numprice = this.data.numprice - price;
    }
    for (let i = 0; i < zong; i++) {
      if (i == idx && (this.data.a[i] > 0)) {
        this.data.a[i] = this.data.a[i] - 1;
        if(typeof(test)=="object")
        {
          if((test[3]-1)>0)
          {test[3]=test[3]-1;
          wx.setStorageSync(String(idx), test)
          }
          else{
            wx.removeStorageSync(String(idx));
          }
        }
       
        
      }
    }
    this.setData({
      num: this.data.a,
      numprice: this.data.numprice
    })
  },

  tiJiao: function(e) {
    var a;
    var style=false;
    var cainumber=this.data.cainumber;
    for(let i=0;i<cainumber;i++)
    {
      a=wx.getStorageSync(String(i));
      if(typeof(a)=="object")
      {
        style=true;
      }
    }


if(style==true){
    wx.navigateTo({
      url: '/pages/pay/pay'
    })
    wx.setStorageSync('dianjia', [this.data.name[this.data.shopid].nameimgsrc,
      this.data.name[this.data.shopid].shopname,this.data.numprice
    ])}
  },
  onLoad: function(options) {
    var cainumber = diansCai.dianCai.length;
    var num=[];
    var a=[];
    var shop=wx.getStorageSync("shopid")
    for(let i=0;i<cainumber;i++)
    {
      num[i]=0;
      a[i]=0;
    }
    this.data.cainumber = cainumber;
    this.setData({
      dianCai: diansCai.dianCai,
      name: namedatas.name,
      num: num,
      shopid:shop,
      a:a
    });
    for(let i=0;i<cainumber;i++)
    {
      wx.removeStorageSync(String(i));
    }
  },

})