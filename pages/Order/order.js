//order为未完成订单的订单信息，应该从服务器获取 应该传递的是waitdone
//orderdone为已完成订单的信息，应该从服务器获取 应该传递的是done
//请查看cancel函数的注释
var order = require('../../data/waitdone.js');
var orderdone = require('../../data/done.js');




  Page({
    data:{
      ycprice:"111",
      winWidth: 0,
      winHeight: 0,
      // tab切换
      currentTab: 0,
    },
    onLoad: function () {
      var Price=wx.getStorageSync("dianjia")
      var price=Price[2]
      var ddtime
      var ycprice
      var that = this
      that.setData({
        orderlist: order.waitdone,
        orderlistDone:orderdone.done,
        price:price
      });
      
      wx.getStorage({
        key: 'daotime',
        success: function (res) {
          that.setData({
            ddtime: res.data,
          })
        }
      });

      wx.getStorage({
        key: 'jiage',
        success: function (res) {
          that.setData({
            ycprice: res.data,
          })
        }
      });

     
     
      /**
       * 获取系统信息
       */
      wx.getSystemInfo({
          success: function (res) {
          that.setData({
            winWidth: res.windowWidth,
            winHeight: res.windowHeight,
          });
        }

      });
    },
//当用户点击cancel时应该向服务器传递删除数据的命令，服务器应该删除该订单信息，并向商家所在的微信用户发送服务通知
    cancel: function (e) {
wx.setStorageSync("orderid", e.currentTarget.dataset.order)
    },
    /**
       * 滑动切换tab
       */
    bindChange: function (e) {

      var that = this;
      that.setData({ currentTab: e.detail.current });

    },
    /**
     * 点击tab切换
     */
    swichNav: function (e) {

      var that = this;

      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
    }

  })
