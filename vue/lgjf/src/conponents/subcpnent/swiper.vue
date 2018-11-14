<template>
  <div id="header">
 <div class="swiper-container" >
    <div class="swiper-wrapper"  >
          <div class="swiper-slide"  v-for="item in sweperUrl" :key="item.id">
          <!-- <div class="swiper-slide" > -->
          <img  class="swiperurl" :src="item">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
</div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import swiperUrl1 from '../../../static/image/swiper1.png'
export default {
  data() {
    return {
          sweperUrl:[
            "../../../static/image/swiper1.png",
            "../../../static/image/swiper2.png",
            "../../../static/image/swiper3.png",
            "../../../static/image/swiper4.png",
          ]
    };
  },
  created() {
    // $(".swiper-slide").eq(0).css({
    //   "background":"red","width":"100%","height":"100%"
    // })
  },
  mounted(){
      new Swiper ('.swiper-container', {
        // autoplay: 3000,//可选选项，自动滑动
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
          },
      //切换时间
      speed:300,   
      //为true悬停weiper变小手
      grabCursor : true,
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
      //设置初始显示index 0为第一张
      initialSlide :0,
      //设置宽度
      width: 3000, 
      height: 500,
      //  width: window.innerWidth,
        pagination: {
      el: '.swiper-pagination',
      },
    }) 
  },
  methods:{
  }
};
</script>
<style scoped>
 .swiper-container {
        width: 100%;
    }
  .swiper-slide{
    width: 100%;
    height: 100%;
  }
  .swiperurl{
  }
</style>
