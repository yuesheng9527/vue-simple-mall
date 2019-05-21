<template>
  <div>
    <div class="GWC_div1">
      <div class="GWC_div2" v-for="(item,i) in goodslist" :key="item.id">
        <div class="GWC_div5">
          <van-switch active-color="rgb(255, 0, 0)" @change="selectedChanged(item.id)" v-model="$store.getters.getGoodsSelected[item.id]" size="15px"/>
        </div>
        <div class="GWC_div6">
          <img :src="item.thumb_path">
        </div>
        <div class="GWC_div3">
          <div class="GWC_div4">{{item.title}}</div>
          <p class="GWC_p1">
            <span class="GWC_span1">￥{{item.sell_price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <van-stepper integer @change="countChanged(item.id,$store.getters.getGoodsCount[item.id])" v-model="$store.getters.getGoodsCount[item.id]"/>
            </span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="GWC_span2" @click="remove(item.id,i)">删除</span>
          </p>
        </div>
      </div>
    </div>
    <div class="GWC_div9">
      <div class="GWC_div7">
        <div class="GWC_div8">
          <p>总计(不含运费)</p>
          <p>已勾选商品{{$store.getters.getGoodsCountAndAmount.count}}件,总价:￥{{$store.getters.getGoodsCountAndAmount.amount}}</p>
        </div>
        <div class="GWC_div10">
          <mt-button type="danger" size="small">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist:[]
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList(){
      let idArr = []
      this.$store.state.car.forEach(item => {
        idArr.push(item.id)
      });
      if(idArr.length<=0){return}
      this.$http.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/'+idArr.join(",")).then(result=>{
        if(result.body.status === 0){
          this.goodslist = result.body.message;
        }
      })
    },
    countChanged(id,count){
      this.$store.commit('updateGoodsInfo',{id:id,count:count})
    },
    remove(id,i){
      this.goodslist.splice(i,1);
      this.$store.commit('removeFormCar',{id:id})
    },
    selectedChanged(id){
      this.$store.commit('updateGoodsSelected',{id:id})
    }
  }
};
</script>

<style scoped>
.GWC_span1{
  color: rgb(255, 0, 0);
}
.GWC_span2{
  color: rgb(0, 102, 255);
}
.GWC_div1 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.GWC_div2 {
  width: 90%;
  display: flex;
  margin-top: 10px;
  padding: 10px;
  background-color: white;
}
.GWC_div5 {
  flex: 1;
  display: flex;
  align-items: center;
}
.GWC_div6 {
  flex: 1;
  display: flex;
  align-items: center;
}
.GWC_div3 {
  flex: 6;
}
.GWC_p1 {
  display: flex;
  align-items: center;
}
.GWC_div4 {
  font-size: 14px;
  font-weight: 600;
}
.GWC_div6 img {
  width: 100%;
  height: 100%;
}
.GWC_div7 {
  display: flex;
  margin-top: 10px;
  padding: 10px;
  background-color: white;
}
.GWC_div9{
    padding: 0px 10px;
}
.GWC_div10{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.GWC_div8 p{
    padding: 5px 0px;
}
.GWC_div8{
    flex: 2;
}
</style>