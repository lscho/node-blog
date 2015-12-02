'use strict';
/**
 * moods model
 */
export default class extends think.model.base {
	//获取访客记录
	async getList(map,page,nums){
		let data=await this.where(map)
			.page(page, nums||20)
			.order('time desc')
			.countSelect();
        for(var k in data['data']){
            data['data'][k]['time']=formatDate("y-m-d h:i:s",data['data'][k]['time']);
        }			
        data.pv=await this.where(map).sum("num");
		return data;
	}
}