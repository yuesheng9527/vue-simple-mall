<template>
  <div class="tPXQ_div1">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{photoinfo.add_time | dateFormat}}</span>
      <span>点击:{{photoinfo.click}}次</span>
    </p>
    <hr>
    <img v-for="(item,index) in list" :key="index" :src="item.src" @click="getImg(index,list)">
    <div class="content" v-html="photoinfo.content"></div>
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import comment from '../../components/subcomponents/comment.vue'
export default {
  data(){
    return{
      id:this.$route.params.id,
      photoinfo:[],
      list:[]
    }
  },
  created(){
    this.getPhotoInfo();
    this.getThumbs()
  },
  methods:{
    getPhotoInfo(){
      this.$http.get("http://www.liulongbin.top:3005/api/getimageInfo/"+this.id).then(result=>{
        if(result.body.status===0){
          this.photoinfo=result.body.message[0];
        }
      })
    },
    getThumbs(){
      this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(result=>{
        if(result.body.status===0){
          this.list=result.body.message;
        }
      })
    },
    getImg(i,images){
      ImagePreview({
        images
      })
    }
  },
  components:{
    'cmt-box':comment
  }
}
</script>

<style scoped>
.tPXQ_div1{
  padding: 3px;
}
.tPXQ_div1 img{
  width: 30%;
  height: 30%;
  padding: 3px;
}
.tPXQ_div1 h3{
  color: #26A2FF;
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
}
.subtitle{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.content{
  font-size: 13px;
  line-height: 30px;
}
</style>
