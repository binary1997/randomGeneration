// pages/applicationModule/randomWords/randomWords.js
var util = require('./../../../utils/util')
let videoAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [],
    itemInput: "",
    number: "----",
    timer: "",
    isSave: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
    let itemList = wx.getStorageSync('randomWordsSave')
    if (itemList !== "") {
      this.setData({
        itemList: itemList
      })
    }
    //广告初始化
    if (wx.createRewardedVideoAd) {
      // 加载激励视频广告
      videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-67cdb498b9d7aa71'
      })
      //捕捉错误
      videoAd.onError(err => {
      // 进行适当的提示
      console.log('激励视频 广告显示失败')
      })
      // 监听关闭
      videoAd.onClose((status) => {
        if (status && status.isEnded || status === undefined) {
          this.setData({
            isSave: true
          })

      // continue you code
        } else {
          // 播放中途退出，进行提示
          wx.showToast({
            title: '未观看完整视频',
            icon: 'error',
            duration: 2000
          })
                    
        }
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
      title: '随机文字生成(手动停止)',
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
    if (this.data.isSave) {
      wx.setStorage({
        key: "randomWordsSave",
        data: this.data.itemList
      })
    }
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
  isSaveChange: function (e) {
    console.log(e)
    if(e.detail.value == true){
      this.setData({
        isSave: false
      })
      if (videoAd) {
        videoAd.show().catch(err => {
          // 失败重试
          videoAd.load()
            .then(() => videoAd.show())
        })
      }
    }else{
      this.setData({
        isSave: e.detail.value
      })
    }
    
    
  },
  inputItem(e) {
    if (e.detail.keyCode == "32") {
      if (e.detail.value.replace(/\s+/g, '') != "") {
        let itemList = this.data.itemList;
        itemList.push(e.detail.value.replace(/\s+/g, ''))
        this.setData({
          itemInput: "",
          itemList
        })
      }
    }
  },
  deleteItem(e) {
    let index = e.currentTarget.dataset.index
    let itemList = this.data.itemList;
    itemList.splice(index, 1)
    this.setData({
      itemList
    })
  },
  Start() {
    let itemList = this.data.itemList;
    if (itemList.length !== 0) {
      let timer = setInterval(() => {

        let item = this.random(0, itemList.length)
        this.setData({
          number: itemList[item]
        })
      }, 50);
      this.setData({
        timer,
        isStart: true
      })

    } else {
      wx.showToast({
        title: '选项为空',
        icon: "none"
      })
    }
  },
  Stop() {
    clearInterval(this.data.timer)
    this.setData({
      isStart: false,
      timer: "",
    })
    //存储数据 
    let history = wx.getStorageSync('history')
    if (history == "") {
      history = []
    }
    let historyData = {
      featuresName: "随机文字生成(手动停止)",
      value: this.data.number,
      time: util.formatTime(new Date())
    }
    history.push(historyData)
    wx.setStorage({
      key: "history",
      data: history
    })
  },
  Reset() {
    this.setData({
      itemList: [],
      itemInput: "",
      number: "----",
      timer: ""
    })
  },
  random(min, max) {
    var Range = max - min;
    var Rand = Math.random();
    return (min + Math.round(Rand * Range));
  }
})