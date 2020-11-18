const BaseService = require('./base');
class Service extends BaseService {
  constructor(...args) {
    super(...args)
    this.entity = "user"
  }
  async signup(data){
    const { app } =this;
    const result = await app.mysql.insert("user",data);
    console.log(result)
    if(result.affectedRows > 0){
      return true
    }else{
      return false
    }
  }
  async signin(username,password){
    const { app } = this;
    const result = await app.mysql.select("user",{
      where: { username , password },
      limit: 1,
    });
    console.log(result,"返回结果")
    return result
  }
}
module.exports = Service;