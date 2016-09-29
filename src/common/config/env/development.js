'use strict';
//开发环境配置
export default {
	view:{
		root_path: think.ROOT_PATH + "/view/development", //视图文件的根目录
	},
	db:{
	 type: 'mysql',
	  host: '127.0.0.1',
	  port: '3306',
	  database: 'ey',
	  user: 'root',
	  password: '123456',
	  prefix: 'ey_',
	  encoding: 'utf8',
	  nums_per_page: 10,
	  log_sql: true,
	  log_connect: true,
	  cache: {
	    on: true,
	    type: '',
	    timeout: 3600
	  }
	}
};