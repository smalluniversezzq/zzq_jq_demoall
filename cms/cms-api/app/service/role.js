const BaseService = require('./base');
class Service extends BaseService {
  constructor(...args) {
    super(...args)
    this.entity = "role";
  }
  async getResource() {
    const { app } = this;
    const resources = await app.mysql.select("resource");
    const rootMenus = []
    const map = {}
    resources.forEach(item => {
      map[item.id] = item
      if (item.parent_id === 0) {
        item.children = []
        rootMenus.push(item)
      } else {
        map[item.parent_id].children.push(item)
      }
    });
    console.log(map)
    return rootMenus
  }
  async setResource({ roleId, resourceId }) {
    const { app } = this;
    console.log(roleId)
    await app.mysql.query("DELETE FROM role_resource WHERE role_id=?", [roleId]);
    for (var i = 0; i < resourceId.length; i++) {
      console.log(resourceId[i])
      const resourceIds = resourceId[i];
      await app.mysql.insert("role_resource", {
        role_id: roleId,
        resource_id:resourceIds
      })
    }
  }
  async getUser() {
    const { app } = this;
    const resources = await app.mysql.select("resource");
    return resources
  }
  async setUser({ roleId, userId }) {
    const { app } = this;
    console.log(roleId)
    await app.mysql.query("DELETE FROM role_user WHERE role_id=?", [roleId]);
    for (var i = 0; i < userId.length; i++) {
      console.log(userId[i])
      const userIds = userId[i];
      await app.mysql.insert("role_user", {
        role_id: roleId,
        user_id:userIds
      })
    }
  }


}

module.exports = Service;