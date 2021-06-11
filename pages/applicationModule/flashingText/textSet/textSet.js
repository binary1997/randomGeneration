// pages/applicationModule/flashingText/textSet/textSet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    picker: ['慢', '中', '快'],
    StyleIndex:0,
    StylePicker:['抖动字体'],
    wordsIndex:0,
    wordsPicker:[2,4,6,8],
    content:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  StylePickerChange(e) {
    console.log(e);
    this.setData({
      StyleIndex: e.detail.value
    })
  },
  wordsPickerChange(e) {
    console.log(e);
    this.setData({
      wordsIndex: e.detail.value
    })
  },
  contentChange(e){
    this.setData({
      content: e.detail.value
    })
  },


  startChange(){
    let setInfo = {
      content:this.data.content,
      words:this.data.wordsPicker[this.data.wordsIndex],
      speed:this.data.index,
      type:'back'
    }

    switch(this.data.StyleIndex){
      case 0:
        wx.navigateTo({
          url: `/pages/applicationModule/flashingText/tiktokType/tiktokType?setInfo=${JSON.stringify(setInfo)}`,
        })
      break
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

  }
})