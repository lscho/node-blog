'use strict';

import Base from './base.js';

export default class extends Base {
    //首页
    async indexAction() {
            if (this.isGet()) {
                this.display();
            } else {
                let data = readFile(think.ROOT_PATH + "/src/common/config/config.json");
                data = {
                    title: this.post("title"),
                    keyword: this.post("keyword"),
                    description: this.post("description"),
                    url: this.post("url"),
                    duoshuo:this.post("duoshuo"),
                    bdpush:this.post('bdpush'),
                    qnbucket:this.post('qnbucket'),
                    qnaccess:this.post('qnaccess'),
                    qnsecret:this.post('qnsecret'),
                    copyright: trimStr(this.post('copyright')),
                    linkurl: trimStr(this.post('linkurl'))
                }
                //更新缓存
                this.cache("config",data);
                let rs = await writeFile(think.ROOT_PATH + "/src/common/config/config.json", JSON.stringify(data));
                if (rs) { //成功
                    return this.redirect("/admin/system");
                } else { //失败
                    return this.redirect("/admin/system");
                }
            }
        }
        //密码修改
    async changeAction() {
        if(this.isGet()){            
            this.display();          
        }else{
            let userInfo=await this.session('userInfo');
            let pwd=think.md5(this.post('password')+'eyblog');
            if(pwd==userInfo.pass){
                let user=this.post('user');
                let pwd1=this.post('password1');
                //修改密码
                let rs=await this.model('users')
                        .where({id:userInfo.id})
                        .update({pass:pwd,user:user});
                if(rs){
                    //修改成功
                    return this.redirect("/admin/system/change?err=1");
                }else{
                    //修改失败
                    return this.redirect("/admin/system/change?err=2");
                }
            }else{
                //密码不正确
                return this.redirect("/admin/system/change?err=3");
            }
        }
    }
    //访客记录
    async countAction(){
        if(this.isGet()){           
            let start=time()-86400||this.get('start');
            let end=time()||this.get('end');
            this.assign('start',formatDate("y-m-d h:i:s",start));
            this.assign('end',formatDate("y-m-d h:i:s",end));            
            let map={
                time:["between",start,end]
            }
            //列表
            let data=await this.model('count').getList(map,this.get('p')||1);
            this.assign('list',data);
            this.display();
        }
    }
}