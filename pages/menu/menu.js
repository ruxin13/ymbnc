let constants = require("../../constants.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
		list: [{
				id: 1,
				name: "水果类",
				icon: "icon_fruit.png"
			}, {
				id: 2,
				name: "主食类",
				icon: "icon_staple.png"
			}, {
				id: 3,
				name: "肉类",
				icon: "icon_meat.png"
			}, {
				id: 4,
				name: "饮品类",
				icon: "icon_drinks.png"
			}, {
				id: 5,
				name: "中药类",
				icon: "icon_cmed.png"
			}, {
				id: 6,
				name: "乳制品",
				icon: "icon_milk.png"
			}, {
				id: 7,
				name: "零食类",
				icon: "icon_snacks.png"
			}, {
				id: 8,
				name: "海鲜类",
				icon: "icon_seafood.png"
			}, {
				id: 9,
				name: "坚果类",
				icon: "icon_nut.png"
			}, {
				id: 10,
				name: "调味料",
				icon: "icon_condiment.png"
			}, {
				id: 11,
				name: "蔬菜类",
				icon: "icon_veg.png"
			}, {
				id: 12,
				name: "蘑菇类",
				icon: "icon_mus.png"
			}],
			CDN_URL: constants.CDN_URL
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
   * 点击搜索
   */
	bindGotoSearch: function () {
		wx.navigateTo({
			url: '../search/search',
		})
  },

	/**
   * 点击按钮
   */
	bindGotoNextLevel: function(e) {
		let id = e.currentTarget.dataset.id;
		wx.navigateTo({
			url: `../list/list?id=${id}`,
		})
	},
})