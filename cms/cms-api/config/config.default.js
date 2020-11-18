/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1604557379397_735';

  // add your middleware config here
  //中间件
  config.middleware = [
    "auth",
  ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置 跨域请求
  userConfig.security = {
    csrf: false,
    domainWhiteList:["http://localhost:8000"]
  }
  config.auth = {
    authUrls:[
      "/api/role/getUser",
      "/api/role/setUser",
    ]
  }
  // 配置tioken
  userConfig.jwtSecret = "zhuzhiqiang"
  config.mysql = {
    // 单数据库信息配置
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '123456',
        // 数据库名
        database: 'cms',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    };

  return {
    ...config,
    ...userConfig,
  };
};
