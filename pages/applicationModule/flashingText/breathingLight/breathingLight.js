// pages/applicationModule/flashingText/tiktokType/tiktokType.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "",
    switchingSpeed: 1000,
    showNumber: 2,
    textList: [],
    textListLength: 0,
    fontSize: "",
    switchStart: "",
    setShow: false,
    setInfo: "",
    type: 'back'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.setInfo)

    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })

    let setInfo = JSON.parse(options.setInfo)

    //文字切割
    let text = setInfo.content
    let showNumberInfo = setInfo.words;
    let speed = setInfo.speed;

    let showNumber = "";
    let fontSize = ""
    switch (showNumberInfo) {
      case 2:
        showNumber = /(.{2})/g;
        fontSize = 200
        break;
      case 4:
        showNumber = /(.{4})/g;
        fontSize = 150
        break;
      case 6:
        showNumber = /(.{6})/g;
        fontSize = 110
        break;
      case 8:
        showNumber = /(.{8})/g;
        fontSize = 85
        break;
    }

    let textList = text.replace(/\s/g, '').replace(showNumber, "$1,");
    textList = textList.split(",")

    //文字大小选定
    this.setData({
      fontSize,
      setInfo,
      type: setInfo.type
    })

    //文字速度

    if (speed == '0') {
      this.data.switchingSpeed = 3000
    } else if (speed == '1') {
      this.data.switchingSpeed = 2000
    } else {
      this.data.switchingSpeed = 1000
    }


    console.log(textList)
    this.textSwitch(textList)
  },
  textSwitch(textList) {
    let that = this;

    if (textList[textList.length - 1] == '') {
      textList.pop();;
    }


    let textListLength = textList.length - 1;
    let index = 1;
    let text = ""
    text = textList[0];
    that.setData({
      text
    })
    let switchStart = setInterval(() => {

      text = textList[index];
      if (index == textListLength) {
        index = 0

      } else {
        index++
      }

      that.setData({
        text
      })
    }, that.data.switchingSpeed)

    this.setData({
      switchStart
    })
  },
  backEvent: function () {
    wx.navigateBack()
  },
  homeEvent: function () {
    wx.switchTab({
      url: '/pages/breaksPage/breaksPage',
    })
  },
  setProcess: function () {
    this.setData({
      setShow: !this.data.setShow
    })


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
    clearInterval(this.data.switchStart)
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
  onShareAppMessage: function (res) {
    let setInfo = this.data.setInfo
    setInfo.type = 'home'
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    } else {
      // 来自菜单栏转发按钮
      console.log(res.target)
    }
    return {
      title: '闪动文字',
      path: `/pages/applicationModule/flashingText/tiktokType/tiktokType?setInfo=${JSON.stringify(setInfo)}`,
      // 成功的回调
      success: (res) => { },
      // 失败的回调
      fail: (res) => { },
      // 无论成功与否的回调
      complete: (res) => { }
    }
  }
})