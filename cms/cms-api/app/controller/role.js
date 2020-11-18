const BaseController = require("./base");

class Controller extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = "role"
  }
  async getResource() {
    const { ctx, service } = this;
    const result = await service.role.getResource();
    ctx.body = result;
  }
  async setResource() {
    const { ctx, service } = this;
    const body = ctx.request.body; // { roleId : 1 , resourceId:[1,2,3]}
    await service.role.setResource(body)
    ctx.body = {
      code: 0,
      mag: "授权成功"
    }
  }
  async getUser() {
    const { ctx, service } = this;
    console.log(ctx.service,"ctx.service");
    const result = await service.role.getUser();
    ctx.body = result;
  }
  async setUser() {
    const { ctx, service } = this;
    console.log(ctx.service,"ctx.service");
    const body = ctx.request.body; // { roleId : 1 , userId:[1,2,3]}
    console.log(body, "setUser")
    await service.role.setUser(body)
    ctx.body = {
      code: 0,
      mag: "授权成功"
    }
  }
}
module.exports = Controller;