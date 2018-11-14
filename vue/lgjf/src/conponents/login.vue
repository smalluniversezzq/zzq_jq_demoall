<template>
  <div id="login">
      <Hder></Hder>
      <Table></Table>
        <div class="logins">
          <div class="container">
            <div class="login_content">
              <div class="login_box">
                  <div class="login_left lt">
                      <div class="login_logo">
                        <img src="../../static/image/login_img.png" alt="">
                      </div>
                      <div class="login_text">
                          <p class="login_text_title">
                              轻松登录&nbsp;安心投资
                          </p>
                          <div class="login_text_content">
                              龙光集团旗下互联网金融信息服务平台
                          </div>
                      </div>
                  </div>
                  <div class="online lt">
                  </div>
                  <div class="login_right lt">
                      <div class="login_title marbum">
                          <div class="lt account">
                              账户登录
                          </div>
                          <div class="immediately_login rt">
                              没有账户？
                            <a href="#">立即登录</a>
                          </div>
                      </div>
                      <div class="int_text_box marbum">
                        <i class="int_logo int_user"></i>
                        <input class="int_text" type="text" placeholder="用户名/邮箱/手机号">
                      </div>
                      <div class="int_text_box marbum">
                        <i class="int_logo int_paddword"></i>
                        <input class="int_text" type="password" placeholder="登录密码">
                      </div>
                      <div class="forget marbum">
                        <div class="forget_lt lt">
                            <input type="checkbox">
                            <span>记住用户名</span>
                        </div>
                        <div class="forget_rt rt">
                          <a href="#">忘记密码</a>
                        </div>
                      </div>
                      <div class="login_btn">
                          <button class="btn">立即登录</button>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      <Footer></Footer>
  </div>
</template>
<script>
import Hder from "./subcpnent/header.vue";
import Table from "./subcpnent/tables.vue";
import Alert from "./subcpnent/alert.vue";
import Footer from "./subcpnent/footer.vue";
export default {
  components: {
    Hder,
    Table,
    Alert,
    Footer
  },
  data() {
    return {};
  },
  created() {
    document.body.style.cssText = "background:#f5f5f5";
  }
};
</script>

<style scoped>
/* input,button,a {outline:0 none !important;} */
.logins {
  width: 100%;
  min-height: 400px;
  /* background: rgba(red, green, blue, 0.1); */
}
.container {
  margin: 0 auto;
  width: 1010px;
}
.login_content {
  width: 100%;
  margin: 50px 0;
  background: #ffffff;
  min-height: 460px;
}
.login_box {
  width: 100%;
  height: 410px;
}
.login_logo {
  width: 246px;
  height: 270px;
  margin: 0 auto;
}
.login_logo > img {
  width: 100%;
}
.login_left {
  width: 580px;
  margin: 0 auto;
  margin-top: 50px;
}
.login_text {
  margin: 0 auto;
}
.login_right {
  width: 350px;
  margin-left: 40px;
  margin-top: 50px;
}
.login_text {
  margin-top: 20px;
}
.login_text_title {
  font-size: 28px;
  color: #000;
  text-align: center;
}
.login_text_content {
  text-align: center;
  font-size: 14px;
  color: #000;
}
.online {
  width: 1px;
  height: 320px;
  background: #eaeaea;
  margin-top: 50px;
}
.login_title{
  height: 40px;
}
.account {
  font-size: 22px;
  color: #000;
}
.immediately_login {
  color: #000;
}
.immediately_login > a {
  color: #0f91dd;
}
.int_text_box {
  width: 100%;
  height: 40px;
  position: relative;
}
.int_text{
  width: 300px;
  border: 1px solid #e6e6e6;
  height: 40px;
  padding:8px 0 8px 50px;
}
.int_text:focus{
  width: 300px;
  border: 1px solid #e6e6e6;
  height: 40px;
  padding:8px 0 8px 50px;
  outline: none;
}
.marbum{
  margin-bottom: 40px;
}
.int_logo{
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  background: red; 
  top: 15px;
  left: 15px;
}
.int_user{
  background: url("../../static/image/login_form_user.png") no-repeat;
}
.int_paddword{
  background: url("../../static/image/login_form_password.png") no-repeat
}
.forget{
  color: #000;
  height: 40px;
}
.forget_lt>input{
  vertical-align: middle;
}
.forget_rt a{
  color:#0f91dd;

}
.btn{
  width: 300px;
  height: 50px;
  background: #0f91dd;
  color: #fff;
  border-radius:5px;
  border: none;
  cursor: pointer;
  outline: 0 none;
}
.login_btn{
  text-align: center
}

</style>
