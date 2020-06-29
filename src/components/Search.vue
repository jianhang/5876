<template>
  <div class="odiv">
    <nav>
      <h2>我们能帮忙找点什么吗?</h2>
    </nav>
    <div class="divSearch">
      <input type="text" placeholder="Galaxy S20" @click="border($event)" />
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        border(e){
            var input = e.target
        }
    },
}
</script>


<style scoped>
.odiv{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
nav{
    width: 100%;
    margin:0 auto;
}
h2{
    width: 100%;
    text-align: center;
}
.divSearch{
    width: 100%;
    height: 50px;
    margin: 0 auto;
}
input{
    border: none;
    width: 50%;
    height: 35px;
    line-height: 35px;
    border-bottom: 2px solid black;
    margin-left: 25%;
}
.iconfont{
    font-size: 26px;
}
</style>