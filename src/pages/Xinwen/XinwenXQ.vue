<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
      <span>点击:{{newsinfo.click}}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content"></div>
    <div>
      <comment-bo :id="this.id"></comment-bo>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from "../../components/subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnew/" + this.id)
        .then(result => {
          if (result.body.status === 0) {
            this.newsinfo = result.body.message[0];
          } else {
            Toast("获取新闻详情失败");
          }
        });
    }
  },
  components: {
    "comment-bo": comment
  }
};
</script>

<style>
.newsinfo-container {
  padding: 0 1% 16%;
  background-color: #f1eff5;
}
.title {
  font-size: 16px;
  text-align: center;
  padding: 15px 0;
  color: red;
}
.subtitle {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
</style>
