<template>
  <header class="header">
    <h1 class="header__title">Resume</h1>

  <van-tabbar
   class="header__navbar"
   route
   active-color="#fa7268"
   :safe-area-inset-bottom="true"
 >
   <van-tabbar-item
     to="/home"
     :replace="true"
     class="header__navbar__item"
   >
     <van-icon
       class-prefix="i"
       name="home"
       class="header__navbar__icon iconfont"
       slot="icon"
     />
     <span>Home</span>
   </van-tabbar-item>
   <van-tabbar-item
     to="/store"
     :replace="true"
     class="header__navbar__item"
   >
     <van-icon
       class-prefix="i"
       name="store"
       class="header__navbar__icon iconfont"
       slot="icon"
     />
     <span>Store</span>
   </van-tabbar-item>
   <van-tabbar-item
     to="/transport"
     :replace="true"
     class="header__navbar__item"
   >
     <van-icon
       class-prefix="i"
       name="l"
       class="header__navbar__icon iconfont"
       slot="icon"
     />
     <span>Update</span>
   </van-tabbar-item>
   <van-tabbar-item
     to="/mine"
     :replace="true"
     class="header__navbar__item"
   >
     <van-icon
       class-prefix="i"
       name="mine"
       class="header__navbar__icon iconfont"
       slot="icon"
     />
     <span>User</span>
   </van-tabbar-item>
 </van-tabbar>
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
  height: 300px;
  margin:0;
  margin-top:-15px;
  padding: 50px;
  background: #454398;
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
    color: @grey;
    font-size: 40px;
  }
}
</style>
