<template>
  <div id="child">
        <p>组件child</p>
        父组件传子组件
      <p>{{text}}</p>
        <br>
        <br>
        <br>
        兄弟组件传参
        <span>{{Brother}}</span>
        <input type="button" value="提交" @click="brotherValue">

  </div>
</template>

<script> 
import Bus from "../../assets/bus.js";
export default {
  data() {
    return {
        Brother:99
    };
  },
  props:["text"],
  created(){
  },
  mounted() {
  },
  methods: {
      brotherValue:function(){
          Bus.$emit("val",this.Brother)
      }
  }
};
</script>

<style>

</style>
