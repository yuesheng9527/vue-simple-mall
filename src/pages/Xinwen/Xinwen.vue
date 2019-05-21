<template>
  <div class="Xinwen_div1">
    <div class="Xinwen_div2" v-for="item in newlist" :key="item.id">
      <router-link :to="'/msite/xinwen/xinwenxq/'+item.id" class="roul">
        <div class="Xinwen_div3">
          <img :src="item.img_url" alt>
        </div>
        <div class="Xinwen_div4">
          <div class="Xinwen_div6">{{item.title}}</div>
          <div class="Xinwen_div5">
            <div class="Xinwen_div7">发表时间：{{item.add_time | dateFormat('YYYY-MM-DD HH:MM:SS')}}</div>
            <div class="Xinwen_div7">点击：{{item.click}}次</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newlist: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(result => {
          if (result.body.status === 0) {
            this.newlist = result.body.message;
          } else {
            Toast("获取新闻列表失败");
          }
        });
    }
  }
};
</script>

<style>
.roul{
  display: flex;
  width: 100%;
  height: 100%;
}
.Xinwen_div1 {
  width: 100%;
  height: 100%;
}
.Xinwen_div2 {
  border: solid 2px pink;
  width: 99%;
  height: 9%;
}
.Xinwen_div3 {
  display: flex;
  flex: 1.1;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
}
.Xinwen_div4 {
  flex: 6;
  margin-right: 10px;
}
.Xinwen_div6 {
  display: flex;
  align-items: center;
  height: 50%;
  font-size: 13px;
  color: blue;
}
.Xinwen_div2 img {
  width: 75%;
  height: 75%;
}
.Xinwen_div5 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  font-size: 13px;
  color: blue;
}
</style>
