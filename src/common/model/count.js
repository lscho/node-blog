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
		let ip=[];
        for(var k in data['data']){
            data['data'][k]['time']=formatDate("y-m-d h:i:s",data['data'][k]['time']);
            if(!inArray(ip,data['data'][k]['ip'])){
            	ip[k]=data['data'][k]['ip'];
            } 
        }
        data.ip=ip.length;
		return data;
	}
}