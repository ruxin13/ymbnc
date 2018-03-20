let constants = require("../../constants.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
		list: [{
			id: 1,
			name: "苹果",
			icon: "a_apple.png",
			praise: 20,
			view: 2560
		}, {
			id: 2,
			name: "香蕉",
			icon: "a_banana.png",
			praise: 20,
			view: 2560
		},{
			id: 3,
			name: "鸭梨",
			icon: "a_pear.png",
			praise: 20,
			view: 2560
		}, {
			id: 4,
			name: "提子",
			icon: "a_raisins.png",
			praise: 20,
			view: 2560
		}, {
			id: 5,
			name: "葡萄",
			icon: "a_grape.png",
			praise: 20,
			view: 2560
		}, {
			id: 6,
			name: "西柚",
			icon: "a_grapefruit.png",
			praise: 20,
			view: 2560
		}, {
			id: 7,
			name: "小番茄",
			icon: "a_cherrytomato.png",
			praise: 20,
			view: 2560
		}, {
			id: 8,
			name: "山竹",
			icon: "a_mangosteen.png",
			praise: 20,
			view: 2560
		}, {
			id: 9,
			name: "红枣",
			icon: "a_jujube.png",
			praise: 20,
			view: 2560
		}, {
			id: 10,
			name: "草莓",
			icon: "a_strawberry.png",
			praise: 20,
			view: 2560
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
   * 进入详情
   */
	bindGotoDetail: function (e) {
		let id = e.currentTarget.dataset.id;
		wx.navigateTo({
			url: `../detail/detail?id=${id}`,
		})
  },

	/**
   * 点击搜索
   */
	bindGotoSearch: function () {
		wx.navigateTo({
			url: '../search/search',
		})
	}
})