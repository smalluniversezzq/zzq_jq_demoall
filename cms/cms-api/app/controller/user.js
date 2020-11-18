const BaseController = require("./base");
const svgCaptcha = require("svg-captcha");
const { sign } = require("jsonwebtoken")
class Controller extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = "user"
  }
  async captcha() {
    const { ctx } = this;
    const CaptchaObj = svgCaptcha.create();
    console.log(CaptchaObj, "svgCaptchaObj")
    ctx.session.captcha = CaptchaObj.text;
    ctx.set("Content-Type", "image/svg+xml");
    ctx.body = CaptchaObj.data
  }
  async checkCaptcha() {
    const { ctx } = this;
    const check = ctx.request.body.captcha;
    console.log(check)
    if (check === ctx.session.captcha) {
      ctx.body = {
        code: 0,
        mag: "验证成功"
      }
    } else {
      ctx.body = {
        code: 0,
        mag: "验证失败"
      }
    }
  }
  async signup() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    const result = await service.user.signup(data)
    if (result) {
      this.success("注册成功")
    } else {
      this.success("注册失败")
    }
    console.log(data)
  }
  async signin() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    const result = await service.user.signin(username, password);
    if(result && result.length >0){
      let u =  JSON.parse(JSON.stringify(result[0]))
      delete u.password;
      return this.success(sign(u,this.config.jwtSecret));
    }else{
      return this.error("登陆失败", 0);
    }
  }
}
module.exports = Controller;