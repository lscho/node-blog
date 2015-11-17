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
      await this.getConfig();
    }else{
      return this.redirect("/login");
    }
  } 
  //获取配置
  async getConfig(){
      let data = readFile(think.ROOT_PATH + "/src/common/config/config.json");
      data = JSON.parse(data);
      this.assign("_web", data);  	
  } 
}