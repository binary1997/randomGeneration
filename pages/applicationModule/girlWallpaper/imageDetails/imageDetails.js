// pages/applicationModule/girlWallpaper/imageDetails/imageDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgInfo: {},
    touch: {
      distance: 0,
      scale: 1,
      baseWidth: null,
      baseHeight: null,
      scaleWidth: null,
      scaleHeight: null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

    console.log(options, "options")
    let imgInfo = JSON.parse(decodeURIComponent(options.imgInfo))
    
    console.log(imgInfo, "options")
    this.setData({
      imgInfo
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

  saveWallpaper: function () {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '是否要保存壁纸',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.getSetting({
            success(res) {
              wx.downloadFile({
                url: that.data.imgInfo.imageUrl,
                success: function (res) {
                  console.log(res);
                  wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: function (data) {
                      wx.showToast({
                        title: "保存成功",
                        icon: "success",
                        duration: 2000
                      });
                    },
                    fail: function (err) {
                      console.log(err);
                    },
                    complete(res) {
                      console.log(res);
                    }
                  });
                }
              });
            }
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  }

})