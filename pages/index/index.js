
//应该从服务器中获取商户列表信息
var postData = require('../../data/namedata.js');
Page({
  data: {//data在onload执行之后执行

  },

 diancan:function(e){
     wx.navigateTo({
       url: '/pages/caiDan/caiDan',
     })
   
       wx.setStorageSync("shopid", e.currentTarget.dataset.shopid)
 } ,//应该在此处将shopid传给服务器，然后由服务器下发店家具体的菜单数据文件，这样下一个页面才可以获取到，该传递的文件是diancai&namedata
  onLoad: function () {
    this.setData({//获取数据成功后的数据绑定
      restaurant: postData.name,
    });
  }
})
