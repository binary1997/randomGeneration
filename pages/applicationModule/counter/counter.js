// pages/applicationModule/counter/counter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    add: 1,
    reduce: 1,
    settingShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  addNumber: function () {
    wx.vibrateShort()
    this.setData({
      number: this.data.number + this.data.add
    })
  },
  reduceNumber: function () {
    wx.vibrateShort()
    this.setData({
      number: this.data.number - this.data.reduce
    })
  },
  reset: function () {
    this.setData({
      number: 0,
      reduce: 1,
      add: 1,
    })
  },
  setting:function(){
    this.setData({
      settingShow:!this.data.settingShow
    })
  },
  inputNumber:function(e){
    this.setData({
      number: Number(e.detail.value)
    })
  },
  inputAdd:function(e){
    
    this.setData({
      add: Number(e.detail.value)
    })
  },
  inputReduce:function(e){
   
    this.setData({
      reduce: Number(e.detail.value)
    })
  }
})