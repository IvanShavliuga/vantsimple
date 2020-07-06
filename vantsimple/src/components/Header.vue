<template>
  <header class="header">
    <div class="container">
      <div class="header__block">
        <img class="header__image" alt="login image" src="../assets/images/banner_header.svg"/>
        <div class="header__names">
          <h1 class="header__name">Ivan Ivanov Shavliuga</h1>
          <h2 class="header__prof">junior Frontend developer</h2>
          <p class="header__desc">Верстка сайтов под заказ</p>
          <p class="header__phone">+375-44-563-84-23</p>
          <van-button type="primary">Primary</van-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Tabbar, TabbarItem} from 'vant'

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
  height: 400px;
  margin:0;
  margin-top:-15px;
  padding: 50px;
  background: @headerbackgroundcolor;
  @media screen and (max-width: 835px) {
    padding:30px;
  }
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
  &__name {
    color: @headercolor;
    font-size: 45px;
    font-weight:normal;
    letter-spacing:-1px;
    margin-bottom:5px;
    @media screen and (max-width: 835px) {
      font-size:30px;
    }
  }
  &__prof, &__desc {
    color: @headercolor;
    font-size: 15px;
    font-weight:normal;
    letter-spacing:-1px;
    margin-top:5px;
    margin-bottom:5px;
    margin-left:80px;
    @media screen and (max-width: 835px) {
      margin-left:0;
    }
  }
  &__image {
    width:450px;
    height:450px;
  }
  &__block {
    display:flex;
  }
  &__names {
    margin-top:80px;
    margin-left:80px;
    @media screen and (max-width: 835px) {
      margin-left:20px;
    }
  }
  &__phone {
    color:#edd923;
    font-size:25px;
    font-style:italic;
  }
}
</style>
