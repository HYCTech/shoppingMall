// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderNumber:"4823 6884 0115 5693 9",
    mobile:"134566543456",
    address:"福建省福州市仓山区金闽小区9号楼101室",
    priceSum:22,
    orderTime:"2018-8-31 09:01:20",
    orderList: [{
        id:1,
        name: "娃娃菜",
        src: "/pages/images/im01-01.jpg",
        sales: 22,
        rating: 3,
        price: 1,
        numb: 1
      },
      {
        id:2,
        name: "秋葵",
        src: "/pages/images/im01-02.jpg",
        sales: 22,
        rating: 3,
        price: 10,
        numb: 1
      },
      {
        id:3,
        name: "苦瓜",
        src: "/pages/images/im01-03.jpg",
        sales: 22,
        rating: 3,
        price: 11,
        numb: 1
      }
    ]
  },
  goInfo: function(e) {
    console.log("--------------");
    var idx = parseInt(e.currentTarget.id);
    var img = this.data.orderList;
    console.log(img[idx].img);
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