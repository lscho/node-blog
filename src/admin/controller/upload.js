'use strict';

import Base from './base.js';

export default class extends Base {
    //首页
    async indexAction() {
        let file = this.file("file");
        let fs = think.require('fs'); //引入fs处理文件 
        let path = think.require('path'); //引入fs处理文件 
        //文件名处理
        let arr = [];
        let filename = path.basename(file.path);
        //从临时目录移动出来
        let uploadPath = think.RESOURCE_PATH + '/static/upload';
        think.mkdir(uploadPath);
        let basename=think.md5(filename)+path.extname(file.path);
        fs.renameSync(file.path, uploadPath + '/' + basename);
        this.end('/static/upload/' + basename);
    }
}