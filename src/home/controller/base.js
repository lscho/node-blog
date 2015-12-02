'use strict';

export default class extends think.controller.base {
  init(http) {
      super.init(http); //调用父类的init方法     
    }
    //前置操作
  async __before() {
      //获取配置
      await this.getConfig();
      //最新心情
      let newmood = await this.model('moods').getNew();
      this.assign('newmood', newmood);
      //标签
      let tag = await this.model('tags').getList();
      this.assign('tag', tag);
      //访客统计[非pjax请求记录]
      if (!this.header('x-pjax')) {
        this.count();
      }
    }
    //获取配置
  async getConfig() {
      let data = readFile(think.ROOT_PATH + "/src/common/config/config.json");
      data = JSON.parse(data);
      this.assign("_web", data);
    }
    //访客统计
  async count() {
    let date = Date();
    let http = this.http;
    //判断24小时内有没有访问
    let map= {
      ip: this.ip(),
      time: [">", time() - 86400]
    }
    let rs = await this.model('count').where(map).count();
    if (rs) {
      //增加来访次数
      this.model('count').where(map).increment("num", 1);
    } else {
      //新增浏览记录
      let data = {
        ip: this.ip(),
        time: time(),
        url: http.url,
        userAgent: this.userAgent(),
        Referer: this.referrer(),
        num:1
      }
      this.model('count').add(data);
    }
  }
}