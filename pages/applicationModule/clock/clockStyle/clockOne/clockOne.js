// pages/applicationModule/clock/clockStyle/clockOne/clockOne.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"",
    day:"",
    setShow:false,
    setModelShow:false,
    Clockstyle:{
    
    },
    ClockstyleList:[{
      id:0,
      backgroundColor:"bg-black",
      textColor:"text-white"
    },{
      id:1,
      backgroundColor:"bg-white",
      textColor:"text-black"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      Clockstyle:this.data.ClockstyleList[0]
    })
    setInterval(() => {
      this.NowTime();
    }, 1000);
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
  NowTime: function () {
    //获取年月日
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var day = time.getDate();

    //获取时分秒
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    //检查是否小于10
    h = this.check(h);
    m = this.check(m);
    s = this.check(s);

    let timeData = h + ":" + m + ":" + s;
    let dayData =  year + "年" + month + "月" + day + "日" 
    this.setData({
      time:timeData,
      day:dayData
    })
  //  document.getElementById("nowtime").innerHTML = "当前时间：" + year + "年" + month + "月" + day + "日  " + h + ":" + m + ":" + s;
  },
  //时间数字小于10，则在之前加个“0”补位。
  check: function (i) {
    //方法一，用三元运算符
    var num;
    i < 10 ? num = "0" + i : num = i;
    return num;

    //方法二，if语句判断
    //if(i<10){
    //    i="0"+i;
    //}
    //return i;
  },
  setProcess:function(){
    this.setData({
      setShow:!this.data.setShow
    })

   
  },
  setEvent:function(){
    this.setData({
      setModelShow:!this.data.setModelShow
    })
  },
  
  backEvent:function(){
    wx.navigateBack()
  },
  clockStyleSet:function(e){
    console.log(e)
    let id = e.currentTarget.dataset.styleid;
    let style = this.data.ClockstyleList[id];
    this.setData({
      Clockstyle:style
    })
  }
})