<template>
   <div class="alert">
           <div class="modal">
            <p class="text">{{text}}</p>
            <p class="know">我知道了</p>
           </div>
        </div>
</template>

<script>
    export default{
        props:[
            'text',
            'showflag',
        ],
        data(){
            return{
              // show:true
            }
        },
        methods:{

        },
        mounted(){
          var self=this;
          // if(self.showflag){
          //    $(".alert").show();
          // }else{
          //    $(".alert").hide();
          // }
          //  $(".alert").show();
           $(".know").on("click",function(){
            $(".alert").css("display","none");
           
          })
        }
    }
</script>
<style scoped>
.alert {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
}
.alert .modal {
  width:80%;
  background: #fff;
  position: absolute;
  margin-top: -50px;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  /* margin-left: -405px; */
  top: 45%;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;
}
.alert .modal{
  text-align: center;
  padding: 25px 0px;
  font-size: 15px;
}
.text{
  text-align: center;
  font-size: 15px;
  line-height: 25px;
  padding: 0px 20px 10px;
  /* text-indent: 2em; */
}
.alert .modal .know {
  text-align: center;
  font-size: 14px;
  height: 20px;
  line-height: 40px;
  text-align: center;
  color: #007aff;
}
.know{
  border-top: 1px solid #ccc;

}
</style>


