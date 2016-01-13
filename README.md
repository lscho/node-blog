
 [演示地址](http://www.eyblog.com)  

 ## 简介  

 后端基于[Thinkjs 2.0](https://thinkjs.org/)构建，前端使用[gulp](http://www.gulpjs.com.cn/)构建

## 获取 

```
git clone https://github.com/eyblog/easyou-v2.git
```

## 配置  

数据库：[./src/common/config/db.js](https://github.com/eyblog/easyou-v2/blob/master/src/common/config/db.js)

## 启动 

```
npm install 
npm start
```

## 部署 

配置：[./pm2.json](https://github.com/eyblog/easyou-v2/blob/master/pm2.json) 


```
gulp 

pm2 startOrGracefulReload pm2.json 

```
## 线上更新
```
npm run compile 

pm2 restart

```