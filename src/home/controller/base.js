'use strict';

export default class extends think.controller.base {
  init(http){
    super.init(http); //调用父类的init方法     
  }
  //前置操作
  async __before() {
  	//获取配置
  	await this.getConfig();
  	//最新心情
    let newmood =await this.model('moods').getNew();
    this.assign('newmood',newmood);
    //标签
    let tag=await this.model('tags').getList();
    this.assign('tag',tag);
  } 
  //获取配置
  async getConfig(){
      var self = this;
      var data = readFile(think.ROOT_PATH + "/src/common/config/config.json");
      data = JSON.parse(data);
      self.assign("_web", data);  	
  } 
}