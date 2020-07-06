<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  components: {
    appHeader:Header
  },

  props: {},

  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {

  },

  mounted() {},

  destroyed() {},

  methods: {}
}


</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding:0;
}

</style>
