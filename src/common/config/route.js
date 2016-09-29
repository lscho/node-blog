export default [
    ["page/:id", "index/page"],
	["p/:page", "index/index"],
	["mood/:page", "mood/index"],
	["search", "index/index"],
	["login", "index/login"],
	["cate/:cate", "index/index"],
	["tag/:tag", "index/index"],
	["about", "index/page?id=2"],
	["archives","index/archives"],
	["error","index/error"]
];