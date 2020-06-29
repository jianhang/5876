<template>
  <nav>
    <div class="nav-left">
      <div class="nav-nav">三</div>
      <div class="nav-left-text">
        <span>GALAXY5G</span>
        <span>手机/平板</span>
        <span>电视/影音</span>
        <span>家电/智电</span>
        <span>电脑/办公/存储</span>
        <span>最新活动</span>
      </div>
    </div>
    <div class="nav-logo">
      <div></div>
      <img src="/image/svg-logo.svg" alt />
    </div>
    <div class="nav-right">
      <div class="nav-right-text">
        <span>EXPLORE</span>
        <span>网上商城</span>
        <span>售后服务</span>
        <span>商业解决方案</span>
        <span>盖乐世社区</span>
      </div>
      <div>
        <img src="/image/new-home-ico-search.svg" style="width:20px" />
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>


<style scoped>
nav {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.nav-left {
  display: flex;
  flex: 2;
}
.nav-logo {
  display: flex;
  flex: 1;
  justify-content: center;
}
.nav-right {
  display: flex;
  flex: 2;
  justify-content: flex-end;
}
.nav-left-text {
  display: flex;
  flex: 2;
  justify-content: space-around;
}

.nav-nav {
  display: none;
}
.nav-right-text {
  display: flex;
  flex: 2;
  justify-content: space-around;
}
@media screen and (max-width: 1300px) {
  .nav-nav {
    display: block;
  }
  .nav-left-text {
    display: none;
}
.nav-right-text{
    display: none;
}
}
</style>