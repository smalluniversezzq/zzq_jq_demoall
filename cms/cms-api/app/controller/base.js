const { Controller } = require('egg');
class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      code: 0,
      data
    }
  }
  error(err) {
    this.ctx.body = {
      code: 1,
      msg: err
    }
  }
  isNaNFn(data, num) {
    return isNaN(data) ? num : parseInt(data)
  }
  async index() {
    const { ctx, service } = this;
    const { pageNum, pageSize, ...where } = ctx.query;
    console.log(pageNum, pageSize, where)
    let data = await service[this.entity].list(this.isNaNFn(pageNum, 1), this.isNaNFn(pageSize, 3), where);
    ctx.body = data;
  }
  async create() {
    const { ctx, service } = this;
    let entity = ctx.request.body;
    const result = await service[this.entity].create(entity);
    return result ? this.success("成功") : this.error("失败");
  }
  async update() {
    const { ctx, service } = this;
    console.log(ctx.request)
    let entity = ctx.request.body;
    let id = ctx.params.id;
    console.log(entity, "BaseController", this.entity)
    entity.id = id;
    const result = await service[this.entity].update(entity);
    return result ? this.success("成功") : this.error("更新失败");
  }
  async destroy() {
    const { ctx, service } = this;
    let id = ctx.params.id;
    const result = await service[this.entity].destroy(id);
    return result ? this.success("成功") : this.error("更新失败");
  }
}
module.exports = BaseController;