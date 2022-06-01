<template>
  <NavbarComponent></NavbarComponent>
  <div class="container">
    <router-view/>
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

  export default {
    components: {
      NavbarComponent
    },
    data() {
      return {
        zivotinje: zivotinje
      }
    }
  }
</script>

