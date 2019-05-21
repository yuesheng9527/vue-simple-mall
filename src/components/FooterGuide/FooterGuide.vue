<template>
  <div class="bottom_div1">
    <div class="bottom_div2" @click="dianji1">
      <router-link to="/msite">
      <div class="bottom_div6" v-show="a===1">
        <img src="../../images/1B9BFF/shouye.png">
      </div>
      <div class="bottom_div6"  v-show="a===2">
        <img src="../../images/666/shouye.png">
      </div>
      <div class="bottom_div7" :class="a===1?'fontColor':''">首页</div>
      </router-link>
    </div>

    <div class="bottom_div3" @click="dianji2">
      <router-link to="/order">
      <div class="bottom_div8"  v-show="b===1">
        <img src="../../images/1B9BFF/Member.png">
      </div>
      <div class="bottom_div8"  v-show="b===2">
        <img src="../../images/666/Member.png">
      </div>
      <div class="bottom_div9" :class="b===1?'fontColor':''">会员</div>
      </router-link>
    </div>

    <div class="bottom_div4" @click="dianji3">
      <mt-badge size="small" type="error">{{$store.getters.getAllCount}}</mt-badge>
      <router-link to="/profile">
      <div class="bottom_div10"  v-show="c===1">
        <img src="../../images/1B9BFF/gouwuche.png">
      </div>
      <div class="bottom_div10"  v-show="c===2">
        <img src="../../images/666/gouwuche.png">
      </div>
      <div class="bottom_div11" :class="c===1?'fontColor':''">购物车</div>
      </router-link>
    </div>

    <div class="bottom_div5" @click="dianji4">
      <router-link to="/search">
      <div class="bottom_div12"  v-show="d===1">
        <img src="../../images/1B9BFF/sousuo.png">
      </div>
      <div class="bottom_div12"  v-show="d===2">
        <img src="../../images/666/sousuo.png">
      </div>
      <div class="bottom_div13" :class="d===1?'fontColor':''">搜索</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      b: 2,
      c: 2,
      d: 2
    };
  },
  methods: {
    dianji1() {
      if(this.a!==1){this.a=1,this.b=2,this.c=2,this.d=2}
    },
    dianji2() {
      if(this.b!==1){this.a=2,this.b=1,this.c=2,this.d=2}
    },
    dianji3() {
      if(this.c!==1){this.a=2,this.b=2,this.c=1,this.d=2}
    },
    dianji4() {
      if(this.d!==1){this.a=2,this.b=2,this.c=2,this.d=1}
    }
  }
};
</script>

<style scoped>
.bottom_div1 {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f8f6f8;
}
.bottom_div2,
.bottom_div3,
.bottom_div4,
.bottom_div5 {
  height: 100%;
  flex: 1;
}
.bottom_div4{
  position: relative;
}
.mint-badge{
  position: absolute;
  right: 20px;
}
.bottom_div6,
.bottom_div8,
.bottom_div10,
.bottom_div12 {
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.bottom_div7,
.bottom_div9,
.bottom_div11,
.bottom_div13 {
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 12px;
}
img {
  width: 30%;
  height: 70%;
}
.fontColor {
  color: #1b9bff;
}
</style>