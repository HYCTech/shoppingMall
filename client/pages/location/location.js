// directory.js
var address = require('../../utils/citys.js')
var animation
Page({

  /**
   * 页面的初始数据
   * 当前    provinces:所有省份
   * citys选择省对应的所有市,
   * areas选择市对应的所有区
   * provinces：当前被选中的省
   * city当前被选中的市
   * areas当前被选中的区
   */
  data: {
    address: {
      id: 0,
      province_id: 0,
      city_id: 0,
      district_id: 0,
      address: '',
      full_region: '',
      name: '',
      mobile: '',
      is_default: 0
    },
    menuType: 0,
    begin: null,
    status: 1,
    end: null,
    isVisible: false,
    animationData: {},
    animationAddressMenu: {},
    addressMenuIsShow: false,
    value: [0, 0, 0],
    provinces: [],
    citys: [],
    areas: [],
    province: '',
    city: '',
    area: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //获取用户名字
    var userName = wx.getStorageSync('userName');
    //获取用户电话
    var userMobile = wx.getStorageSync('userMobile');
    //获取用户地址
    var myaddress = wx.getStorageSync('address');
    //获取用户地址
    var fullRegion = wx.getStorageSync('fullRegion');

    console.log("==>userName:" + userName + "==>userMobile:" + userMobile + "==>address:" + myaddress);
     
    //  this.data.address.name = userName;
    //  this.data.address.full_region = myaddress;
    //  this.data.address.address = fullRegion;
      this.setData({
        address: { 
          address: myaddress,
          full_region: fullRegion,
          name: userName,
          mobile: userMobile 
        }
      });


    // 初始化动画变量
    var animation = wx.createAnimation({
      duration: 500,
      transformOrigin: "50% 50%",
      timingFunction: 'ease',
    })
    this.animation = animation;
    // 默认联动显示北京
    var id = address.provinces[0].id
    this.setData({
      provinces: address.provinces,
      citys: address.citys[id],
      areas: address.areas[address.citys[id][0].id],
    })
    console.log(this.data)
  },
  bindinputMobile(event) {
    let address = this.data.address;
    address.mobile = event.detail.value;
    this.setData({
      address: address
    });
  },
  bindinputName(event) {
    let address = this.data.address;
    address.name = event.detail.value;
    this.setData({
      address: address
    });
  },
  bindinputAddress(event) {
    let address = this.data.address;
    address.address = event.detail.value;
    this.setData({
      address: address
    });
  },
  // 执行动画
  startAnimation: function(isShow, offset) {
    var that = this
    var offsetTem
    if (offset == 0) {
      offsetTem = offset
    } else {
      offsetTem = offset + 'rpx'
    }
    this.animation.translateY(offset).step()
    this.setData({
      animationData: this.animation.export(),
      isVisible: isShow
    })
    console.log(that.data)
  },
  //取消
  cancelAddress() {
    // wx.navigateTo({
    //   url: '/pages/pay/pay',
    // })
    //关闭当前页面，返回上一页面或多级页面
    wx.navigateBack({
      delta: 1
    })
  },
  //保存
  saveAddress: function() {

    let address = this.data.address;

    if (address.name == '') {
      this.showErrorToast('请输入姓名');
      return false;
    }

    if (address.mobile == '') {
      this.showErrorToast('请输入手机号码');
      return false;
    }


    if (address.full_region == '') {
      this.showErrorToast('请输入省市区');
      return false;
    }

    if (address.address == '') {
      this.showErrorToast('请输入详细地址');
      return false;
    }

    //保存本地数据
    wx.setStorageSync("userName", address.name);
    wx.setStorageSync("userMobile", address.mobile);
    wx.setStorageSync("fullRegion", address.full_region  );
    wx.setStorageSync("address",   address.address);
    //关闭当前页面，返回上一页面或多级页面
    wx.navigateBack({
      delta: 1
    });

    // let that = this;
    // util.request(api.AddressSave, {
    //   id: address.id,
    //   name: address.name,
    //   mobile: address.mobile,
    //   province_id: address.province_id,
    //   city_id: address.city_id,
    //   district_id: address.district_id,
    //   address: address.address,
    //   is_default: address.is_default,
    // }, 'POST').then(function (res) {
    //   if (res.errno === 0) {
    //     wx.navigateTo({
    //       url: '/pages/ucenter/address/address',
    //     })
    //   }
    // });

  },
  showErrorToast: function(msg) {
    wx.showToast({
      title: msg,
      image: '../images/my.png'
    })
  },
  goAddress: function() {
    wx.navigateTo({
      url: '',
    })
  },
  sureDateTap: function() {
    this.data.pageNo = 1
    this.startAnimation(false, -200)
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

  },
  // 点击所在地区弹出选择框
  selectDistrict: function(e) {
    var that = this
    if (that.data.addressMenuIsShow) {
      return
    }
    that.startAddressAnimation(true)
  },
  // 执行动画
  startAddressAnimation: function(isShow) {
    console.log(isShow)
    var that = this
    if (isShow) {
      that.animation.translateY(0 + 'vh').step()
    } else {
      that.animation.translateY(40 + 'vh').step()
    }
    that.setData({
      animationAddressMenu: that.animation.export(),
      addressMenuIsShow: isShow,
    })
  },
  // 点击地区选择取消按钮
  cityCancel: function(e) {
    this.startAddressAnimation(false)
  },
  // 点击地区选择确定按钮
  citySure: function(e) {
    var that = this
    var city = that.data.city
    var value = that.data.value
    that.startAddressAnimation(false)


    let address = this.data.address;



    // 将选择的城市信息显示到输入框
    var areaInfo = that.data.provinces[value[0]].name + that.data.citys[value[1]].name +  that.data.areas[value[2]].name

    address.full_region = areaInfo;
    that.setData({
      areaInfo: areaInfo,
      address: address
    })
  },
  hideCitySelected: function(e) {
    console.log(e)
    this.startAddressAnimation(false)
  },
  // 处理省市县联动逻辑
  cityChange: function(e) {
    console.log(e)
    var value = e.detail.value
    var provinces = this.data.provinces
    var citys = this.data.citys
    var areas = this.data.areas
    var provinceNum = value[0]
    var cityNum = value[1]
    var countyNum = value[2]
    if (this.data.value[0] != provinceNum) {
      var id = provinces[provinceNum].id
      this.setData({
        value: [provinceNum, 0, 0],
        citys: address.citys[id],
        areas: address.areas[address.citys[id][0].id],
      })
    } else if (this.data.value[1] != cityNum) {
      var id = citys[cityNum].id
      this.setData({
        value: [provinceNum, cityNum, 0],
        areas: address.areas[citys[cityNum].id],
      })
    } else {
      this.setData({
        value: [provinceNum, cityNum, countyNum]
      })
    }
    console.log(this.data)
  },

})