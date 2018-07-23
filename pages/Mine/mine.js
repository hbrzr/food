//在shop函数中，应补写代码，代码内容为：通过用户的openID来得到用户所绑定的商户，并将商户信息返回，以供下一页面调用。
var app = getApp()
Page({

  //页面的初始数据
  data: {
    //用户个人信息
    userInfo: {
      avatarUrl: "",//用户头像
      nickName: "",//用户昵称
    }
  },
  //点击添加地址事件
  add_address_fun: function () {
    wx.navigateTo({
      url: 'add_address/add_address',
    })
  },
  shop:function(e){
wx.navigateTo({
  url: '/pages/wode/wode'
})
  },
  //生命周期函数--监听页面加载 
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      withCredentials:true,
      success:function(res){
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      },
      fail:function(){
        wx.showModal({
          title:'警告',
          content:'尚未进行授权，请点击确认跳转到授权页面进行授权。',
          success(res){
            if(res.confirm){
              wx.navigateTo({
                url: '/tologin/tologin',
              })
            }
          }
        })
      }
    })

   
  },

  onReady: function () {

  },


  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {
  },
  onShareAppMessage: function () {

  }
})
