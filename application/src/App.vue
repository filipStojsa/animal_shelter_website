<template>
  <div>
  <NavbarComponent></NavbarComponent>
  <div>
    <router-view/>
  </div>
  <BannerComponent :reklame="reklame"></BannerComponent>
  </div>
</template>

<style lang="less">

body {
  background-color: #EDF6F9;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<script>
  import zivotinje from './data/zivotinje.js'
  import NavbarComponent from '@/components/NavbarComponent.vue'
  import BannerComponent from './components/BannerComponent.vue'

  import reklame from '@/data/reklame.js'

  export default {
    components: {
    NavbarComponent,
    BannerComponent,
},
    data() {
      return {
        zivotinje: zivotinje,
        reklame: reklame,
      }
    }
  }
</script>

