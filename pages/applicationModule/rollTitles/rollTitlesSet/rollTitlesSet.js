

// pages/applicationModule/rollTitles/rollTitlesSet/rollTitlesSet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    index: 0,
    picker: ['慢', '中', '快'],
    colorSelection:"",
    isStart:"",
    ColorList: [
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    },
  ]
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
    this.setData({
      isStart:""
    })
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
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  contentChange(e){
    this.setData({
      content: e.detail.value
    })
  },
  colorSelection(e){
    console.log(e,"eee")
    let color = e.currentTarget.dataset.item.color;
    this.setData({
      colorSelection:color
    })
  },
  startChange(e){
    this.setData({
      isStart:'isStart'
    })
    if(this.data.content == "" || this.data.colorSelection==""){
     wx.showToast({
       title: '请输入所有的内容',
       icon:"none"
     })
    }else{
      let setInfo = {
        speed:this.data.index,
        content:this.data.content,
        color:this.data.colorSelection
      }
      setInfo = JSON.stringify(setInfo)
      wx.navigateTo({
        url: `/pages/applicationModule/rollTitles/rollTitlesShow/rollTitlesShow?setInfo=${setInfo}`,
      })
    }

  }
})