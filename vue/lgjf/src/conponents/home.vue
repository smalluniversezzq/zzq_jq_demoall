<template>
  <div id="home">
      <Hder></Hder>
      <Table></Table>
      <Swiper></Swiper>
      <div class="containers">
          <div class="notice " >
              <div class="newnotice lt">
                <i class="notice_logo"></i>
                <span>最新公告</span>
              </div>
              <div class="oneline lt" ></div>
              <div class="ov_hidden lt">
                <ul  id="carList" class="carousel" >
                    <li class="carousel_list" v-for="item in carouselList" :key="item">
                      <span>{{item}}</span>
                    </li>
                </ul>
              </div>
              <div class="notice_right rt">更多公告</div>
          </div>
          <!-- 投资金额 -->
          <div class="investment ">
              <ul class="dis_play investment_width">
                <li class="lt invest_list dis_flex " v-for="(items,inx) in Investment" :key="inx.id">
                  <span class="invest_text">{{inx}}</span>
                  <span class="invest_num">{{items | focus(items)}}</span>
                  <i class="inline"></i>
                </li>
              </ul>
              <div class="more rt" >
                  更多信息 >>>
              </div>
          </div>
          <!-- nav部分 -->
          <div class="nav_box">
            <ul class="dis_flex nav_list_box">
              <li class="nav_list" v-for="item_nav in nav" :key="item_nav.id">
                  <img :src="item_nav.imgUrl" alt="">
                  <p class="item_title">{{item_nav.title}}</p>
                  <p class="tiem_text">{{item_nav.text}}</p>
              </li>
            </ul>
          </div>
          <!-- 新手福利 -->
          <div class="welfare">
              <div class="welfare_left lt">
                  <p class="welfare_text">今日福利</p>
                  <p  class="welfare_left_xing"></p>
                  <p class="welfare_left_xing_small"></p>
                  <p class="weilfare_animate_left"></p>
                  <p class="weilfare_animate_right"></p>
              </div>
              <div class="welfare_center lt">
                  <div class="welare_content">
                      <div class="welare_content_title dis_flex">
                          <div class="welare_title product-buyer-name">
                              龙e盈2017090078
                          </div>
                          <div class="welare_title_right">
                            <span class="xin mar_left">新</span>
                            <span class="lian mar_left">链</span>
                            <span class="welare_href mar-left">超高收益，每人限投一次。</span>
                          </div>
                      </div>
                      <div class="welare_box">
                        <div class="welare_data">
                            <ul class="dis_flex">
                              <li class="welare_width">
                                  <p class="welare_text_title">9.0%</p>
                                  <p class="welare_text_content">历史年化收益率</p>
                              </li>
                            </ul>
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
import Hder from './subcpnent/header.vue';
import Table from './subcpnent/tables.vue';
import Alert from './subcpnent/alert.vue';
import Footer from './subcpnent/footer.vue';
import Swiper from './subcpnent/swiper.vue';
export default {
  components: {
    Alert,
    Hder,
    Table,
    Footer,
    Swiper
  },
  data () {
    return {
      txt: "",
      carouselList:[
        '"王者搭档" 活动暂停公告',
        '"星耀搭档" 活动暂停公告',
        '"钻石搭档" 活动暂停公告',
        '"黄金搭档" 活动暂停公告',
        '"白银搭档" 活动暂停公告',
        '"青铜搭档" 活动暂停公告',
      ],
      Investment:{
        "累计投资总额":"2938601471.0000",
        "累计投资总收益":"363373863.66",
        "累计投资人数":"141141"
      },
      nav:[
        {
          imgUrl:"../../static/image/index_slxh.png",
          title:"实力雄厚",
          text:"龙光集团旗下互联网金融信息服务平台"
        },
        {
          imgUrl:"../../static/image/index_jktm.png",
          title:"实力雄厚",
          text:"借款真实可查 资金流向透明"
        },
        {
          imgUrl:"../../static/image/index_jyaq.png",
          title:"交易安全",
          text:"严格审核合作机构 资信审慎评估"
        },
        {
          imgUrl:"../../static/image/index_scbz.png",
          title:"双重保障",
          text:"严格风控 分散投资"
        }
      ]
    }
  },
  created(){
    // document.title="lll"
  },
  mounted(){
    var carlist = $("#carList");
    var tops = 0 ;   
    var carinx = this.carouselList.length;
    var clearTime
    carouseTime()
    function carouseTime(){
      clearTime = setInterval(function(){
        tops -= 50;
        carlist.animate({top:tops+ "px"},2000)
        if(tops < (carinx - 2) * -50){
          tops = 50;
        }
      },4000)
    }
    carlist.hover(function(){
      clearInterval(clearTime)
    },function(){
      carouseTime()
    })
  },
  filters: {
    focus: function (value) {
      // 2938601471.00
      // var inx = value.indexOf(".")
      // var replaces = value.splice(5,3) 
        var result = '', counter = 0;
        value = (value || 0).toString();
        // console.log(value,"num")
        for (var i = value.length - 1; i >= 0; i--) {
            counter++;
            
            result = value.charAt(i) + result;
            console.log(result)
            if (!(counter % 3) && i != 0) { result = ',' + result; }
        }
        if(result.indexOf(".")>=0){
          return result
          // result.toString()
          // console.log(isNaN(result),"is")
          // console.log(result);
          // var reg = new RegExp(",.");
          // var results = result.replace(reg,".");
          // console.log(results ,"asd")
          // return result 
          // var sttr = result.substr(result.lastIndexOf(","),1)
          // return suce
          // console.log(
          //   result.lastIndexOf(",")
          //   var reg = new RegExp(",.");
          //  return result.replace(reg,".")
          // )
        }else{
           return  result
        }
    }
  },
}
</script>
<style scoped>
.lt{float:left;}
.rt{float:right;}
body{
  /* color: #525252; */
}
.containers{
  margin: 0 auto;
  width: 1010px;
}
.notice{
  width: 100%;
  height: 50px;
  color: #0f91dd;
  line-height: 50px;
}
.newnotice{
  position:relative;
}
.newnotice > span {
  margin-left: 30px;
}
.notice_logo{
  display: block;
  position:absolute;
  width: 28px;
  height: 28px;
  background: url("../../static/image/index.png") no-repeat  0 -773px;
  top: 12px;
  left: 0;
}
.oneline{
    width: 1px;
    height: 17px;
    background: #ddd;
    margin-top: 17px;
    margin-left: 5px;
  }
  .carousel{
    width: 450px;
    margin-left: 50px;
    color: #525252;
    height: 50px;
    position:absolute;
    top:0;
  }
  .ov_hidden{
    width: 450px;
    height: 50px;
    overflow: hidden;
     position: relative;
  }
  /* 投资金额 */
  .investment{
    width: 100%;
    height: 72px;

  }
  .inline{
    display:block;
    width: 1px;
    height: 28px;
    margin: 18px 0 0 20px;
    background: #444444;
  }
  .invest_list{
    margin-left: 30px;
    line-height: 70px;
  }
  .invest_num{
    font-size: 18px;
    color:#ff5d16;
    font-weight: bold;
    margin-left: 20px;
  }
  .more{
    height: 70px;
    line-height: 70px;
  }
  .nav_list{
    width: 25%;
    height: 160px;
    /* margin: 0 auto; */
    text-align: center;

  }
  .nav_box{
    background: #fff;
  }
  .nav_list>img{
    margin-top: 20px;
    width: 50px;
  }
  .item_title{
    margin-top: 15px;
    font-size: 24px;
    color: #666;
    margin-bottom: 10px;
  }
  .tiem_text{
    font-size: 14px;
    color: #999;
  }
  .welfare{
    height: 100%;
    height: 260px;
    margin: 20px 0 0 0 ;
  }
  .welfare_left{
    overflow: hidden;
    height: 260px;
    width: 240px;
    background: #ffa50a;
    position: relative;
  }
  .welfare_text{
    margin-top: 10px;
    margin-left: 10px;
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    font-family:"黑体";
  }
  .welfare_left_xing{
    width: 29px;
    height: 26px;
    position: absolute;
    top: 28px;
    right: 30px;
    background: url("../../static/image/daxinxin_t2.png") no-repeat 0 0 ;
  }
  .welfare_left_xing_small{
    width: 16px;
    height: 15px;
    position:absolute;
    top: 56px;
    right: 50px;
    background: url("../../static/image/daxinxin_t2.png") no-repeat 0 0 ;
    background-size: 100%;
  }
  .weilfare_animate_left{
    position: absolute;
    bottom: 56px;
    left: 0;
    width: 160px;
    height: 123px;
    background: url("../../static/image/index.png") no-repeat 0 -331px;
  }
    .weilfare_animate_right{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 152px;
    height: 57px;
    background: url(/dist/index.png?4ffbddc…) no-repeat -88px -454px;
  }
  .welfare_center{
    width:770px;
    height: 260px;
    background: #fff;
  }
  .welfare{
    border-top: 1px solid #ffa50a;
  }
  .welare_content{
    width: 523px;
  }
  .welare_content_title{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #f1f1f1;
 
  }
  .welare_title{
   font-size: 26px;
    color: #525252;
    /* font-weight: bold; */
    line-height: 60px;
    margin-left: 20px;
    width: 100px;
  }
  .product-buyer-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .welare_title_right{
  } 
  .mar_left{
    margin-left: 20px;
  }
  .welare_title_right > .xin{
    display:inline-block;
    width: 30px;
    height: 20px;
    line-height: 20px;
    color: #fb675a;
    border: 1px solid #fb675a;
    border-radius: 5px;
    text-align: center;
    margin: 20px 0 0 0;
  }
    .welare_title_right > .lian{
    display:inline-block;
    width: 30px;
    height: 20px;
    line-height: 20px;
    color: #00aaee;
    border: 1px solid #00aaee;
    border-radius: 5px;
    text-align: center;
    margin: 20px 0 0 0;
  }
  .welare_href{
    color: #666;
  }
  .welare_width{
    width: 33%;
  }
  .welare_text_title{
    font-size:21px;
    color: #ff6300;
  }
  .welare_text_content{
    font-size:16px;
    color: #000;
  }

</style> 
