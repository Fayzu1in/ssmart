<template lang="pug">
section.deviceCard 
  .container-fluid 
    .cards 
      .cards__top 
        .cards__top-left.tvCard TV
        .cards__top-right
          .characteristics Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo repellat sapiente voluptatem sunt, ad, error expedita velit, voluptatum saepe accusantium tempora numquam deleniti eos deserunt. Ea nostrum corrupti ratione molestiae soluta laudantium, natus quod non voluptate eligendi asperiores vero aliquid ipsa, quibusdam molestias! Nihil quo reprehenderit voluptatibus nostrum velit.
          .firstImage Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum a perferendis libero sunt blanditiis error consectetur possimus, tenetur at ducimus?
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
    justify-content: space-between;
    &-left {
      width: 500px;
      height: 630px;
      border-radius: 10px;
      background-color: rgb(83, 83, 83);
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 54px;
    }
    &-right {
      .characteristics,
      .firstImage {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        margin-top: 30px;
        width: 500px;
        height: 300px;
        border-radius: 10px;
        font-size: 20px;
        padding: 20px;
        background-color: rgb(83, 83, 83);
      }
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    .secondImage,
    .thirdImage {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 500px;
      height: 300px;
      border-radius: 10px;
      font-size: 52px;
      padding: 20px;
      background-color: rgb(83, 83, 83);
    }
  }
}
</style>
