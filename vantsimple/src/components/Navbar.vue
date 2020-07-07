<template>
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
     <a
       href="http://youtube.com"
       target="blank"
       class="header__navbar__icon"
     >
     <van-icon
       class-prefix="i"
       name="home"
       class="icon-youtube"
       slot="icon"
     />
    </a>
   </van-tabbar-item>
   <van-tabbar-item
     to="/store"
     :replace="true"
     class="header__navbar__item"
   >
     <a
       href="http://github.com"
       target="blank"
       class="header__navbar__icon"
     >
     <van-icon
       class-prefix="i"
       name="store"
       class="icon-github"
       slot="icon"
     />
     </a>
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
<style scoped lang="less">
.header {
  &__navbar {
    display:flex;
    width:300px;
    margin-top:20px;
    &__item {
      color:@navbar;
      width:100px;
    }
    &__icon {
      font-size:30px;
      text-align:center;
      color:@headerbuttoncolor;
      text-decoration:none;
    }
  }

}
</style>
