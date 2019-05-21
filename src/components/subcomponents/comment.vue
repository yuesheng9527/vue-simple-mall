<template>
  <div class="comment-div1">
    <h1>发表评论</h1>
    <hr>
    <textarea class="comment-textarea" v-model="msg" placeholder="请输入内容，最多120字" maxlength="120"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表内容</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="item.index">
        <div class="cmt-title">第{{index+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dateFormat}}</div>
        <div class="cmt-body">{{ (item.content === "undefined") ? "此用户什么都没说。" : item.content }}</div>
      </div>
    </div>
    <mt-button class="comment-button" type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1,
      comments:[],
      msg:""
    };
  },
  created(){
    this.getComments();
  },
  methods: {
    postComment(){
      if(this.msg.trim().length===0){
        return Toast("评论内容不能为空!");
      }
      this.$http.post('http://www.liulongbin.top:3005/api/postcomment/'+this.$route.params.id,{
        content:this.msg.trim()
      }).then(function(result){
        if(result.body.status===0){
          let cmt = {user_name:'匿名用户',add_time:Date.now(),content:this.msg.trim()};
          this.comments.unshift(cmt);
          this.msg = "";
        }
      })
    },
    getMore(){
      this.pageIndex++;
      this.getComments();
    },
    getComments() {
      this.$http
        .get(
          "http://www.liulongbin.top:3005/api/getcomments/" +
            this.id +
            "?pageindex=" +
            this.pageIndex
        )
        .then(result => {
          if (result.body.status === 0) {
            //数组拼接
            this.comments=this.comments.concat(result.body.message)
          } else {
            Toast("获取评论失败!")
          }
        });
    }
  },
  props: ["id"]
};
</script>

<style>
.comment-div1 {
  margin-top: 8px;
  padding-bottom: 50px;
  background-color: #F1EFF5;
}
.comment-div1 h1 {
  font-weight: 1000;
}
.comment-textarea {
  width: 98%;
  height: 100px;
  font-size: 14px;
  border-radius: 5px;
  margin-bottom: 7px;
}
.comment-button {
  margin: 7px 0;
}
.cmt-item {
  margin-top: 5px;
}
.cmt-title {
  font-size: 13px;
  background-color: rgba(102, 102, 102, 0.514);
  margin-bottom: 2px;
  padding: 4px 0;
}
.cmt-body {
  font-size: 14px;
  margin: 5px 0;
  text-indent: 10px;
  padding: 4px 0;
}
</style>