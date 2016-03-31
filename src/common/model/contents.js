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
        var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        for (let k in data['data']) {
	        /*
	        *注1：纯粹是为了模版显示
	        */
            let d=new Date(parseInt(data['data'][k]['time'])*1000);
            data['data'][k]['m'] = month[d.getUTCMonth()];
            data['data'][k]['d'] = formatDate("d", data['data'][k]['time']);
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
        let d=new Date(parseInt(data['time'])*1000);
        let month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];       
        data['m'] = month[d.getUTCMonth()];
        data['d'] = formatDate("d", data['time']);  
        return data;      
	}
}