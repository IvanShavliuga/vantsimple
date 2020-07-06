<template>
  <header class="header">
    <h1 class="header__title">Resume</h1>
    <img class="header__image" src="../assets/images/Login_1.svg"/>

</header>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: "Header",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.header {
  height: 1vhmax;
  margin:0;
  margin-top:-15px;
  padding: 50px;
  background: @headerbackgroundcolor;
  &__navbar {
    display:flex;
    width:300px;
    &__item {
      color:@navbar;
      width:100px;
    }
    &__icon {
      font-size:40px;
      text-align:center;
    }
  }
  &__title {
    color: @headercolor;
    font-size: 45px;
  }
  &__image {
    width:450px;
    height:450px;
    margin-left:40px;
  }
}
</style>
