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
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
