'use strict';

import Base from './base.js';

export default class extends Base {
  //首页
  async indexAction(){
    this.assign("model","index");
    this.assign("action","index");    
    //文章
    let content=await this.model('contents').count();
    this.assign('content',content);
    //心情
    let mood=await this.model('moods').count();
    this.assign('mood',mood);
    //留言
    let comment=await this.model('comments').count();
    this.assign('comment',comment);
    //最新心情
    let newmood=await this.model('moods').getNew();
    this.assign('newMood',newmood);                   
    this.display();    
  }
  //退出登录
  async loginoutAction(){
    await this.session('userInfo',"");
    this.redirect("/");
  }
}