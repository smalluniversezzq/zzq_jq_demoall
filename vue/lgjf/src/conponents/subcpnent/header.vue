<template>
  <div id="header">
      <div class="heads">
          <div class="container">
              <div class="title_left lt dis_flex">
                  <div class="title_tel">
                      客服电话：15003873032
                  </div>
                  <div class="title_help">
                      <span>关注我们：</span>
                      <i>11</i>
                      <span>帮助中心</span>
                  </div>
              </div>
              <div class="title_right rt ">
                  <span>登录</span>
                  <span>注册</span>
                  <span>帮助中心</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>

  .heads{
    height: 40px;
    width: 100%;
    background: #2f3640;
  }
  .container{
    margin: 0 auto;
    width: 1010px;
    line-height: 40px;
    color: #fffffe;
    font-size: 14px;
  }
  .title_left{
    width: 50%;
    
  }
  .title_tel{
    margin-right: 30px;
  }
  .title_right >span:nth-child(2),.title_right >span:nth-child(3){
    margin-left: 10px;
  }
  .title_help>span:nth-child(3){
    margin-left: 10px;
  }

</style>
