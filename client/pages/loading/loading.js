// pages/loading/loading.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 3, //初始时间
    interval: "", //定时器
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    height: "0px"
  },

  /**
   * 获取用户信息接口后的处理逻辑
   */
  getUserInfo: function(e) {
    var that = this;
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

    // 将获取的用户信息赋值给全局 userInfo 变量，再跳回之前页
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      that.clearTimeInterval(that);
      wx.reLaunch({
        url: '/pages/start/start'
      })
    }
  },
  /**
   * 初始化数据
   */
  init: function(that) {
    var time = 3;
    var interval = ""
    that.clearTimeInterval(that)
    that.setData({
      time: time,
      interval: interval,
    })
  },
  /**
   * 清除interval
   * @param that
   */
  clearTimeInterval: function(that) {
    var interval = that.data.interval;
    clearInterval(interval)
  },
  /**
   * 重新倒计时
   */
  restartTap: function() {
    var that = this;
    that.init(that);
    console.log("倒计时重新开始")
    that.startTap()
  },
  /**
   * 暂停倒计时
   */
  stopTap: function() {
    var that = this;
    console.log("倒计时暂停")
    that.clearTimeInterval(that)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var h = wx.getSystemInfoSync().windowHeight;//屏幕高
    that.setData({
      height: h
    })
    var time = that.data.time;
    console.log("倒计时开始"   )

    //定时调用
    var interval = setInterval(function() {
      console.log("倒计时============")
      time--;
      that.setData({
        time: time,
      })

      if (time == 0) {
        that.clearTimeInterval(that);
    
        wx.reLaunch({
          url:'/pages/start/start'
        })

      }
    }, 1000);
    
    that.setData({
      interval: interval 
    })
    // 在没有 open-type=getUserInfo 版本的兼容处理
    if (!this.data.canIUse) {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
        }
      })
    }
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
    var that = this;
    that.clearTimeInterval(that)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    var that = this;
    that.clearTimeInterval(that)
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