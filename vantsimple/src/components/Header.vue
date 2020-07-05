<template>
  <div class="header">
    <h1 class="header__title">Resume</h1>

  <van-tabbar
   route
   active-color="#fa7268"
   :safe-area-inset-bottom="true"
 >
   <van-tabbar-item
     to="/home"
     :replace="true"
   >
     <van-icon
       class-prefix="i"
       name="home"
       class="iconfont"
       slot="icon"
     />
     <span>首页</span>
   </van-tabbar-item>
   <van-tabbar-item
     to="/store"
     :replace="true"
   >
     <van-icon
       class-prefix="i"
       name="store"
       class="iconfont"
       slot="icon"
     />
     <span>商城</span>
   </van-tabbar-item>
   <van-tabbar-item
     to="/transport"
     :replace="true"
   >
     <van-icon
       class-prefix="i"
       name="l"
       class="iconfont"
       slot="icon"
     />
     <span>转运</span>
   </van-tabbar-item>
   <van-tabbar-item
     to="/mine"
     :replace="true"
   >
     <van-icon
       class-prefix="i"
       name="mine"
       class="iconfont"
       slot="icon"
     />
     <span>我的</span>
   </van-tabbar-item>
 </van-tabbar>
</div>
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
  padding: 50px auto;
  background: #454398;
  &__title {
    color: @grey;
    font-size: 20px;
  }
}
</style>
