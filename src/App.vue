<template>
  <div class="app2">
    <div class="div1">
      <Top></Top>
    </div>
    <div class="div2">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <div class="div3">
      <FooterGuide></FooterGuide>
    </div>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import Top from "./components/Top/top.vue";

export default {
  components: {
    FooterGuide,
    Top
  }
};
</script>

<style>
.app2 {
  width: 100%;
  height: 100%;
}
.div1 {
  width: 100%;
  height: 6%;
  position: fixed;
  top:0;
  z-index: 100;
}
.div2{
  width: 100%;
  height: 85.5%;
  background-color: #F1EFF5;
  padding-top:10.6%; 
  padding-bottom:15.1%; 
}
.div3{
  width: 100%;
  height: 8.5%;
  position: fixed;
  bottom: 0;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
</style>
