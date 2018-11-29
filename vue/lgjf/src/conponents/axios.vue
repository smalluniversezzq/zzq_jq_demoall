<template>
  <div id="axios">
  </div>
</template>
<script>
export default {
  data () {
    return {
      userId:"9269752",
      token:"135119224"
    }
  },
  created(){
        // this.$axios({
        // method:'post',
        // url:'api',
        // data:this.qs.stringify({           //这里是发送给后台的数据
        //     userId:this.userId,
        //     token:this.token,
        // })
        //     }).then((response) =>{         
        //         console.log(response)       //请求成功返回的数据
        //     }).catch((response) =>
        //         console.log(response)       //请求失败返回的数据
        //     )
  },
  mounted(){

  },
  methods:{

  }
}
</script>
<style>
#app {
}
</style>
