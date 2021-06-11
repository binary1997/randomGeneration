// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAdmireShow: false,
    index:0
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
  toBreaksPage() {
    wx.navigateTo({
      url: `../../pages/breaksPage/breaksPage`,
    })
  },
  ToWallpaperList() {
    this.data.index++;
    wx.showToast({
      title: '版本:V1.6.9',
      icon: 'none',
      duration: 2000
    })
    
  },
  isAdmireShow() {
    this.setData({
      isAdmireShow: !this.data.isAdmireShow
    })
    // wx.navigateToMiniProgram({
    //   appId: 'wxd98a20e429ce834b',
    //   path: 'kfpub/pages/gift?jump_home=1&f_dpsid=f3f76f2123c64ca3989cc4b371f67d96&latitude=23.115662977430556&g_channel=2f9e032794de100a0b8eb5a203bd2a37&entrance_channel=&channel=2001001001&xpsid=bc1bd6632b224810a6ed4469e813ca27&share_code=bt5072vp8ibetcj3s95g&dchn=zxOgqk&channel_id=2001001001&longitude=114.40810628255208&city_id=133',
    //   success(res) {
    //     // 打开成功
    //     console.log('打开成功', res)
    //   }
    // })
  }
})