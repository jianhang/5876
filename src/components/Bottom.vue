<template>
  <div>
    <div class="odiv">
      <ul>
        <li class="oli">产品与服务</li>
        <li>智能手机</li>
        <li>手机产品评测</li>
        <li>智能平板</li>
        <li>智能穿戴设备</li>
        <li>电视</li>
        <li>冰箱</li>
        <li>洗衣机</li>
      </ul>
      <ul>
        <li>空气净化器</li>
        <li>空凋</li>
        <li>个人电脑</li>
        <li>显示器</li>
        <li>固态硬盘SSD</li>
        <li>储存卡</li>
        <li>USB闪存卡</li>
      </ul>
      <ul>
        <li class="oli">购买渠道</li>
        <li>最新活动</li>
        <li>网上商城</li>
        <li>三星Galaxy授权体验店</li>
        <li>全产品门店查询</li>
        <li>电视/影音产品门店查询</li>
        <li>非全新机</li>
      </ul>
      <ul>
        <li class="oli">服务支持</li>
        <li>邮件咨询</li>
        <li>联系我们</li>
        <li>服务中心查询</li>
      </ul>
      <ul>
        <li class="oli">关于我们</li>
        <li>关于三星</li>
        <li>新闻中心</li>
        <li>人才招聘</li>
        <li>三星开发者网站</li>
        <li>成为技术服务商</li>
        <li>ECO信息</li>
      </ul>
    </div>
    <div class="div_bottom">
      <el-collapse>
        <el-collapse-item title="产品与服务" name="1">
          <ul>
            <li>智能手机</li>
            <li>手机产品评测</li>
            <li>智能平板</li>
            <li>智能穿戴设备</li>
            <li>电视</li>
            <li>冰箱</li>
            <li>洗衣机</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="购买渠道" name="2">
          <ul>
            <li>最新活动</li>
            <li>网上商城</li>
            <li>三星Galaxy授权体验店</li>
            <li>全产品门店查询</li>
            <li>电视/影音产品门店查询</li>
            <li>非全新机</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="服务设置" name="3">
          <ul>
            <li>邮件咨询</li>
            <li>联系我们</li>
            <li>服务中心查询</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="关于我们" name="4">
          <ul>
            <li>关于三星</li>
            <li>新闻中心</li>
            <li>人才招聘</li>
            <li>三星开发者网站</li>
            <li>成为技术服务商</li>
            <li>ECO信息</li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style scoped>
.odiv {
  width: 80%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.oli {
  font-weight: bold;
}
.div_bottom{
    width: 70%;
    margin: 0 auto;
    display: none;
}
@media screen and (max-width: 800px) {
     .div_bottom{
         display: block;
     }
     .odiv{
         display: none;
     }
}
</style>