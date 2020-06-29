<template>
  <div>
    <div class="advertising">人生自古谁无死</div>
    <Header></Header>
    <Swiper></Swiper>
    <Explore></Explore>

    <Activity></Activity>
    <Search></Search>
    <SwiperTwo></SwiperTwo>
    <Bottom></Bottom>
  </div>
</template>


<script>
import Header from "../components/Header";
import Swiper from "../components/Swiper";
import Explore from "../components/Explore";
import Activity from "../components/Activity";
import Search from "../components/Search";
import SwiperTwo from "../components/SwiperTwo";
import Bottom from "../components/Bottom";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Swiper,
    Explore,
    Activity,
    Search,
    SwiperTwo,
    Bottom
  }
};
</script>

<style scoped>
.advertising {
  width: 100%;
  background: #eee;
  text-align: right;
  color: gray;
}
</style>