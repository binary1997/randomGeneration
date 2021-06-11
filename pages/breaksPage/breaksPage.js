// pages/breaksPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init()  //数据库初始化
    const db = wx.cloud.database()  //链接数据库
    //const couponList = db.collection('couponList')
    //console.log(couponList)
    db.collection('couponList').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      console.log(res.data)
      this.setData({
        couponList : res.data
      })
    })
    this.getcouponList();
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
  getcouponList() {
   
  },
  toFnPage(e){
    wx.navigateTo({
      url: '/pages/history/history',
    })
  },

  toCalculationTakeawayDiscountPage(e){
    wx.navigateTo({
      url: '/pages/applicationModule/calculationTakeawayDiscount/calculationTakeawayDiscount',
    })
  },
  toGirlWallpaper(){
    wx.navigateTo({
      url: '/pages/applicationModule/girlWallpaper/wallpaperList/wallpaperList?type=1',
    })
  },
  toClock(){
    wx.navigateTo({
      url: '/pages/applicationModule/clock/clockStyle/clockOne/clockOne',
    })
  },
  toGirlClock(){
    wx.navigateTo({
      url: '/pages/applicationModule/clock/clockStyle/clockTwo/clockTwo',
    })
  },
  toCounter(){
    wx.navigateTo({
      url: '/pages/applicationModule/counter/counter',
    })
  },
  toRollTitlesSet(){
    wx.navigateTo({
      url: '/pages/applicationModule/rollTitles/rollTitlesSet/rollTitlesSet',
    })
  },
  toTextSet(){
    wx.navigateTo({
      url: '/pages/applicationModule/flashingText/textSet/textSet',
    })
  },
  
  openMiniProgram: function (e) {
    console.log(e.currentTarget.id);
    let name = e.currentTarget.id;
    let couponList = this.data.couponList;
    for (const coupon in couponList) {
      if (couponList[coupon].name == name) {
        wx.navigateToMiniProgram({
          appId: couponList[coupon].appid,
          path: couponList[coupon].link,
          success(res) {
            // 打开成功
            console.log('打开成功', res)
          }
        })

      }
    }
  },
  openMyMiniProgram:function (e) {
    console.log(e.currentTarget.id);
    let name = e.currentTarget.id;
    let appId = "";
    let path = " "
      if (name == "joke") {
        appId = "wx00590e160f83acf6"
        path = "pages/home/home"
      }else if (name == "inquire"){
        appId = "wx37e31084c210b0da"
        path = "pages/home/home"
      }
      wx.navigateToMiniProgram({
        appId: appId,
        path: path,
        success(res) {
          // 打开成功
          console.log('打开成功', res)
        }
      })
    
  },
})


 // wx.navigateToMiniProgram({
    //   appId: 'wxd98a20e429ce834b',
    //   path: 'kfpub/pages/gift?jump_home=1&f_dpsid=f3f76f2123c64ca3989cc4b371f67d96&latitude=23.115662977430556&g_channel=2f9e032794de100a0b8eb5a203bd2a37&entrance_channel=&channel=2001001001&xpsid=bc1bd6632b224810a6ed4469e813ca27&share_code=bt5072vp8ibetcj3s95g&dchn=zxOgqk&channel_id=2001001001&longitude=114.40810628255208&city_id=133',
    //   success(res) {
    //     // 打开成功
    //     console.log('打开成功', res)
    //   }
    // })