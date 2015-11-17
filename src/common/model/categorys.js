'use strict';
/**
 * categorys model
 */
export default class extends think.model.base {
	async getList(){
		let data=await this.select();
		return data;
	}
}