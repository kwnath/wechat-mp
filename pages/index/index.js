//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    number: 1,
    motto: ({cn: 'ni hao', en: 'hello'}),
    userInfo: {},
    array: [{ message: 'foo', greeting: 'yo' }, { message: 'bar'}]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }

})
