// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [{
      id: 1,
      img: "/pages/images/image_01_06.jpg",
      price: "32",
      date: "2018-07-14",
      time: "12:29:12",
      howToDistribute: "商家"
    }, {
      id: 2,
        img: "/pages/images/image_01_01.jpg",
      price: "12",
      date: "2018-08-24",
      time: "12:29:12",
      howToDistribute: "商家"
    }
    // , {
    //   id: 2,
    //   img: "/pages/images/im01-02.jpg",
    //   price: "22",
    //   date: "2018-08-25",
    //   time: "12:29:12",
    //   howToDistribute: "商家"
    // }, {
    //   id: 3,
    //   img: "/pages/images/im01-03.jpg",
    //   price: "14",
    //   date: "2018-08-28",
    //   time: "12:29:12",
    //   howToDistribute: "商家"
    // }, 
    ]
  },
  goInfo: function(e) {
    console.log("--------------");
    var idx = parseInt(e.currentTarget.id);
    var img = this.data.orderList;
    console.log(img[idx].img);
    wx.navigateTo({
      url: '/pages/orderInfo/orderInfo'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})