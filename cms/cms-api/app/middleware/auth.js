const { verify } = require("jsonwebtoken");
function vewrifyToken(token, secret) {
  return new Promise(function (resolve, reject) {
    verify(token, secret, function (error, payload) {
      if (error) {
        reject(error)
      } else {
        resolve(payload);
      }
    });
  })
}
module.exports = (options, app) => {
  return async function (ctx, next) {
    const authUrls = options.authUrls;
    if (authUrls.includes(ctx.uurl)) {
      const token = ctx.get("token")
      if (token) {
        try {
          const user = await vewrifyToken(token, app.config.jwtSecret);
          ctx.session.user = user;
          await next();
        } catch (error) {
          ctx.status = 403;
          ctx.body = "验证失败"
        }
      } else {
        ctx.status = 401;
        ctx.body = "没有权限"
      }
    } else {
      await next();
    }
  }
}