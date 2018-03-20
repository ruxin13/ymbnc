
let constants = require("../../constants.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
		id: "",
		CDN_URL: constants.CDN_URL,
		img_praise: "praise_g.png", // 点赞的图标
		num_praise: 2345 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		this.setData({
			id: options.id
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
		return {
			title: "菠萝到底能不能吃？",
			path: "/pages/detail/detail？id=boluo",
			success: function () {}
		}
  },

	/**
   * 用户点赞
   */
	bindTapPraise: function () {
		let that = this;
		this.setData({
			img_praise: "praise_r.png",
			num_praise: that.data.num_praise + 1
		})
	}
})