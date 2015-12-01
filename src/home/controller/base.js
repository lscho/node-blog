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
    //访客统计[非pjax请求记录]
    if(!this.header('x-pjax')){
      this.count();
    }
  } 
  //获取配置
  async getConfig(){
      let data = readFile(think.ROOT_PATH + "/src/common/config/config.json");
      data = JSON.parse(data);
      this.assign("_web", data);  	
  }
  //访客统计
  async count(){
    let date=Date();
    let http = this.http;    
    let data={
      ip:this.ip(),
      time:time(),
      url:http.url,
      userAgent:this.userAgent(),
      Referer:this.referrer()
    }
    this.model('count').add(data);
  }
}