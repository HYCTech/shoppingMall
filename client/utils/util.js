const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 显示繁忙提示
var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
})

// 显示失败提示
var showModel = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  })
}


//网络访问
function getRecommend(callback) {
  wx.request({
    //url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
    url: 'https://www.easy-mock.com/mock/5b6d561b172bf704f8ac4704/shop/musichall',
    data: {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: Date.now()
    },
    method: 'GET',
    header: {
      'content-Type': 'application/json'
    },
    success: function(res) {
      if (res.statusCode == 200) {
        callback(res.data);
      }
    }
  })
}


function showErrorToast(msg) {
  wx.showToast({
    title: msg,
    image: '/client/pages/images/icon_error.png'
  })
}

module.exports = {
  formatTime,
  showBusy,
  showSuccess,
  showModel,
  showErrorToast,
  getRecommend: getRecommend
}