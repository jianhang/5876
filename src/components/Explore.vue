<template>
  <div style="width:100%">
    <header>
      <h2>探索Galaxy产品</h2>
    </header>
    <section>
      <img v-for="(img,index) in imgurl" :key="index" :src="img.cover_source" alt />
    </section>
    <div class="block">
      <el-carousel trigger="click" autoplay>
        <el-carousel-item v-for="(img,index) in imgurl" :key="index">
          <img :src="img.cover_source" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgurl: []
    };
  },
  created() {
    this.$axios.get("/api/data.json").then(res => {
      this.imgurl = res.data.channel[0].channel_list;
    //   console.log(this.imgurl);
    });
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-weight: bold;
}
h2 {
  font-family: "微软雅黑";
}
section {
  width: 100%;
  display: flex;
  justify-content: center;
}
section img {
  width: 30.3%;
}
.block{
   display: none;
}
.block img{
    width: 100%;
}
@media screen and (max-width: 680px) {
     .block{
         display: block;
     }
     section{
         display: none;
     }
}
</style>