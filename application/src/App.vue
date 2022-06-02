<template>
  <div>
    <nav>
      <router-link to="/"><i class="fa-solid fa-house"></i>&nbsp;Početna stranica</router-link> |

      <!-- zivotinje -->

      <!-- Napomena: Usvojena je pretpostavka da ne postoji stranica koja prikazuje sve zivotinje svih kategorija. -->
      <!-- <router-link to="/zivotinje">Životinje</router-link> | -->
      <i class="fa-solid fa-paw"></i>&nbsp;Životinje |

      <span v-for="vrsta in zivotinje" :key='vrsta.vrsta'>
          <!-- TODO react to route change -->
          <router-link :to="'/zivotinje/' + vrsta.vrsta">{{vrsta.vrsta}}</router-link> |
          
          <span v-for="zivotinja in vrsta.z" :key='zivotinja.id'> 
              <router-link :to="'/zivotinje/' + vrsta.vrsta + '/' + zivotinja.id" >{{zivotinja.naziv}}</router-link> |
          </span>
      </span>
      
      <router-link to="/onama"><i class="fa-solid fa-check"></i>&nbsp;O nama</router-link> |
      <router-link to="/mojnalog"><i class="fa-solid fa-user"></i>&nbsp;Moj nalog</router-link> |
    </nav>
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
  import zivotinje from './data/zivotinje.js'

  export default {
    components: {
      
    },
    data() {
      return {
        zivotinje: zivotinje
      }
    }
  }
</script>

