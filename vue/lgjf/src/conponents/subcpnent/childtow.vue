<template>
  <div id="child">
      <p>组件childtow</p>
      <p>子组件传父组件</p>
      <input id="intText" type="text">
      <input type="button" value="提交" @click="childclick">
      <br>
      <br>
      <p>兄弟组件</p>
      <input type="button" value="点击触发" @click="getData">
        <span>{{name}}</span>
  </div>
</template>
<script> 
import Bus from "../../assets/bus.js";
export default {
  data() {
    return {
        childvalue:"",
        name: 0
    };
  },
  created(){
  },
  mounted() {
       var vm = this;
      // 用$on事件来接收参数
      Bus.$on('val', (data) => {
        console.log(data,"接收到参数")
        vm.name = data
      })
  },
  methods: {
     getData: function () {
        this.name++
      },
       childclick(){
           this.childvalue = document.getElementById("intText").value;
           console.log(this.childvalue);
            // childByValue是在父组件on监听的方法
            // 第二个参数this.childValue是需要传的值
           this.$emit("childByValue",this.childvalue)
      }
  }
};
</script>

<style>
    
</style>
