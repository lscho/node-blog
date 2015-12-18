'use strict';

import Base from './base.js';

export default class extends Base {
    //首页
    async indexAction() {
            let page = this.get('p') ? this.get('p') : 1;
            let data = await this.model('contents').getList({}, page, 10);
            this.assign('list', data);
            this.display();
        }
        //文章添加
    async addAction() {
        if (this.isGet()) {
            //获取标签
            let tag = this.model('tags').getList();
            this.assign('tag', tag);
            //获取分类
            let category = this.model('categorys').getList();
            this.assign('category', category);
            //编辑或者新增
            if (this.get('id')) {
                let content = await this.model('contents').getOne({
                    'ey_contents.id': this.get('id')
                });
                this.assign('content', content);
            } else {
                this.assign('content', {});
            }
            //输出模版
            this.display();
        } else {
            let userInfo=this.session('userInfo');
            let data = {};
            data.title = this.post('title');
            data.cid = this.post('category');
            data.tid = this.post('tag');
            data.text = this.post('content');
            data.abscontent = subStr(removeTag(this.post('content')), 400);
            data.status = this.post('status') || 0;
            data.ispage = this.post('ispage') || 1;
            data.iscomment = this.post('iscomment') || 0;
            data.url = this.post('url');
            data.uid=userInfo.id;
            if(this.post('id')){    //编辑
                var rs=await this.model('contents').where({id:this.post('id')}).update(data);
            }else{                  //新增
                data.time=time();
                var rs=await this.model('contents').add(data);
            }
            if(rs){
                //操作成功
                this.redirect("/admin/content?err=1");
            }else{
                //操作失败
                this.redirect("/admin/content?err=2");
            }
        }
    }
    //删除
    async deleteAction(){
        let map={};
        if(this.isGet()){
            map.id=this.get('id');
        }else{
            let _post = think.require('querystring').parse(this.http.payload);
            map.id=['in',_post.id];
        }
        if(!think.isEmpty(map)){
            let rs=this.model('contents').where(map).delete();
            if(rs){
                this.redirect("/admin/content?err=1");
            }else{
                this.redirect("/admin/content?err=2");
            }
        }else{
            this.redirect("/admin/content?err=3");
        }
    }
    //分类管理
    async cateAction(){
        if(this.isGet()){
            let category =await this.model('categorys').getList();
            this.assign('category', category);
            this.display();                        
        }
    }
    //标签管理
    async tagAction(){
        if(this.isGet()){
            let tag =await this.model('tags').getList();
            this.assign('tag', tag);
            this.display();                        
        }
    }
    //心情管理
    async moodAction(){
        if(this.isGet()){
            let page=this.get('p')||1;
            let mood =await this.model('moods').getList({},page);
            this.assign('list', mood);
            this.display();                        
        }
    }    
}