const { Controller } = require('egg');
class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    let users = await service.user.list();
    ctx.body = users;
  }
  async create() {
    const { ctx, service } = this;
    let user = ctx.request.body;
    await service.user.create(user);
    ctx.body = {
      code: 0,
      msg: "成功"
    }
  }
  async update() {
    const { ctx, service } = this;
    console.log(ctx.request)
    let user = ctx.request.body;
    let id = ctx.params.id;
    console.log(user, "usercontrloller")
    user.id = id;
    await service.user.update(user);
    ctx.body = {
      code: 0,
      msg: "成功"
    }
  }
  async destroy() {
    const { ctx, service } = this;
    let id = ctx.params.id;
    await service.user.destroy(id);
    ctx.body = {
      code: 0,
      msg: "成功"
    }
  }
}
module.exports = UserController;