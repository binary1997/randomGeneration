// pages/applicationModule/randomNumberTwo/randomNumberTwo.js
var util = require('./../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isStart:false,
    number:"请点击开始",
    minScope:1,
    maxScope:100,
    timer:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
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
      title: '随机数生成(手动停止)',
      // 成功的回调
      success: (res) => {},
      // 失败的回调
      fail: (res) => {},
      // 无论成功与否的回调
      complete: (res) => {}
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

  
  inputMinScope(e) {
    this.data.minScope = Number(e.detail.value)
  },
  inputMaxScope(e) {
    this.data.maxScope = Number(e.detail.value)
  },
  Start(){
    let timer = setInterval(() => {
      this.setData({
        number : this.random(this.data.minScope,this.data.maxScope)
      })
    }, 50);
    this.setData({
      timer,
      isStart:true
    })
    
 
  },
  Stop(){
    clearInterval(this.data.timer)
     //存储数据 
     let history =  wx.getStorageSync('history')
     if(history == "" ){
       history = [] 
     }
     let historyData = { 
       featuresName:"随机数生成(手动停止)",
       value:this.data.number,
       time: util.formatTime(new Date())
     }
     history.push(historyData)
     wx.setStorage({
       key:"history",
       data:history
     })
    this.setData({
      isStart:false,
      timer:"",
    })
  },
  Reset(){
    this.setData({
      isStart:false,
      number:"请点击开始",
      minScope:1,
      maxScope:100,
      timer:"",
    })
  },
  random(min,max){
    var Range = max - min;
    var Rand = Math.random();
    return(min + Math.round(Rand * Range));
  }
   

})