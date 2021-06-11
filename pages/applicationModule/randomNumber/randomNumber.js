// pages/applicationModule/randomNumber/randomNumber.js
var util = require('./../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 1,
    min_scope: 1,
    max_scope: 100,
    isSole: true,
    result: false,
    resultArray: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  onShow:function(){
    let randomNumberConfiguration = wx.getStorageSync('randomNumberConfiguration')
    if (randomNumberConfiguration != "") {
      this.setData({
        number: randomNumberConfiguration.number,
        min_scope: randomNumberConfiguration.min_scope,
        max_scope: randomNumberConfiguration.max_scope,
        isSole: randomNumberConfiguration.isSole,
        result: false,
        resultArray: [],
      })
    }
  },
  moreChange() {
    console.log(45456)
    wx.showActionSheet({
      itemList: ['本功能使用记录', '本功能选项配置记录'],
      success(res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 0) {
          wx.navigateTo({
            url: './../../history/history?type=randomNumber',
          })
        }else if(res.tapIndex == 1) {
          wx.navigateTo({
            url: './../../configurationRecord/configurationRecord?type=randomNumber',
          })
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })

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
      title: '随机数生成',
      // 成功的回调
      success: (res) => { },
      // 失败的回调
      fail: (res) => { },
      // 无论成功与否的回调
      complete: (res) => { }
    }
  },
  numberChange(e) {
    this.setData({
      number: Number(e.currentTarget.id)
    })
  },
  inputMinScope(e) {
    this.data.min_scope = Number(e.detail.value)
  },
  inputMaxScope(e) {
    this.data.max_scope = Number(e.detail.value)
  },
  isSoleChange(e) {
    let isSole = true;
    if (e.currentTarget.id == "false") {
      isSole = false
    }
    this.setData({
      isSole: isSole
    })

  },
  Reset() {
    this.setData({
      number: 1,
      min_scope: 1,
      max_scope: 100,
      isSole: true,
      result: false,
      resultArray: [],
    })
  },
  gettingRandomNumbers() {
    let resultArray = [];
    if (this.data.isSole) {
      if (this.random(this.data.min_scope, this.data.max_scope) != "错误") {
        for (let i = 0; i < this.data.number;) {
          let result = this.random(this.data.min_scope, this.data.max_scope);
          if (!resultArray.includes(result)) {
            resultArray.push(result);
            i++
          }
        }
      }
    } else {
      for (let i = 0; i < this.data.number; i++) {
        let result = this.random(this.data.min_scope, this.data.max_scope);
        resultArray.push(result);
      }
    }
    this.setData({
      resultArray: resultArray,
      result: true
    })

    //存储所有功能数据 
    let history = wx.getStorageSync('history')
    if (history == "") {
      history = []
    }
    let historyData = {
      featuresName: "随机数生成",
      value: resultArray.join(" "),
      time: util.formatTime(new Date())
    }
    history.push(historyData)
    wx.setStorage({
      key: "history",
      data: history
    })


    //存储本功能数据 

    let randomNumberHistory = wx.getStorageSync('randomNumberHistory')
    if (randomNumberHistory == "") {
      randomNumberHistory = []
    }
    let randomNumberHistoryData = {
      featuresName: "随机数生成",
      value: resultArray.join(" "),
      time: util.formatTime(new Date())
    }
    randomNumberHistory.push(randomNumberHistoryData)
    wx.setStorage({
      key: "randomNumberHistory",
      data: randomNumberHistory
    })

    //
    console.log(this.data.number, this.data.min_scope, this.data.max_scope, this.data.isSole, resultArray)
  },
  random(min, max) {
    if (this.data.isSole) {
      if (this.data.number <= (max - min + 1)) {
        var Range = max - min;
        var Rand = Math.random();
        return (min + Math.round(Rand * Range));
      } else {
        let error = "错误";
        wx.showToast({
          title: '当选择唯一时,随机数个数不能大于范围',
          icon: 'none',
          duration: 2000
        })
        return error;
      }
    } else {
      var Range = max - min;
      var Rand = Math.random();
      return (min + Math.round(Rand * Range));
    }
  },
  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function () {
    let randomNumberConfigurationRecord = wx.getStorageSync('randomNumberConfigurationRecord')
    if (randomNumberConfigurationRecord == "") {
      randomNumberConfigurationRecord = []
    }
    let randomNumberConfiguration = {
      number: this.data.number,
      min_scope: this.data.min_scope,
      max_scope: this.data.max_scope,
      isSole: this.data.isSole,
      time: util.formatTime(new Date())
    }
    randomNumberConfigurationRecord.push(randomNumberConfiguration)
    wx.setStorage({
      key: "randomNumberConfigurationRecord",
      data: randomNumberConfigurationRecord
    })
    wx.removeStorage({
      key: 'randomNumberConfiguration'
    })
  },


})