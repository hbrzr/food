var postData = require('../../utils/Recommend/recommend.js');
Page({
  data:{

  },
  onLoad:function(){
    this.setData({
      restaurant: postData.restaurantList
    })
  }
})