<template>
  <div class="tpfx_div1">
    <van-tabs v-model="active" @click="getPhotoListByCateId(active)" background="rgba(255, 255, 255, 0.589)" title-active-color="#1b9bff" color="#1b9bff">
      <van-tab v-for="item in cates" :key="item.id" :title="item.title"></van-tab>
    </van-tabs>
  <div class="tpfx_div2">
    <router-link tag="div" class="tpfx_div3" v-for="img in imageList" :key="img.id" :to="'/msite/tupian/tupianxq/'+img.id">
      <img class="TPimg" v-lazy="img.img_url">
      <div class="tpfx_div4">
        <h1 class="tpfx_h1">{{img.title}}</h1>
        <div class="tpfx_div5">{{img.zhaiyao}}</div>
      </div>
    </router-link>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0,
      cates: [],
      imageList: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  methods: {
    getAllCategory() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimgcategory")
        .then(result => {
          if (result.body.status === 0) {
            result.body.message.unshift({ title: "全部", id: 0 });
            this.cates = result.body.message;
          }
        });
    },
    getPhotoListByCateId(cateId){
      if(cateId===0){cateId=cateId}
      if(cateId!==0){cateId=cateId+13}
      this.$http.get('http://www.liulongbin.top:3005/api/getimages/'+cateId).then(result=>{
        if(result.body.status===0){
          this.imageList=result.body.message;
        }
      })
    }
  }
};
</script>

<style scoped>
.tpfx_div1 {
  background-color: #f1eff5;
}
.tpfx_div2 {
  padding: 10px 10px 60px 10px;
}
.tpfx_div3 {
  background-color: #666;
  height: 355px;
  margin-bottom: 10px;
  box-shadow: 0 0 6px #999;
  position: relative;
}
.tpfx_div4 {
  color: #f1eff5;
  position: absolute;
  bottom: 0px;
  background-color:rgba(0, 0, 0, 0.4); 
  max-height: 72px;
  line-height: 1.4;
}
.tpfx_h1 {
  font-size: 14px;
}
.tpfx_div5 {
  font-size: 13px;
}
.TPimg{
  margin-bottom: 6px;
  width: 100%;
}
</style>
