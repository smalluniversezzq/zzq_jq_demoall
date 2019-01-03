<template>
  <div id="login">
      <Child :text=txt></Child>
      <ChildTow v-on:childByValue="childByValue"></ChildTow>
      <p>{{name}}</p>
  </div>
</template>
<script>
import Child from "./subcpnent/child.vue";
import ChildTow from "./subcpnent/childtow.vue";
export default {
  components: {
    Child,
    ChildTow
  },
  data() {
    return {
        txt:"parentdata",
        name:""
    };
  },
    created(){
    },
    mounted(){
    },
    methods:{
        childByValue: function (childByValue) {
          console.log(childByValue,"childByValue")
        // childValues就是子组件传过来的值
        this.name = childByValue;
        }
    }
};
</script>
<style scoped>
/* 自定义组件 */
/*1创建自定义组件  2组件的生命周期  3组件之间的传参  */
/* 组件分为全局组件  和 局部组件
1全局注册方法
Vue.component('my-component-name', {
  // ... 选项 ...
})
new Vue({ el: '#app' })

<div id="app">
  <my-component-name></my-component-name>
</div>
全局组件注册之后可以用在任何新创建的 Vue 根实例 (new Vue) 的模板中。



2局部组件
var ComponentA = {  ...  }   //创建引入
var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  // ...
}

通过Babel 和 webpack 使用 ES2015 模块
import ComponentA from './ComponentA.vue'
export default {
  components: {
    ComponentA
  },
  // ...
}
 */
/* 2生命周期 */
/* 
1、beforeCreate：在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
2、created：实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，
watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
3、beforeMount：在挂载开始之前被调用：相关的 render 函数首次被调用。
4、mounted：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
5、beforeUpdate：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
6、updated：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。/
7、beforeDestroy：实例销毁之前调用。在这一步，实例仍然完全可用。
8、destroyed：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。 */

/* 3组件传参 */


/* 1父传子 */
/*

父组件

<template>
  <div>
    父组件:
    <input type="text" v-model="name">
    <br>
    <br>
    <!-- 引入子组件 -->
    <child :inputName="name"></child>        //2 定义属性和值 
  </div>
</template>
<script>
  import child from './child'               //1 引入子组件 export default components:{child}
  export default {
    components: {                           
      child
    },
    data () {
      return {
        name: ''
      }
    }
  }
</script>

子组件  接受参数
<template>
  <div>
    子组件:
    <span>{{inputName}}</span>
  </div>
</template>
<script>
  export default {
    // 接受父组件的值
    props: {                通过props 接受
      inputName: String,
      required: true
    }
  }
</script>

*/

/* 子组件传父组件


<template>
  <div>
    子组件:
    <span>{{childValue}}</span>
    <input type="button" value="点击触发" @click="childClick">   //1 定义一个子组件传值的方法
  </div>
</template>
<script>
  export default {
    data () {
      return {
        childValue: '我是子组件的数据'
      }
    },
    methods: {
      childClick () {
        this.$emit('childByValue', this.childValue)       // 2 childByValue是在父组件on监听的方法   // 第二个参数this.childValue是需要传的值
      }
    }
  }
</script>


父组件

<template>
  <div>
    父组件:
    <span>{{name}}</span>
    <br>
    <br>
     
    <child v-on:childByValue="childByValue"></child>   // 2 定义一个on的方法监听子组件的状态
  </div>
</template>
<script>  
  import child from './child'                            //1引入子组件    
  export default {
    components: {
      child
    },
    data () {
      return {
        name: ''
      }
    },
    methods: {
      childByValue: function (childValue) {               //3 childValue就是子组件传过来的值
        this.name = childValue
      }
    }
  }
</script>

 */








/* 兄弟组件之间传值，需要定义个公共的公共实例文件bus.js，作为中间仓库来传值，不然路由组件之间达不到传值的效果 */
/* 兄弟组件传参方式 */
/* 1 定义公共js  bus.js  import Vue from 'vue'   export default new Vue() */
/* 2 兄弟组件同时引入bus.js */
/* 3传送参数方组件定义事件  
 <input type="button" value="提交" @click="brotherValue">  
   brotherValue:function(){
          Bus.$emit("val",this.Brother)
 }*/
 /* 4接受参数方组件定时事件   Bus事件
        Bus.$on('val', (data) => {
        console.log(data,"接收到参数")
        vm.name = data
      })
 */


</style>
