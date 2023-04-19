<template lang="pug">
section.deviceCard 
  .container-fluid 
    .cards 
      .cards__top 
      .cards__top-left.tvCard TV
      .cards__top-right
        .characteristics Характеристики
        .firstImage 1
      .cards__bottom 
        .secondImage 2
        .thirdImage 3
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.cards {
  color: #ffff;
  &__top {
    display: flex;
  }
}
</style>
