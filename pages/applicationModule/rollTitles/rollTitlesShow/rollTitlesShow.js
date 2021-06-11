// pages/applicationModule/rollTitles/rollTitlesShow/rollTitlesShow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showText: '',
    speed:"",
    color:"",
    textlength: "",
    oneRight: "",
    oneRightGo:"",
    windowWidth:'',
    setShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.setInfo)
    let setInfo = JSON.parse(options.setInfo)
    let speed = ""
    if(setInfo.speed == '0'){
      speed = 100
    }else if(setInfo.speed == '1'){
      speed = 50
    }else{
      speed = 20
    }

    this.setData({
      showText:setInfo.content,
      speed,
      color:setInfo.color,
    })



    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        
        that.setData({
          windowWidth: res.windowWidth
        })
      }
    })

    this.setData({
      textlength: this.data.showText.length * 100,
      oneRight: -(this.data.showText.length * 100),
      TwoRight: -((this.data.showText.length * 100*2)+200),
    })
    let oneRightGo = setInterval(()=>{
      if(this.data.oneRight == (this.data.windowWidth)){
        this.setData({  
          oneRight: -this.data.textlength,
        })
      }else{
        let oneRightAdd = this.data.oneRight;
        oneRightAdd = Number(oneRightAdd) + 1
       
        this.setData({  
          oneRight: oneRightAdd
        })
      }
    },this.data.speed)


    // let TwoRightGo = setInterval(()=>{
    //   if(this.data.TwoRight == this.data.textlength+400){
    //     this.setData({  
    //       TwoRight: -(this.data.textlength),
    //     })
    //   }else{
    //     let TwoRighttAdd = this.data.TwoRight;
    //     TwoRighttAdd = Number(TwoRighttAdd) + 1
    //     console.log(TwoRighttAdd,"TwoRighttAdd")
        this.setData({  
          oneRightGo
        })
    //   }
    // },10)




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
    setInterval(this.data.oneRightGo)
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
  setProcess:function(){
    this.setData({
      setShow:!this.data.setShow
    })

   
  },
  backEvent:function(){
    wx.navigateBack()
  },
})