//自定义路由规则
module.exports = [
    ["page/:id", "index/page"],
	["p/:page", "index/index"],
	["mood/:page", "mood/index"],
	["search", "index/index"],
	["login", "index/login"],
	["cate/:cate", "index/index"],
	["tag/:tag", "index/index"],
	["about", "index/page?id=1"],
	["comment", "index/page?id=2"],
	["archives","index/archives"]
]