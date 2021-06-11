// pages/applicationModule/girlWallpaper/wallpaperList/wallpaperList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    backgroundColor: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42'
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa'
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    }, {
      title: '嫣红',
      name: 'red',
      color: '#e54d42'
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa'
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    },
    ],
    isLoad: false,
    type:0,
    page:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type)
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
    
    this.queryChange(options.type);
    if(options.type == 2){
      this.queryChange(options.type);
    }
    this.setData({
      type:options.type
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

    this.queryChange(this.data.type);
    this.setData({
      isLoad: true
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    } else {
      // 来自菜单栏转发按钮
      console.log(res.target)
    }
    return {
      title: '风景壁纸',

      // 成功的回调
      success: (res) => { },
      // 失败的回调
      fail: (res) => { },
      // 无论成功与否的回调
      complete: (res) => { }
    }
  },
  queryChange: function (type) {
    let that = this
    if (type == 1) {
      let urlOne = 'https://api.muxiaoguo.cn/api/360bizhi?api_key=b8ae31ad414e434b&cid=9&start='+String(that.data.page)+'&count=20'
      let urlTwo = 'https://api.muxiaoguo.cn/api/360bizhi?api_key=b8ae31ad414e434b&cid=9&start='+String(that.data.page-6)+'&count=6'
      wx.request({
        url: that.data.page == 0?urlOne:urlTwo,
        method: 'get',
        data: '',    //参数为键值对字符串
        header: {
          "Content-Type": "text/json",
        },
        success: function (res) {
          console.log(res,1111)
          if(res.data.code == 200){
          let resultsList = res.data.data;
         
          let imgList = JSON.parse(JSON.stringify(that.data.imgList))
          
          for (const result in resultsList) {
            let imgUrl = resultsList[result].imgurl.split(":")
            
            let img = {
              imageUrl: "https:"+imgUrl[1],
              imageSize: resultsList[result].resolution
            }
            imgList.push(img)
              
           
            
          
         
          }
          let page = 0
          if(that.data.page == 0){
            page = 20
          }else{
            page = that.data.page
          }
          that.setData({
            imgList:imgList,
            page:page+6,
            isLoad: true
          })
          }else{
            wx.showToast({
              title: '暂无更多壁纸',
              icon: 'none',
              duration: 2000
            })
            that.setData({
             
              isLoad: true
            })
          }
        }
      })
    } 

  },
  ToImageDetails: function (e) {
    console.log(e, "111")
    let imgInfo = JSON.stringify(e.currentTarget.dataset.item);
    imgInfo = encodeURIComponent(imgInfo)
    wx.navigateTo({
      url: `/pages/applicationModule/girlWallpaper/imageDetails/imageDetails?imgInfo=${imgInfo}`,
    })
  }
})