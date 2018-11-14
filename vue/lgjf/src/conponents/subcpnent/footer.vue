<template>
  <div id="footer">
      <div class="container">
          <div class="foot_top">
            <div class="info lt">
                <div class="foot_logo">
                </div>
                <div class="foot_tel_date">
                  客服热线（工作日9：00-12：00~14:00-18:00）
                </div>
                <div class="foot_tel">
                  400-000-5454
                </div>
            </div>
            <div class="inline lt"></div>
            <div class="code lt">
                <div class="orcode">
                    <img src="../../../static/image/2.jpg" alt="">
                    <p>微信</p>
                </div>
                   <div class="orcode">
                    <img src="../../../static/image/144.jpg" alt="">
                    <p>手机APP</p>
                </div>
            </div>
            <div class="inline lt"></div>
            <div class="nav lt ">
              <ul class="nan_list  ">
                <li>关于我们</li>
                <li>安全保障</li>
                <li>新手指引</li>
                <li>媒体报道</li>
                <li>招纳贤士</li>
                <li>帮助中心</li>
              </ul>
            </div>
          </div>
          <div class="foot_bottom">
            <p class="foot_text_style">
              Copyright © 2016 龙光互联网科技有限公司 版权所有 |
              <a href="http://www.miitbeian.gov.cn" target="_blank">备案号：粤ICP备16116071号</a> 
            </p>
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

<style scoped>
*{
  margin: 0;
  padding: 0;
}
  #footer{
    height: 300px;
    width: 100%;
    background: #5c5c5c;
  }
 .container{
    margin: 0 auto;
    width: 1010px;
    line-height: 40px;
    color: #fffffe;
    font-size: 14px;
    padding-top: 40px;
  }
  .foot_top{
    width: 100%;
    height: 170px;
    border-bottom: 1px solid #ddd;
  }
  .info{
    width: 33%;
    height: 130px;
  }
  .code{
    width: 30%;

  }
  .inline{
    width: 1px;
    height: 75px;
    background: #b4b4b4;
    margin-top: 40px;
  }
  .foot_logo{
    width: 300px;
    height: 40px;
    opacity: .6;
    background: url("../../../static/image/footer_logo.png") no-repeat center center;
    background-size: 100%;
  }
    .foot_tel_date{
    color:#fff;
    font-size: 14px;
  }
  .foot_tel{
    font-size: 22px;
    color: #fff;
  }
  .code {
    display: flex;
  }
  .orcode{
    height: 120px;
  }
  .code>.orcode{
    width: 100px;
    margin:0 15px 0 25px; 
  }
  .nav{
    width:35%;
  }
  .code>.orcode>img{
    width: 100%;
  }
  .code>.orcode>p{
    width: 100px;
    text-align: center;
  }
  .nan_list{
    margin-top: 40px;
  }
  .nan_list li{
    width: 70px;
    margin-left: 40px;
    float: left;
    line-height: 35px;
    font-size: 16px;
  }
  .foot_text_style{
    text-align: center;
  }
  .foot_text_style > a{
      color: #ffffff;
  }
</style>
