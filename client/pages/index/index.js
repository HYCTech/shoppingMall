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
        "typeName": "蔬 菜",
        "menuContent": [{
            "name": "娃娃菜",
            "src": "/pages/images/im01-01.jpg",
            "sales": 22,
            "rating": 3,
            "price": 1,
            "numb": 0
          },
          {
            "name": "秋葵",
            "src": "/pages/images/im01-02.jpg",
            "sales": 22,
            "rating": 3,
            "price": 10,
            "numb": 0
          },
          {
            "name": "苦瓜",
            "src": "/pages/images/im01-03.jpg",
            "sales": 22,
            "rating": 3,
            "price": 11,
            "numb": 0
          },
          {
            "name": "玉米",
            "src": "/pages/images/im01-04.jpg",
            "sales": 22,
            "rating": 3,
            "price": 32,
            "numb": 0
          },
          {
            "name": "红椒",
            "src": "/pages/images/im01-05.jpg",
            "sales": 22,
            "rating": 3,
            "price": 32,
            "numb": 0
          },
          {
            "name": "西红柿",
            "src": "/pages/images/im01-06.jpg",
            "sales": 22,
            "rating": 3,
            "price": 32,
            "numb": 0
          }
        ]
      },
      {
        "typeName": "酒水冷饮",
        "menuContent": [{
            "name": "红酒",
          "src": "/pages/images/alcohol-01.jpg",
            "sales": 22,
            "rating": 3,
            "price": 9,
            "numb": 0
          },
          {
            "name": "冰激凌",
            "src": "/pages/images/alcohol-02.jpg",
            "sales": 22,
            "rating": 3,
            "price": 21,
            "numb": 0
          }
        ]
      },
      {
        "typeName": "肉鱼禽蛋",
        "menuContent": [{
          "name": "小鱼",
          "src": "/pages/images/fish-01.jpg",
          "sales": 22,
          "rating": 3,
          "price": 4,
          "numb": 0
        }, {
            "name": "多宝鱼",
            "src": "/pages/images/fish-02.jpg",
            "sales": 22,
            "rating": 3,
            "price": 4,
            "numb": 0
          }]
      },

      {
        "typeName": "粮油调味",
        "menuContent": [{
          "name": "大米",
          "src": "/pages/images/rice-01.jpg",
          "sales": 22,
          "rating": 3,
          "price": 4,
          "numb": 0
        }, {
            "name": "油",
            "src": "/pages/images/rice-02.jpg",
            "sales": 22,
            "rating": 3,
            "price": 4,
            "numb": 0
          }]
      },
      {
        "typeName": "熟食面点",
        "menuContent": [{
          "name": "阳春面",
          "src": "/pages/images/noodles-01.jpg",
          "sales": 22,
          "rating": 3,
          "price": 4,
          "numb": 0
        },{
            "name": "鸡蛋面",
            "src": "/pages/images/noodles-02.jpg",
            "sales": 22,
            "rating": 3,
            "price": 4,
            "numb": 0
          }]
      },
      {
        "typeName": "牛奶面包",
        "menuContent": [{
          "name": "大面包",
          "src": "/pages/images/milk-bread-01.jpg",
          "sales": 22,
          "rating": 3,
          "price": 4,
          "numb": 0
        }, {
            "name": "小面包",
            "src": "/pages/images/milk-bread-02.jpg",
            "sales": 22,
            "rating": 3,
            "price": 4,
            "numb": 0
          }]
      },
      {
        "typeName": "宠物商品",
        "menuContent": [{
          "name": "狗粮",
          "src": "/pages/images/dog-food-01.jpg",
          "sales": 22,
          "rating": 3,
          "price": 4,
          "numb": 0
        },{
            "name": "磨牙棒",
            "src": "/pages/images/dog-food-02.jpg",
            "sales": 22,
            "rating": 3,
            "price": 4,
            "numb": 0
          }]
      },
      {
        "typeName": "休闲零食",
        "menuContent": [{
          "name": "巧克力",
          "src": "/pages/images/chocolates-01.jpg",
          "sales": 22,
          "rating": 3,
          "price": 4,
          "numb": 0
        }]
      },
      {
        "typeName": "日用清洁",
        "menuContent": [{
          "name": "毛巾",
          "src": "/pages/images/detergent-02.jpg",
          "sales": 22,
          "rating": 3,
          "price": 4,
          "numb": 0
        }]
      },
      {
        "typeName": "护理美妆",
        "menuContent": [{
          "name": "修眉刀",
          "src": "/pages/images/hairdressing-01.jpg",
          "sales": 22,
          "rating": 3,
          "price": 4,
          "numb": 0
        }]
      },
      {
        "typeName": "进口商品",
        "menuContent": [{
          "name": "浆果",
          "src": "/pages/images/food-01.jpg",
          "sales": 22,
          "rating": 3,
          "price": 4,
          "numb": 0
        }]
      },
      {
        "typeName": "母 婴",
        "menuContent": [{
          "name": "奶瓶",
          "src": "/pages/images/feeder-01.jpg",
          "sales": 22,
          "rating": 3,
          "price": 4,
          "numb": 0
        }]
      }  
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

    var w = wx.getSystemInfoSync().windowWidth;//屏幕宽
    var h = wx.getSystemInfoSync().windowHeight;//屏幕高
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