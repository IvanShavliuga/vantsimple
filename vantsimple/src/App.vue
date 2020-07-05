<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import Header from './components/Header.vue'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    Header: Header
  },

  props: {},

  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
}

/*import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}*/
</script>

<style lang="less">
@red: #fa7268;
@nacarat: #ff683b;
@orange: #eb7e76;
@yellow: #fbbd08;
@olive: #8dc63f;
@green: #39b54a;
@cyan: #1cbbb4;
@blue: #0081ff;
@purple: #6739b6;
@mauve: #9c26b0;
@pink: #fff5f4;
@brown: #a5673f;
@grey: #8799a3;
@black: #333333;
@darkGray: #666666;
@gray: #aaaaaa;
@ghostWhite: #f1f1f1;
@ghostGray: #f8f8f8;
@white: #ffffff;
@gradualOrange: linear-gradient(90deg, #fa8d68, #fa7368);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
.header {
  height: 300px;
  padding: 50px auto;
  background: #454398;
  &__title {
    color: @grey;
    font-size: 20px;
  }
}
</style>
