<template>
  <div class="twjs_div1">
  <h3>{{info.title}}</h3>
  <hr>
  <div v-html="info.content"></div>
  </div>
</template>
 
<script>
export default {
  data(){
    return{
      info:{},
      id:this.$route.params.id
    }
  },
  created(){
    this.getGoodsDesc();
  },
  methods:{
    getGoodsDesc() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/goods/getdesc/" + this.id)
        .then(result => {
          if (result.body.status === 0) {
            this.info = result.body.message[0];
          }
        });
    },
  }
}
</script>

<style>
.twjs_div1{
  padding: 4px 4px 70px;
  background-color: #F1EFF5;
}
.twjs_div1 h3{
  font-size: 16px;
  color: #226aff;
  text-align: center;
  margin: 15px 0px;
}
.twjs_div1 img{
  margin-top: 5px;
  width: 100%;
}
</style>
