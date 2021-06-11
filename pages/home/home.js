// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    results: "",
    fn_listHeight:"",
    tipShow:"",
    tipTextShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: (res) => {
        let windowHeight = res.windowHeight;
        let windowWidth = res.windowWidth;
        let rpxR = 750 / windowWidth;
        let fn_listHeight = (windowHeight*rpxR) * 0.545
        that.setData({
          fn_listHeight
        })
        console.log(fn_listHeight)
      },
    })

    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
    this.queryChange()

   
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
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    } else {
      // 来自菜单栏转发按钮
      console.log(res.target)
    }
    return {
      title: '随机数机器',
      // 成功的回调
      success: (res) => {},
      // 失败的回调
      fail: (res) => {},
      // 无论成功与否的回调
      complete: (res) => {}
    }
  },
  toFnPage(e) {
    console.log(e)
    let routeName = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: `./../applicationModule/${routeName}/${routeName}`,
    })
  },
  queryChange: function () {
    let that = this
    wx.request({
      url: `https://api.muxiaoguo.cn/api/bing?api_key=8a96ce5ce2c5dd2a&id=today&pn=1`,
      method: 'get',
      data: '',    //参数为键值对字符串
      header: {
        "Content-Type": "text/json",
      },
      success: function (res) {
        console.log(res)
        let results = res.data.data[0].imgurl;

        that.setData({
          results,
          tipShow:"updateTipShow"
        })
        setTimeout(() => {
          that.setData({
            tipShow:"hidden"
          })
        }, 4000);
        setTimeout(() => {
          that.setData({
            tipTextShow:true
          })
        }, 5200);

       


      }

    })


  },
  saveWallpaper: function () {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '是否要保存每日壁纸',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.getSetting({
            success(res) {
              wx.downloadFile({
                url:that.data.results,
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
    
  },
  toAboutPage:function(){
    wx.switchTab({
      url: '/pages/more/more'
    })
  }
})