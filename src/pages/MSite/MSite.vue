<template>

  <div class="msite_div1">
    <div class="msite_div2">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in lunbotu" :key="item.index">
          <img :src="item.img" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="msite_div3">
      <div class="msite_div4">
        <router-link to="/msite/xinwen" class="msite_div5">新闻资讯</router-link>
      </div>
      <div class="msite_div4">
        <router-link to="/msite/tupian" class="msite_div5">图片分享</router-link>
      </div>
      <div class="msite_div4">
        <router-link to="/msite/shanpin" class="msite_div5">商品购买</router-link>
      </div>
    </div>

    <div class="msite_div3">
      <div class="msite_div4">
        <router-link to="/msite/tupian" class="msite_div5">留言反馈</router-link>
      </div>
      <div class="msite_div4">
        <router-link to="/msite/tupian" class="msite_div5">视频专区</router-link>
      </div>
      <div class="msite_div4">
        <router-link to="/msite/tupian" class="msite_div5">联系我们</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotu: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          if (result.body.status === 0) {
            this.lunbotu = result.body.message;
          } else {
            Toast("加载轮播图失败");
          }
        });
    }
  }
};
</script>

<style scoped>
.msite_div1 {
  height: 100%;
}
.msite_div2 {
  height: 30%;
}
.msite_div3{
  height: 20%;
  display: flex;
}
.msite_div4{
  flex: 1;
  border: solid 1px #ffffff;  
  background-color: pink;
}
.msite_div5{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #ffffff;
}
.mt-swipe-item {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
</style>