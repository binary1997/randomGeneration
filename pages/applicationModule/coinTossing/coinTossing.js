// pages/applicationModule/coinTossing/coinTossing.js
var util = require('./../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isStart: "",
    result: "",
    orangeWidth: "",
    blueWidth: "",
    resetColor: "bg-white"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })


    //页面一开始随机显示硬币的正反面
    let number = this.random();
    if (number == 1) {
      this.setData({
        result: "正",
        isStart: "",
        blueHeight: "height: 400rpx;",
        orangeHeight: "height: 0;",
        resetColor: "bg-blue"
      })
    } else {
      this.setData({
        result: "反",
        isStart: "",
        orangeHeight: "height: 400rpx;",
        blueHeight: "height: 0rpx;",
        resetColor: "bg-orange"
      })
    }
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    } else {
      // 来自菜单栏转发按钮
      console.log(res.target)
    }
    return {
      title: '掷硬币',
      // 成功的回调
      success: (res) => { },
      // 失败的回调
      fail: (res) => { },
      // 无论成功与否的回调
      complete: (res) => { }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  startChange() {
    if (this.data.isStart != "start") {
      this.setData({
        isStart: "start"
      })
      wx.vibrateShort()
      setTimeout(() => {
        let number = this.random();
        if (number == 1) {
          this.setData({
            result: "正",
            isStart: "",
            blueHeight: "height: 400rpx;",
            orangeHeight: "height: 0;",
            resetColor: "bg-blue"
          })
        } else {
          this.setData({
            result: "反",
            isStart: "",
            orangeHeight: "height: 400rpx;",
            blueHeight: "height: 0rpx;",
            resetColor: "bg-orange"
          })
        }

        //存储数据 
        let history = wx.getStorageSync('history')
        if (history == "") {
          history = []
        }
        let historyData = {
          featuresName: "掷硬币",
          value: this.data.result,
          time: util.formatTime(new Date())
        }
        history.push(historyData)
        wx.setStorage({
          key: "history",
          data: history
        })

        wx.vibrateShort()
      }, 5000)

    }
  },
  resetChange() {
    if (this.data.result == '反') {
      this.setData({
        result: "正",
        isStart: "",
        blueHeight: "height: 400rpx;",
        orangeHeight: "height: 0;",
        resetColor: "bg-blue"
      })
    } else {
      this.setData({
        result: "反",
        isStart: "",
        orangeHeight: "height: 400rpx;",
        blueHeight: "height: 0rpx;",
        resetColor: "bg-orange"
      })
    }
  },
  random() {
    let Number = Math.random().toFixed(0);
    return Number;
  }
})