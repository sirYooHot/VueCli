<!-- 规定css作用域，防止全局污染 -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .center {
    text-align: center;
  }
  .content {
    box-sizing: border-box;
    display: inline-block;

    width: 300px;
    min-height: 200px;
    margin: 0 20px 20px;
    padding: 0 20px 20px;
    vertical-align: top;
    border: #42b983 1px solid;
  }

  .red {
    background: red;
    text-align: center;
    color: #fff;
  }
</style>
<template>
  <div class="index">
    <h1 class="center">{{ msg }}</h1>
    <div class="content">
      <h2>数据绑定语法 - 插值</h2>
      <!--
        1. 文本渲染
        v-text: 不可解析标签;
        v-html: 可解析标签;
        {{}} == v-text 可接受表达式;
      -->
      <div v-text="textContent"></div>
      <div v-html="htmlContent"></div>
    </div>
    <div class="content">
      <h2>条件渲染</h2>
      <!--
        v-show: 切换元素的 display CSS 属性;
        v-if: 在切换时元素及它的数据绑定 / 组件被销毁并重建;
        v-else: 前一兄弟元素必须有 v-if 或 v-else-if;
        v-else-if: 前一兄弟元素必须有 v-if 或 v-else-if;
      -->
      <div v-show="isTrue">v-show</div>
      <div v-if="isTrue === 'if'">v-if</div>
      <div v-else-if="isTrue === 'else-if'">v-else-if</div>
      <div v-else>v-if</div>
    </div>
    <div class="content">
      <h2>列表渲染</h2>
      <!--
        v-for: 默认行为试着不改变整体，而是替换元素;
        key: 迫使其重新排序的元素，你需要提供一个 key 的特殊属性;
      -->
      <ul v-for="(item) in items" :key="item.id">
        <li>{{ item.name }}</li>
        <li>{{ item.index }}</li>
      </ul>
      <!-- <div v-for="(value, key, index) in object" :key="object.id">
        {{ index }}. {{ key }}: {{ value }}
      </div> -->
    </div>
    <div class="content">
      <h2>事件绑定</h2>
      <!--
        v-on === @ : 绑定事件监听器;
        .stop / .prevent / .passive / .capture / .self / .once / .passive
      -->
      <button v-on:click="handleClick('e')">v-on:click事件</button>
      <button @click="handleClick('e')">@click事件</button>
      <div>
        <!-- 阻止单击事件继续传播 -->
        <!-- <a v-on:click.stop="doThis"></a> -->

        <!-- 提交事件不再重载页面 -->
        <!-- <form v-on:submit.prevent="onSubmit"></form> -->

        <!-- 修饰符可以串联 -->
        <!-- <a v-on:click.stop.prevent="doThat"></a> -->

        <!-- 只有修饰符 -->
        <!-- <form v-on:submit.prevent></form> -->

        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
        <!-- <div v-on:click.capture="doThis">...</div> -->

        <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <!-- <div v-on:click.self="doThat">...</div> -->
      </div>
    </div>
    <div class="content">
      <h2>Class 与 Style 绑定</h2>
      <!--
        (v-bind === :): 绑定事件监听器;
      -->
      <div>
        <!-- 绑定一个属性 -->
        <!-- <img v-bind:src="imageSrc"> -->
        <!-- 缩写 -->
        <!-- <img :src="imageSrc"> -->

        <!-- 内联字符串拼接 -->
        <!-- <img :src="'/path/to/images/' + fileName"> -->

        <!-- class 绑定 -->
        <div :class="{ red: isRed }">div</div>
        <!-- <div :class="[classA, classB]"></div>
        <div :class="[classA, { classB: isB, classC: isC }]"> -->

        <!-- style 绑定 -->
        <!-- <div :style="{ fontSize: size + 'px' }"></div>
        <div :style="[styleObjectA, styleObjectB]"></div> -->

        <!-- 绑定一个有属性的对象 -->
        <!-- <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div> -->

        <!-- 通过 prop 修饰符绑定 DOM 属性 -->
        <!-- <div v-bind:text-content.prop="text"></div> -->

        <!-- prop 绑定。“prop”必须在 my-component 中声明。-->
        <!-- <my-component :prop="someThing"></my-component> -->

        <!-- 通过 $props 将父组件的 props 一起传给子组件 -->
        <!-- <child-component v-bind="$props"></child-component> -->

        <!-- XLink -->
        <!-- <svg><a :xlink:special="foo"></a></svg> -->
      </div>
    </div>
    <div class="content">
      <h2>表单控件绑定</h2>
      <!--
        v-model: 在表单控件或者组件上创建双向绑定;
      -->
      <div id='example-3'>
        <input v-model="checkedNames"
        type="checkbox" id="jack" value="Jack" >
        <label for="jack">Jack</label>
        <input  v-model="checkedNames"
        type="checkbox" id="john" value="John" >
        <label for="john">John</label>
        <input v-model="checkedNames"
        type="checkbox" id="mike" value="Mike" >
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to my Vue',
      textContent: '<b>textContent 内容</b>',
      htmlContent: '<b>htmlContent 内容</b>',
      isTrue: 'else-if',
      items: [
        {
          name: 'zhangsan',
          gender: 'nan'
        },
        {
          name: 'lisi',
          gender: 'nan'
        },
        {
          name: 'wangwu',
          gender: 'nan'
        }
      ],
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      imageSrc: '../assets/logo.png',
      isRed: true,
      checkedNames: []
    }
  },
  // props:[],
  // created() {
  //   var _this = this;
  // },
  // mounted() {},
  // watch: {}, // 属性监听
  methods: {
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>
