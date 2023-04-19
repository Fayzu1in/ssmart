<template lang="pug">
section.heroSection
  .container-fluid 
    .hero 
      .hero__left 
        .hero__left-top 
          img(src="/webos-logo.png")
        .hero__left-bottom Magic Remote Control
      .hero__right 
        p НОВИНКА

</template>
<script>
export default {}
</script>
<style lang="scss">
.heroSection {
  background: rgb(83, 83, 83);
  width: 100%;
  .hero {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 100px;
    &__left {
      &-top {
        img {
          height: 300px;
        }
      }
      &-bottom {
        font-size: 48px;
        width: 300px;
        text-align: center;
      }
    }
    &__right {
      p {
        font-size: 44px;
      }
    }
  }
}
</style>
