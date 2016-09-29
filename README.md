
 [演示地址](https://hersface.com)  

## 简介  

 后端基于[Thinkjs 2.0](https://thinkjs.org/)构建，前端使用[gulp](http://www.gulpjs.com.cn/)构建

## 获取 

```
git clone https://github.com/eyblog/blog.git
```

## 配置  

数据库：[./src/common/config/db.js](https://github.com/eyblog/blog/blob/master/src/common/config/db.js)

## 启动 

```
npm install 
npm start
```

##编译

```
gulp 

npm run compile 
```

## 部署 

线上部署只需要把编译后的app文件夹上传即可

配置：[./pm2.json](https://github.com/eyblog/blog/blob/master/pm2.json)

将部署方式修改为production模式

```

pm2 startOrGracefulReload pm2.json 

```