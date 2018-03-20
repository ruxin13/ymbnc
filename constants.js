


// 请求的基础数据
let commonData = {
	"s": new Date().getTime(),
	"b": "1.0.1",
	"g": wx.getStorageSync("guid"),
	"v": {}
};

// 环境配置 -- dev || prod
let ENV = "dev";

let constants = {

	ENV: ENV,

	// 小程序配置
	app: {
		APPID: "wx9b2ed397aa8981f9",
		SECRET: "d6cd3ba9796feae0b509dbdc30f206e7"
	},

	// 资源cdn地址
	CDN_URL: ENV === "dev" ? "https://p.ihuada.com/mc/dev" : "https://p.ihuada.com/mc/prod",

	// 服务器地址配置
	SERVER_URL: "https://x.ihuada.com",

	// API
	API: {
		userLogin (user, pass) {
			return Object.assign(commonData, {
				"c": constants.SERVER_URL + "/login",
				"v": {"user": user, "pass": pass} 
			})
		},

	}
}

module.exports = constants;