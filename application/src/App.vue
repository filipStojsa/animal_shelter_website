<template>
  <div>
  <NavbarComponent></NavbarComponent>
  <div>
    <router-view/>
  </div>
  <BannerComponent :reklame="reklame[jezik]"></BannerComponent>
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

BannerComponent {
    position: absolute;
    bottom: 5px;
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
        jezik: 0
      }
    },
    created() {
      this.jezik = localStorage.getItem('jezik')
        if (this.jezik == null) {
            this.jezik = 0
            localStorage.setItem('jezik', 0)
        }
        else this.jezik = parseInt(this.jezik)
    }
  }
</script>

