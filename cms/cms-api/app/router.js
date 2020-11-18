'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 注册登录
  router.post('/user/signup', controller.user.signup);//注册
  router.post('/user/signin', controller.user.signin);//登录
  router.get('/', controller.home.index);
  router.resources('user', '/api/user', controller.user);
  router.resources('role', '/api/role', controller.role);
  router.resources('roleUser', '/api/roleUser', controller.roleUser);
  router.resources('roleResource', '/api/roleResource', controller.roleResource);
  router.resources('resource', '/api/resource', controller.resource);
  // 验证码
  router.get("/api/user/captcha", controller.user.captcha);
  router.post("/api/user/checkCaptcha", controller.user.checkCaptcha);

  //角色关系
  router.get("/api/role/getResource", controller.role.getResource); //获取所有资源
  router.post("/api/role/setResource", controller.role.setResource); // 设置角色和资源的关系

  // 登录后才能访问  黑名单
  router.get("/api/role/getUser", controller.role.getUser);   //获取所有用户
  router.post("/api/role/setUser", controller.role.setUser);   //设置用户和角色的关系


};
