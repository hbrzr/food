var postData = require('../../../../utils/Recommend/recommend.js');
Page({
  data: {
    restaurantname: null
  },
  onLoad: function (options) {
    var that = this;
    console.log(options)
    that.setData({
      restaurantname: options.restaurantname,
      restaurantlist: postData.restaurantList
    })
  },
})