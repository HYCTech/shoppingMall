// pages/pay/pay.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: [],
    myAddress: "福州市鼓楼区天骐路8号",
    deliveryTime: "16:23",
    totalPrice: ""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    try {
      //获取上一个页面url穿参数据
      var totalP = options.totalPrice;
      console.log(totalP);
      //获取产品存储数据
      var strJson = wx.getStorageSync('strJson');
      console.log(strJson);
 
      this.setData({
        products: strJson,
        totalPrice: totalP
      });

      // var totalP=0;
      // //遍历数组
      // for (var i = 0, len = strJson.length; i < len; i++) {
      //   var numb = strJson[i].numb;//遍历输出
      //   var price = strJson[i].price;//遍历输出
 
      //   totalP = totalP+(numb*price);
      // }
      // console.log(totalP);//总价格

      

    } catch (e) {
      // Do something when catch error
    }

  },
  //跳转编辑地址页面
  gotoaddre: function (event) {

    // 关闭当前页面，跳转到应用内的某个页面。
    wx.navigateTo({
      url: '/pages/location/location',
    })
  },
  //支付
  saveAddress: function(event){
    wx.reLaunch({
      url: '/pages/start/start'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
    //获取用户名字
    var userName = wx.getStorageSync('userName');
    //获取用户电话
    var userMobile = wx.getStorageSync('userMobile');
    //获取用户地址
    var address = wx.getStorageSync('address');
    //获取用户地址
    var fullRegion = wx.getStorageSync('fullRegion');

    console.log("==>userName:" + userName + "==>userMobile:" + userMobile + "==>address:" + address + "==>fullRegion:" + fullRegion);
    var address = fullRegion + address;
    if(address.length>0){
      this.setData({
        myAddress: address
      });
    }
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage");
  }
})