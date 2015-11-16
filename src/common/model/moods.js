'use strict';
/**
 * moods model
 */
export default class extends think.model.base {
	//获取最新心情
	async getNew(){
		let data=await this.order('time desc').find();
		return data;
	}
	//获取心情列表
	async getList(map,page,nums){
		let data=await this.where(map)
                .page(page,nums||10)
                .field("ey_users.user,ey_moods.*")
                .join("ey_users ON ey_moods.uid=ey_users.id")
                .order("ey_moods.time desc")
                .countSelect();
        for(var k in data['data']){
            data['data'][k]['time']=formatDate("y-m-d h:i:s",data['data'][k]['time']);
        }
        return data;             		
	}
}