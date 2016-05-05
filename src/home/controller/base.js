'use strict';

export default class extends think.controller.base {
  init(http) {
      super.init(http); //调用父类的init方法     
    }
    //前置操作
  async __before() {
      //获取配置
      let config = await this.cache("config", () => {
        return this.getConfig();
      });
      this.assign("_web", config);
      //最新心情
      let newmood = await this.cache("moods", () => {
        return this.model("moods").getNew();
      });
      this.assign('newmood', newmood);
      //标签
      let tag = await this.cache("tags", () => {
        return this.model("tags").getList();
      });
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
      return data;
    }
    //访客统计
  async count() {
    let date = Date();
    let http = this.http;
    let userAgent = this.userAgent();
    //过滤蜘蛛
    let is_spider = false;
    let spider = ['Googlebot', 'Yahoo! Slurp', 'msnbot', 'YodaoBot','fast-webcrawler', 'Gaisbot', 
    'ia_archiver', 'altavista', 'Inktomi slurp','Spider','spider','bingbot/2.0','MJ12bot/v1.4.5'];
    for (let i in spider) {
      if (userAgent.indexOf(spider[i]) > 0) {
        is_spider = true;
      }
    }
    if (!is_spider) {
      //判断24小时内有没有访问
      let map = {
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
          userAgent: userAgent,
          Referer: this.referrer(),
          num: 1
        }
        this.model('count').add(data);
      }
    }
  }
}