<template>
  <div class="block">
    <el-carousel trigger="click" autoplay >
      <el-carousel-item v-for="(img,index) in imgurl" :key="index">
        <img :src="img.swiper_source" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<script>
export default {
  data() {
    return {
        imgurl:[]
    };
  },
  created() {
      this.$axios.get('/api/data.json')
      .then(res=>{
          this.imgurl = res.data.swipers
        //   console.log(res.data.swipers)
      })
  },
};
</script>

<style scoped>
div{
    width: 100%;
    height: 555px;
    text-align: center;
}
img{
    width: 90.7%;
    height: auto;
}
@media screen and (max-width:1000px){
    div{
        height: 300px;
    }
}
@media screen and (max-width:680px){
    div{
        height:200px;
    }
}
</style>