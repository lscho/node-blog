'use strict';

import Base from './base.js';

export default class extends Base {
    //添加
    async addAction() {
        if (this.isPost()) {
            let data={
                tid:1,
                name:this.post('tag')
            }
            if(think.isEmpty(this.post('id')) || this.post('id')=="0"){
                //新增
                var rs=await this.model('tags').add(data);
            }else{
                //更新
                var rs=await this.model('tags').where({id:this.post('id')}).update(data);
            }
            //更新缓存
            let tag=await this.model('tags').getList();
            this.cache("tags",tag);
            if(rs){
                this.redirect("/admin/content/tag?err=1");
            }else{
                this.redirect("/admin/content/tag?err=2");
            }
        }else{
            this.redirect("/admin/content/tag?err=3");
        }
    }
    //获取单条心情
    async getAction(){
        let data=await this.model('tags').where({id:this.get('id')}).find();
        this.json(data);
    }
    //删除
    async deleteAction(){
        let data=await this.model('tags').where({id:this.get('id')}).delete();
        if(data){
            this.redirect("/admin/content/tag?err=1");
        }else{
            this.redirect("/admin/content/tag?err=2");
        }
    }
}