let constants = require("../../constants.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
			CDN_URL: constants.CDN_URL
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		wx.showLoading({
			title: '加载中……',
		})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
		setTimeout(function () {
			wx.hideLoading();
			wx.redirectTo({
				url: '../menu/menu',
			})
		}, 2000);
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
  
  }
})