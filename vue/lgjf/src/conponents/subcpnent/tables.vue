<template>
  <div id="tables">
      <div class="cantainer">
          <div class="logo_box lt">
              <div class="logo"></div>
          </div>
          <div class="tab_box rt dis_flex">
              <ul class="tab_box_listall dis_flex">
                  <li>首页</li>
                  <li>我要投资</li>
                  <li>安全保障</li>
                  <li>信息披露</li>
              </ul>
              <div class="myaccount ">
                  <i ></i>
                  <span>帮助中心</span>
              </div>
          </div>
      </div>
  </div>
</template>
<script> 
export default {
  data() {
    return {
        
    };
  },
  created(){
  },
  mounted() {
    window.onscroll = function() {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      t >= 40 ? $("#tables").addClass("addfloat") : ""
      t <= 40 ? $("#tables").removeClass("addfloat") : ""
    //   if (t >= 40) {
    //       console.log("true")
    //      $("#tables").addClass("addfloat");
    //   } else if (t <= 40) {
    //       console.log("false")
    //      $("#tables").removeClass("addfloat");
    //   }
    };
  },
  methods: {
  }
};
</script>

<style>
#tables {
  background: #fff;
  width: 100%;
  height: 100px;
}
.addfloat {
  position: fixed;
  top: 0px;
  z-index: 1000;
}
.cantainer {
  margin: 0 auto;
  width: 1010px;
  line-height: 40px;
  color: #fffffe;
  font-size: 14px;
}
.logo_box {
}
.logo {
  width: 380px;
  height: 100px;
  line-height: 100px;
  opacity: 0.6;
  background: url("../../../static/image/logo.png") no-repeat 0 center;
}
.tab_box {
  color: #000000;
  line-height: 100px;
  font-size: 16px;
}
.tab_box_listall li {
  margin-left: 10px;
}
.myaccount {
  position: relative;
  width: 120px;
  height: 30px;
  background: #00aaee;
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  margin-top: 35px;
  margin-left: 10px;
  color: #fff;
  font-size: 16px;
}
.myaccount > span {
  margin-left: 20px;
}
.myaccount > i {
  position: absolute;
  top: 4px;
  left: 15px;
  display: inline-block;
  width: 20px;
  height: 25px;
  background: url("../../../static/image/top.png") no-repeat -66px -56px;
}
</style>
