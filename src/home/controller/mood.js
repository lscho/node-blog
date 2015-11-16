'use strict';

import Base from './base.js';

export default class extends Base {
	async indexAction(){
		this.assign('title','心情');
 		//获取心情列表
 		let page=this.get('page')?this.get('page'):1;
 		let data=await this.model('moods').getList({},page);
		this.assign("list",data);
		this.display();		
	}
}