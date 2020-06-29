<template>
  <div>
    <div class="block">
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="(img,index) in imgurl" :key="index">
          <img :src="img.swiper_source" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="none">
    <el-carousel trigger="click" autoplay >
      <el-carousel-item v-for="(img,index) in imgurl" :key="index">
        <img :src="img.swiper_source" alt="">
      </el-carousel-item>
    </el-carousel>
    </div>
  </div>
</template>
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
      this.imgurl = res.data.swipers;
      //   console.log(res.data.swipers)
    });
  }
};
</script>

<style scoped>
.block {
  width: 100%;
}
.block img {
  width: 100%;
  height: auto;
}
.none{
    width: 100%;
    margin: 0 auto;
    text-align: center;
     display: none;
}
.none img{
    width: 80%;
    height: auto;
   
}
p{
    font-size: 13px;
    height: 50px;
    
    border-bottom: 1px solid black;
}
@media screen and (max-width: 800px) {
     .none {
    display: block;
    height: 200px;
                   }
.block  {

  display: none;
}
}
</style>