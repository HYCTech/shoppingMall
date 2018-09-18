//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '/pages/images/tooopen_sy_01.jpg',
      '/pages/images/tooopen_sy_02.jpg',
      '/pages/images/tooopen_sy_03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems: [
      {
        name: '蔬 菜',
        url: '/pages/images/start-01.png'
      },
      {
        name: '母 婴',
        url: '/pages/images/start-12.png',
        isSplot: true
      },
      {
        name: '肉鱼禽蛋',
        url: '/pages/images/start-03.png'
      },
      {
        name: '粮油调味',
        url: '/pages/images/start-04.png'
      },
      {
        name: '熟食面点',
        url: '/pages/images/start-05.png',
        isSplot: true
      },
      {
        name: '牛奶面包',
        url: '/pages/images/start-06.png'
      },
      {
        name: '宠物商品',
        url: '/pages/images/start-07.png'
      },
      {
        name: '休闲零食',
        url: '/pages/images/start-08.png',
        isSplot: true
      },
      {
        name: '日用清洁',
        url: '/pages/images/start-09.png'
      },
      {
        name: '护理美妆',
        url: '/pages/images/start-10.png'
      },
      {
        name: '零食',
        url: '/pages/images/start-11.png', 
        isSplot: true
      } 
    ]
  },
  //点击结算按钮
  gotoInfo: function (e) {
    var id = e.target.id;

    console.log(id);
    
     wx.navigateTo({
       url: '/pages/index/index?selectedId=' + id
     });
  },
  onLoad: function () {
    console.log('onLoad')
  }

})
