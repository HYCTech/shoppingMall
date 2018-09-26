//index.js
//获取应用实例
const app = getApp();
var util = require('../../utils/util.js');
var product = new Map(); //产品
var productStr = '';


Page({
  data: {
    //menu: [],
    menu: [{
        "typeName": "夹 子",
        "menuContent": [{
            "name": "大夹子",
            "src": "/pages/images/image_01_01.jpg",
            "sales": 22,
            "rating": 3,
            "price": 11,
            "numb": 0
          },
          {
            "name": "小夹子",
            "src": "/pages/images/image_02_01.jpg",
            "sales": 22,
            "rating": 3,
            "price": 5,
            "numb": 0
          }, {
            "name": "聂夹子",
            "src": "/pages/images/image_03_01.jpg",
            "sales": 22,
            "rating": 3,
            "price": 8,
            "numb": 0
          }, {
            "name": "书夹子",
            "src": "/pages/images/image_04_01.jpg",
            "sales": 22,
            "rating": 3,
            "price": 12,
            "numb": 0
          }
        ]
      }, {
        "typeName": "本子",
        "menuContent": [{
          "name": "红本子",
          "src": "/pages/images/image_01_06.jpg",
          "sales": 22,
          "rating": 3,
          "price": 14,
          "numb": 0
        }, {
          "name": "日记本",
          "src": "/pages/images/image_02_06.jpg",
          "sales": 22,
          "rating": 3,
          "price": 26,
          "numb": 0
        }, {
          "name": "工作本",
          "src": "/pages/images/image_03_06.jpg",
          "sales": 22,
          "rating": 3,
          "price": 38,
          "numb": 0
        }]
      },
      {
        "typeName": "铅笔",
        "menuContent": [{
          "name": "铅笔",
          "src": "/pages/images/image_01_03.jpg",
          "sales": 22,
          "rating": 3,
          "price": 12,
          "numb": 0
        }]
      },

      {
        "typeName": "回形针",
        "menuContent": [{
          "name": "回形针",
          "src": "/pages/images/image_01_04.jpg",
          "sales": 22,
          "rating": 3,
          "price": 11,
          "numb": 0
        }]
      },
      {
        "typeName": "剪 刀",
        "menuContent": [{
          "name": "剪刀",
          "src": "/pages/images/image_01_05.jpg",
          "sales": 22,
          "rating": 3,
          "price": 8,
          "numb": 0
        }]
      },
      {
        "typeName": "垃圾桶",
        "menuContent": [{
          "name": "垃圾桶",
          "src": "/pages/images/image_01_02.jpg",
          "sales": 22,
          "rating": 3,
          "price": 27,
          "numb": 0
        }]
      },

      {
        "typeName": "转笔刀",
        "menuContent": [{
          "name": "转笔刀",
          "src": "/pages/images/image_01_07.jpg",
          "sales": 22,
          "rating": 3,
          "price": 9,
          "numb": 0
        }, {
            "name": "铅笔刀",
            "src": "/pages/images/image_02_07.jpg",
            "sales": 22,
            "rating": 3,
            "price": 25,
            "numb": 0
          }]
      },
      {
        "typeName": "铅笔刀",
        "menuContent": [{
          "name": "铅笔刀",
          "src": "/pages/images/image_01_08.jpg",
          "sales": 22,
          "rating": 3,
          "price": 15,
          "numb": 0
        }]
      },
      {
        "typeName": "订书机",
        "menuContent": [{
          "name": "订书机",
          "src": "/pages/images/image_01_09.jpg",
          "sales": 22,
          "rating": 3,
          "price": 32,
          "numb": 0
        }]
      }
      // ,
      // {
      //   "typeName": "日用清洁",
      //   "menuContent": [{
      //     "name": "毛巾",
      //     "src": "/pages/images/detergent-02.jpg",
      //     "sales": 22,
      //     "rating": 3,
      //     "price": 4,
      //     "numb": 0
      //   }]
      // },
      // {
      //   "typeName": "护理美妆",
      //   "menuContent": [{
      //     "name": "修眉刀",
      //     "src": "/pages/images/hairdressing-01.jpg",
      //     "sales": 22,
      //     "rating": 3,
      //     "price": 4,
      //     "numb": 0
      //   }]
      // },
      // {
      //   "typeName": "零食",
      //   "menuContent": [{
      //     "name": "浆果",
      //     "src": "/pages/images/food-01.jpg",
      //     "sales": 22,
      //     "rating": 3,
      //     "price": 4,
      //     "numb": 0
      //   }]
      // }
    ],
    currentPage: 0,
    selected: 0,
    howMuch: 12,
    cost: 0,
    pullBar: false,
    slider: [],
    myDatas: [],
    swiperCurrent: 0,
    height: "0px"
  },
  pullBar: function() {
    this.setData({
      pullBar: !this.data.pullBar
    })
  },
  //新增下单数量
  addToTrolley: function(e) {
    var info = this.data.menu;

    console.log(info);


    info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb++;

    try {

      var name = this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index].name;
      var value = this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index];
      product.set(name, value);

      var products = [];
      for (var x of product) { // 遍历Map

        products.push(x[1]);
        //console.log('遍历值=' + productStr);
      }
      console.log("======新增下单产品========>" + products);
      //保存本地数据
      wx.setStorageSync("strJson", products)
      //wx.setStorageSync("product", productStr)

    } catch (e) {}

    this.setData({
      cost: this.data.cost + this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index].price,
      menu: info,
      myDatas: this.data.menu[this.data.selected]
    })

  },
  //减少下单数量
  removeFromTrolley: function(e) {
    var info = this.data.menu;

    if (info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb != 0) {
      var name = this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index].name;
      //var value = this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index];
      //product.set(name, value);
      product.delete(name);
      var products = [];
      for (var x of product) { // 遍历Map

        products.push(x[1]);
        //console.log('遍历值=' + productStr);
      }
      console.log("======减少下单产品========>" + products);
      //保存本地数据
      wx.setStorageSync("strJson", products)

      info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb--;
      this.setData({
        cost: this.data.cost - this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index].price,
        menu: info,
      })
    }
  },
  turnPage: function(e) {
    this.setData({
      currentPage: e.currentTarget.dataset.index
    })
  },
  turnTitle: function(e) {
    if (e.detail.source == "touch") {
      this.setData({
        currentPage: e.detail.current
      })
    }
  },
  turnMenu: function(e) {
    this.setData({
      selected: e.currentTarget.dataset.index
    })
    console.log(e.currentTarget.dataset.index);
  }, //轮播图的切换事件
  swiperChange: function(e) {
    //只要把切换后当前的index传给<swiper>组件的current属性即可
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function(e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  //点击结算按钮
  gotoresult: function(e) {

    wx.navigateTo({
      url: '/pages/pay/pay?totalPrice=' + this.data.cost
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var id = options.selectedId;
    console.log(id + "<----");

    var w = wx.getSystemInfoSync().windowWidth; //屏幕宽
    var h = wx.getSystemInfoSync().windowHeight; //屏幕高
    console.log("w:" + w + "H:" + h);

    this.setData({
      selected: id,
      height: h
    });


    /**
    //网络加载菜单和产品
    wx.request({
      url: "https://www.easy-mock.com/mock/5b6d561b172bf704f8ac4704/shop/menu",
      method: "GET",
      success: function(res) {
        that.setData({
          menu: res.data,
        })
      }
    });
    //网络访问，获取轮播图的图片
    util.getRecommend(function(data) {
      that.setData({
        slider: data.data.slider
      })
    });

    */

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