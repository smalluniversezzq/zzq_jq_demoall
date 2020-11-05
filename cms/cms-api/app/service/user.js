const { Service } = require('egg');
class UserService extends Service {
  async list() {
    const result = await this.app.mysql.select("user");
    return result;
  }
  async create(user) {
    const result = await this.app.mysql.insert("user", user);
    return result
  }
  async update(user) {
    console.log(user,"user")
    return await this.app.mysql.update("user", user);
  }
  async destroy(id) {
    console.log(id)
    const result = await this.app.mysql.delete("user", { id });
    return result
  }
}
module.exports = UserService;