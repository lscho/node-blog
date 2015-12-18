'use strict';

import Base from './base.js';

export default class extends Base {
    //心情添加
    async addAction() {
        if (this.isPost()) {
            let userInfo=await this.session('userInfo');
            let data={
                uid:userInfo.id,
                mood:this.post('mood'),
                time:time()
            }
            if(think.isEmpty(this.post('id')) || this.post('id')=="0"){
                //新增
                var rs=await this.model('moods').add(data);
            }else{
                //更新
                var rs=await this.model('moods').where({id:this.post('id')}).update(data);
            }
            if(rs){
                this.redirect("/admin/content/mood?err=1");
            }else{
                this.redirect("/admin/content/mood?err=2");
            }
        }else{
            this.redirect("/admin/content/mood?err=3");
        }
    }
    //获取单条心情
    async getAction(){
        let data=await this.model('moods').where({id:this.get('id')}).find();
        this.json(data);
    }
    //删除
    async deleteAction(){
        let data=await this.model('moods').where({id:this.get('id')}).delete();
        if(data){
            this.redirect("/admin/content/mood?err=1");
        }else{
            this.redirect("/admin/content/mood?err=2");
        }
    }    
}