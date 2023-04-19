<template lang="pug">
section.navbar 
  .navbarContainer 
    .navbar__left 
      p SSmart
      p About company
      p Dillers
      p Product 
    .navbar__right 
      p Support 
      p Basket
      p User
</template>
<script>
export default {}
</script>
<style lang="scss">
.navbar {
  background: #ee1f56;
  color: #fff;
  font-size: 20px;
  padding: 15px 0;
  .navbarContainer {
    max-width: 1050px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  &__left,
  &__right {
    display: flex;
    p {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
}
</style>
