<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">

    <img src="/images/logo_azil.png" id="logoImg" alt="">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <div v-if='jezik == 0' class="navbar-nav">
          <router-link class="nav-item" to="/"><i class="fa-solid fa-house"></i>&nbsp;Početna stranica</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/zivotinje"><i class="fa-solid fa-paw"></i>&nbsp;Životinje</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/svioglasi"><i class="fa-solid fa-paw"></i>&nbsp;Izgubljeni ljubimci</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/dodaj"><i class="fa-solid fa-paw"></i>&nbsp;Dodaj oglas</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/mojnalog"><i class="fa-solid fa-user"></i>&nbsp;Moj nalog</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/onama"><i class="fa-solid fa-paw"></i>&nbsp;O nama</router-link>&nbsp;&nbsp;&nbsp;
      </div>
      <div v-else class="navbar-nav">
          <router-link class="nav-item" to="/"><i class="fa-solid fa-house"></i>&nbsp;Home page</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/zivotinje"><i class="fa-solid fa-paw"></i>&nbsp;Animals</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/svioglasi"><i class="fa-solid fa-paw"></i>&nbsp;Lost pets</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/dodaj"><i class="fa-solid fa-paw"></i>&nbsp;Add lost pet</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/mojnalog"><i class="fa-solid fa-user"></i>&nbsp;My account</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/onama"><i class="fa-solid fa-paw"></i>&nbsp;About</router-link>&nbsp;&nbsp;&nbsp;
      </div>
    </div>

    <button @click='promeniJezik()' class='jezik' v-if="jezik == 0"><i class="fa-solid fa-globe"></i>&nbsp;ENG</button>
    <button @click='promeniJezik()' class='jezik' v-else><i class="fa-solid fa-globe"></i>&nbsp;SR</button>
  </div>
</nav>
</template>

<style lang="less">

.jezik {
  padding: 10px;
  border: none;
  background-color:#c8f1fa;
  border-radius: 5px;
  color:#0d2228;
}

.jezik:hover {
  color: #c8f1fa;
  background-color: #0d2228;
}

#logoImg {
  width: 150px;
}

nav {
  padding: 30px;
  background-color: #7cb2be;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #FFDDD2;
    }
  }
}

.nav-item {
  padding: 20px;
}
</style>

<script>

export default {
    name: 'NavbarComponent',
    components: {
      
    },
    data() {
      return {
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

    },
    methods: {
      promeniJezik() {
        this.jezik = (this.jezik == 0 ? 1 : 0)
        localStorage.setItem('jezik', this.jezik)
        window.location.reload()
      }
    }
}
</script>