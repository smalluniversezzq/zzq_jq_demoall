<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
 created() {},
 mounted(){},
 methods:{
   clickme (){
      this.$router.push({
        path: "/home",
        query: {}
      });
   }
 }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
table {
  border-collapse: collapse;
}
td {
  border: 1px solid #999;
}
html,
body {
  height: 100%;
  width: 100%;
  background: #eee;
  font-size: 12px;
}
.title {
  text-align: left;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
}
input{
  font-size: 14px;
}
.bv-theme .list-block input[type="date"],
.list-block input[type="datetime-local"],
.list-block input[type="email"],
.list-block input[type="number"],
.list-block input[type="password"],
.list-block input[type="search"],
.list-block input[type="tel"],
.list-block input[type="text"],
.list-block input[type="time"],
.list-block input[type="url"],
.list-block select,
.list-block textarea {
  color: #666;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.lt{float: left;}
.rt{float:right;}
.dis_flex{display:flex;}
</style>
