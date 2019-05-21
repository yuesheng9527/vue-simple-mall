<template>
  <div class="spxq_div1">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag"></div>
    </transition>
    <div class="spxq_div2">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in lunbotu" :key="item.index">
          <img :src="item.src" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价:<span class="now_price">￥{{goodsinfo.sell_price}}</span>
          </p>
          <p class="shouliang">购买数量:<van-stepper v-model="value" integer/></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="jialu">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="spxq_div3">
      <p class="spxq_p1">商品参数</p>
      <div class="spxq_div4">
        <p>商品贷号:{{goodsinfo.goods_no}}</p>
        <p>库存情况:{{goodsinfo.stock_quantity}}</p>
        <p>上架时间:{{goodsinfo.add_time | dateFormat}}</p>
      </div>
      <div class="spxq_div5">
        <mt-button plain type="primary" size="large" @click="$router.push({name:'tuwenjieshao',params:{id:id}})">图文介绍</mt-button><br>
        <mt-button plain type="danger" size="large" @click="$router.push({name:'shanpinpinlun',params:{id:id}})">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      value: 1,
      id: this.$route.params.id,
      lunbotu: [],
      goodsinfo:{},
      ballFlag:false
    };
  },
  created() {
    this.getLunbotu();
    this.getGoodsInfo();
  },
  methods: {
    beforeEnter(el){
      el.style.transform = "translate(0,0)";
    },
    enter(el,done){
      el.offsetWidth;
      el.style.transform="translate(114px,281px)";
      el.style.transition='all 1s cubic-bezier(.4,-0.3,1,.68)';
      done()
    },
    afterEnter(el){

    },
    getLunbotu() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(result => {
          if (result.body.status === 0) {
            this.lunbotu = result.body.message;
          }
        });
    },
    getGoodsInfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/goods/getinfo/" + this.id)
        .then(result => {
          if (result.body.status === 0) {
            this.goodsinfo = result.body.message[0];
          }
        });
    },
    jialu(){
      this.ballFlag=!this.ballFlag;
      let goodsinfo = {id:this.id,count:this.value,price:this.goodsinfo.sell_price,selected:true}
      this.$store.commit('addToCar',goodsinfo);
   }
  }
};
</script>

<style scoped>
.ball{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top:338px;
  left:115px;
}
.spxq_div1 {
  width: 94.6%;
  height: 100%;
  padding: 10px 10px 110px;
  background-color: #F1EFF5;
}
.spxq_div2 {
  width: 100%;
  height: 35%;
}
.spxq_div1 img {
  height: 100%;
}
.mint-swipe {
  width: 100%;
}
.mint-swipe-item{
  display: flex;
  text-align: center;
  background-color: white;
}
.mui-card{
  height: 27%;
  margin-top: 10px;
  background-color: white;
}
.mui-card-header{
  height: 25%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 15px;
  border-bottom: 1px solid rgba(102, 102, 102, 0.459);
}
.mui-card-content-inner{
  padding: 10px;
}
.price{
  margin-bottom: 5px;
  color: rgba(102, 102, 102, 0.671);
  font-size: 13px;
}
.shouliang{
  margin-bottom: 5px;
  color: rgba(102, 102, 102, 0.671);
  font-size: 13px;
  display: flex;
  align-items: center;
}
.now_price{
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.spxq_div3{
  margin-top: 10px;
  background-color: white;
}
.spxq_p1{
  padding: 10px;
  border-bottom: 1px solid rgba(102, 102, 102, 0.459);
}
.spxq_div4 p{
  padding: 5px;
}
.spxq_div4{
  border-bottom: 1px solid rgba(102, 102, 102, 0.459);
  padding: 5px;
  color: rgba(102, 102, 102, 0.671);
  font-size: 13px;
}
.spxq_div5{
  padding: 10px;
}
</style>
