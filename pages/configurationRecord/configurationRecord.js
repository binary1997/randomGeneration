// pages/configurationRecord/configurationRecord.js
let videoAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    randomNumberConfigurationRecord:[],
    type:"",
    configuration:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    if (e.type == 'randomNumber') {
      let randomNumberConfigurationRecord = wx.getStorageSync('randomNumberConfigurationRecord')
      if (randomNumberConfigurationRecord != "") {
        randomNumberConfigurationRecord.reverse();
        this.setData({
          randomNumberConfigurationRecord,
          type:e.type
        })
      }
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
          // console.log(e)
          wx.setStorage({
            key: "randomNumberConfiguration",
            data: this.data.configuration
          })
          wx.showLoading({
            title: '正在应用配置',
          })
          setTimeout(function() {
            wx.hideLoading()
            wx.navigateBack()
          }, 2000)
         

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
  usingConfiguration:function(e){
    this.setData({
      configuration:e.currentTarget.dataset.item
    })
    if (videoAd) {
      videoAd.show().catch(err => {
        // 失败重试
        videoAd.load()
          .then(() => videoAd.show())
      })
    }
  
   
  }
})