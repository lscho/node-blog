'use strict';
/*****项目函数库*******/

//时间戳格式化
global.formatDate = function(formatStr, fdate) {
		var fTime, fStr = 'ymdhis';
		if (!formatStr) {
			formatStr = "y-m-d h:i:s";
		}
		if (fdate) {
			fTime = new Date(parseInt(fdate) * 1000); //10位数时间戳
		} else {
			fTime = new Date();
		}
		var formatArr = [
			fTime.getFullYear().toString(), (fTime.getMonth() + 1).toString(),
			fTime.getDate().toString(),
			fTime.getHours().toString(),
			fTime.getMinutes().toString(),
			fTime.getSeconds().toString()
		]
		for (var i = 0; i < formatArr.length; i++) {
			formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
		}
		return formatStr;
	}
	//获取10位数时间戳
global.time = function(str) {
		var date;
		if (str) {
			date = new Date(Date.parse(str.replace(/-/g, "/")));
			date = (date.getTime()) / 1000;
		} else {
			date = (new Date().getTime()) / 1000
		}

		return parseInt(date);
	}
	//中文字符串截取
global.subStr = function(str, len, hasDot) {
	var newLength = 0;
	var newStr = "";
	var chineseRegex = /[^\x00-\xff]/g;
	var singleChar = "";
	var strLength = str.replace(chineseRegex, "**").length;
	for (var i = 0; i < strLength; i++) {
		singleChar = str.charAt(i).toString();
		if (singleChar.match(chineseRegex) != null) {
			newLength += 2;
		} else {
			newLength++;
		}
		if (newLength > len) {
			break;
		}
		newStr += singleChar;
	}

	if (hasDot && strLength > len) {
		newStr += "...";
	}
	return newStr;
}
	//过滤html标签
	global.removeTag=function(str) {
	str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
	str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
	//str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
	str = str.replace(/&nbsp;/ig,'');//去掉&nbsp;
	str = str.replace(/ /ig, ''); //去掉 
	return str;
}
	//读取文件
	global.readFile=function(file){
		var fs = think.require('fs'); //引入fs处理文件
		var data = fs.readFileSync(file);
		return data;
	}
	//写入文件
	global.writeFile=function(file,data,fn){
		var fs = think.require('fs'); //引入fs处理文件
		fs.writeFile(file,data,function(err){
			if(err){
				fn(false);
			}else{
				fn(true);
			}
		});
	}
	//去掉首尾空格
	global.trimStr=function (str){
		return str.replace(/(^\s*)|(\s*$)/g,"");
	}	
	//判断是否为数字
	global.isNum=function (s){
	    if(s!=null){
	        var r,re;
	        re = /\d*/i; //\d表示数字,*表示匹配多个数字
	        r = s.match(re);
	        return (r==s)?true:false;
	    }
	    return false;
	}	