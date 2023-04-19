<template lang="pug">
#app
  TheNavbar
  Nuxt.wrapper
</template>
<script>
export default {}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-family: 'Jost', sans-serif;
  background: grey;
}
.container-fluid {
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
}
</style>
