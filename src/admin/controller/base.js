'use strict';

export default class extends think.controller.base {
  init(http){
    super.init(http); //调用父类的init方法     
  }
  //前置操作
  async __before() {
    //检测登录状态
    let userInfo=await this.session('userInfo');
    if(!think.isEmpty(userInfo)){     
      this.assign('title','后台管理');
      this.assign('userInfo',userInfo);
      //获取配置
      let config=await this.cache('config',()=>{
        return this.model('web').getField('content');
      });
      this.assign('_web',JSON.parse(config));
    }else{
      return this.redirect("/login");
    }
  }
}