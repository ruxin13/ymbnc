// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
	data: {
		inputKeywords: "",
		hotWords1: [{
			id: 1,
			name: "大闸蟹"
		}, {
			id: 2,
			name: "豆腐"
		}, {
			id: 3,
			name: "猪脑"
		}, {
			id: 4,
			name: "牛肉"
		}, {
			id: 5,
			name: "生蒜"
		}, {
			id: 6,
			name: "奶茶"
		}, {
			id: 7,
			name: "小龙虾"
		}, {
			id: 8,
			name: "牛奶"
		}, {
			id: 9,
			name: "白酒"
		}],
		hotWords2: [{
			id: 1,
			name: "大闸蟹"
		}, {
			id: 2,
			name: "豆腐"
		}, {
			id: 3,
			name: "猪脑"
		}, {
			id: 4,
			name: "牛肉"
		}, {
			id: 5,
			name: "生蒜"
		}, {
			id: 6,
			name: "奶茶"
		}, {
			id: 7,
			name: "小龙虾"
		}, {
			id: 8,
			name: "牛奶"
		}, {
			id: 9,
			name: "白酒"
		}],

		hideHotSearch: false

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
   * input输入同步
   */
	bindInputChange: function (e) {
		let keywords = e.detail.value;
		this.setData({
			inputKeywords: keywords
		});
		if (keywords) {
			this.setData({
				hideHotSearch: true
			})
		} else {
			this.setData({
				hideHotSearch: false
			})
		}
	},

	/**
   * 点击关键字搜索
   */
	bindWordsSearch: function (e) {
		let words = e.currentTarget.dataset.words;
		this.setData({
			inputKeywords: words
		});
		searchTo(words);
	},

	/**
   * 搜索事件绑定
   */
	startSearch: function () {
		let that = this;
		searchTo(that.data.inputKeywords);
	}
})

// 搜索
function searchTo (keywords) {
	if (keywords) {
		console.log(keywords);
	} else {
		console.log("请输入关键字搜索");
	}
}