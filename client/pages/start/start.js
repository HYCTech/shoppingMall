//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '/pages/images/tooopen_sy_03.jpg',
      '/pages/images/tooopen_sy_02.jpg',
      '/pages/images/tooopen_sy_01.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems: [
      {
        name: '夹 子',
        url: '/pages/images/image_01_01.png'
      },
      {
        name: '本 子',
        url: '/pages/images/image_01_06.png',
        isSplot: true
      },
      {
        name: '铅 笔',
        url: '/pages/images/image_01_03.png'
      },
      {
        name: '回形针',
        url: '/pages/images/image_01_04.png'
      },
      {
        name: '剪 刀',
        url: '/pages/images/image_01_05.png',
        isSplot: true
      },
      {
        name: '垃圾桶',
        url: '/pages/images/image_01_02.png'

      },
       
      {
        name: '转笔刀',
        url: '/pages/images/image_01_07.png'
      }
      ,
      {
        name: '铅笔刀',
        url: '/pages/images/image_01_08.png',
        isSplot: true
      },
      {
        name: '订书机',
        url: '/pages/images/image_01_09.png'
      }
      // ,
      // {
      //   name: '护理美妆',
      //   url: '/pages/images/start-10.png'
      // }
      //,
      // {
      //   name: '零食',
      //   url: '/pages/images/start-11.png', 
      //   isSplot: true
      // } 
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
