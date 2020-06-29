<template>
  <div class="divAll">
    <div class="odiv">
      <van-tabs>
        <van-tab v-for="(img,index) in imgurl" :key="index" :title="img.children_name">
          <div class="divimg">
            <img alt v-for="(i,index) in img.image_source" :key="index" :src="i.iamge" />
          </div>
        </van-tab>
      </van-tabs>
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
  methods: {},
  created() {
    this.$axios.get("/api/data.json").then(res => {
      this.imgurl = res.data.channel[1].channel_children;
      console.log(this.imgurl);
    });
  }
};
</script>

<style scoped>
.divAll {
  width: 100%;
  margin-top: 7%;
}
.odiv {
  width: 100%;
  margin: 0 auto;
}
span {
  font-size: 25px;
}
.divimg {
  width: 100%;

  overflow: hidden;
}
.divimg img {
  float: left;
}
.divimg img:nth-child(1) {
  width: 50%;
  height: 600px;
}
.divimg img:nth-child(2) {
  width: 20%;
}
.divimg img:nth-child(3) {
  width: 20%;
}
.divimg img:nth-child(4) {
  width: 20%;
}
.divimg img:nth-child(5) {
  width: 20%;
}
@media screen and (max-width: 1000px) {
  .divimg img:nth-child(1) {
    width: 100%;
    height: 600px;
  }
  .divimg img:nth-child(2) {
    width: 50%;
  }
  .divimg img:nth-child(3) {
    width: 50%;
  }
  .divimg img:nth-child(4) {
    width: 50%;
  }
  .divimg img:nth-child(5) {
    width: 50%;
  }
}
</style>