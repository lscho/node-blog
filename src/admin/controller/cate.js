'use strict';

import Base from './base.js';

export default class extends Base {
    //添加
    async addAction() {
        if (this.isPost()) {
            let data={
                tid:1,
                name:this.post('category')
            }
            if(think.isEmpty(this.post('id')) || this.post('id')=="0"){
                //新增
                var rs=await this.model('categorys').add(data);
            }else{
                //更新
                var rs=await this.model('categorys').where({id:this.post('id')}).update(data);
            }
            if(rs){
                this.redirect("/admin/content/cate?err=1");
            }else{
                this.redirect("/admin/content/cate?err=2");
            }
        }else{
            this.redirect("/admin/content/cate?err=3");
        }
    }
    //获取单条心情
    async getAction(){
        let data=await this.model('categorys').where({id:this.get('id')}).find();
        this.json(data);
    }
    //删除
    async deleteAction(){
        let data=await this.model('categorys').where({id:this.get('id')}).delete();
        if(data){
            this.redirect("/admin/content/cate?err=1");
        }else{
            this.redirect("/admin/content/cate?err=2");
        }
    }
}