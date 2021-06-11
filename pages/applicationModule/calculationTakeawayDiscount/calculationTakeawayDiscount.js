// pages/applicationModule/calculationTakeawayDiscount/calculationTakeawayDiscount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    OrderPreferential: "",
    extraCharges: "",
    sum: "",
    PriceArrty:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
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


  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    } else {
      // 来自菜单栏转发按钮
      console.log(res.target)
    }
    return {
      title: '随机数生成',
      // 成功的回调
      success: (res) => { },
      // 失败的回调
      fail: (res) => { },
      // 无论成功与否的回调
      complete: (res) => { }
    }
  },
  inputOrderPreferential(e) {
    this.data.OrderPreferential = Number(e.detail.value)
  },
  inputExtraCharges(e) {
    this.data.extraCharges = Number(e.detail.value)
  },
  inputSum(e) {
    this.data.sum = e.detail.value
  },
  startCalculation() {
    let discount =  this.data.OrderPreferential
    let additionalCosts = this.data.extraCharges
    let commodityPrice = this.data.sum

    let commodityPriceArrty = commodityPrice.split(",");

    let actualDiscount = discount - additionalCosts;
    let totalPrices = 0
    for (let Prices in commodityPriceArrty) {
      totalPrices += Number(commodityPriceArrty[Prices])
    }

    let PriceArrty = []
    for (const i in commodityPriceArrty) {
      let Price = {
        originalCost:commodityPriceArrty[i],
        amountPaid:(commodityPriceArrty[i]-((commodityPriceArrty[i] / totalPrices) * actualDiscount)).toFixed(1)
      }
      PriceArrty.push(Price)
    }

    this.setData({
      PriceArrty
    })
 
  },
})