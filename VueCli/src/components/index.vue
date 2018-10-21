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
    <div>
      <!--
        1. 文本渲染
        v-text: 不可解析标签;
        v-html: 可解析标签;
        {{}} == v-text 可接受表达式;
        02.
        v-show: 切换元素的 display CSS 属性;
        v-if: 在切换时元素及它的数据绑定 / 组件被销毁并重建;
        v-else: 前一兄弟元素必须有 v-if 或 v-else-if;
        v-else-if: 前一兄弟元素必须有 v-if 或 v-else-if;
        03.
        v-for: 默认行为试着不改变整体，而是替换元素;
        key: 迫使其重新排序的元素，你需要提供一个 key 的特殊属性;
        04.
        v-on === @ : 绑定事件监听器;
        .stop / .prevent / .passive / .capture / .self / .once / .passive
        05.
        (v-bind === :): 绑定事件监听器;
      -->
    </div>
    <h1 class="center">{{ msg }}</h1>
    <section class="content">
      <h2>数据绑定语法 - 插值</h2>
      <div v-text="textContent"></div>
      <div v-html="htmlContent"></div>
    </section>
    <section class="content">
      <h2> 条件渲染 </h2>
      <div v-show="isTrue">v-show</div>
      <div v-if="isTrue === 'if'">v-if</div>
      <div v-else-if="isTrue === 'else-if'">v-else-if</div>
      <div v-else>v-if</div>
    </section>
    <section class="content">
      <h2> 列表渲染 </h2>
      <ul v-for="(item) in items" :key="item.id">
        <li>{{ item.name }}</li>
        <li>{{ item.index }}</li>
      </ul>
      <!-- <div v-for="(value, key, index) in object" :key="object.id">
        {{ index }}. {{ key }}: {{ value }}
      </div> -->
    </section>
    <section class="content">
      <h2>事件绑定</h2>
      <button v-on:click="handleClick('e')">
        v-on:click事件
      </button>
      <button @click="handleClick('e')">
        @click事件
        </button>
    </section>
    <section class="content">
      <h2>Class 与 Style 绑定</h2>
      <div :class="{ red: isRed }">
        div
      </div>
    </section>
    <section class="content">
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
    </section>
    <section class="tpl">

    </section>
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
