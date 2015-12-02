'use strict';
/**
 * contents model
 */
export default class extends think.model.base {
	//获取文章列表
	async getList(map,page,nums){
		let data=await this.where(map)
                .page(page, nums||10)
                .join("ey_users ON ey_contents.uid=ey_users.id")
                .join("ey_tags ON ey_contents.tid=ey_tags.id")
                .field("ey_contents.*,ey_users.user,ey_users.img,ey_tags.name as tag")
                .order("ey_contents.id desc")
                .countSelect();
         //数据处理
        for (let k in data['data']) {
	        /*
	        *注1：纯粹是为了模版显示
	        */        	
            data['data'][k]['m'] = formatDate("m", data['data'][k]['time']);
            data['data'][k]['m']=(data['data'][k]['m']>9)?data['data'][k]['m']:"0"+data['data'][k]['m'];
            data['data'][k]['d'] = formatDate("d", data['data'][k]['time']);
            data['data'][k]['d']=(data['data'][k]['d']>9)?data['data'][k]['d']:"0"+data['data'][k]['d'];
            data['data'][k]['time'] = formatDate("y-m-d h:i:s", data['data'][k]['time']);
        }             		
		return data;
	}
	async getOne(map){
		let data=await this.where(map)
				.join("ey_tags ON ey_contents.tid=ey_tags.id")
                .field("ey_contents.*,ey_tags.name as tag")
                .find();
        //注1
        data['d'] = formatDate("d", data['time']);
        data['m'] = formatDate("m", data['time']);  
        return data;      
	}
}