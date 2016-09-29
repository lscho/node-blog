'use strict';
//线上环境配置
export default {
	proxy_on: true,
 	view:{
		root_path: think.ROOT_PATH + "/view/production", //视图文件的根目录
	},
	db:{
	 type: 'mysql',
	  host: '127.0.0.1',
	  port: '3306',
	  database: 'hersface',
	  user: 'root',
	  password: 'Qq3133430',
	  prefix: 'ey_',
	  encoding: 'utf8',
	  nums_per_page: 10,
	  log_sql: false,
	  log_connect: false,
	  cache: {
	    on: true,
	    type: '',
	    timeout: 3600
	  }
	}	
};