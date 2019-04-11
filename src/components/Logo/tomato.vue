<template>
  <div>
    <img class="img"
         src="@/assets/tomato.jpg"
         alt="@/assets/tomato.jpg">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";
.img {
  margin: p2r(104) p2r(312) p2r(24);
  width: p2r(126);
  height: p2r(126);
  border-radius: p2r(20);
}
</style>
