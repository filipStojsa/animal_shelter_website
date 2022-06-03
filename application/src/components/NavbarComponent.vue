<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">

    <img src="/images/logo_azil.png" id="logoImg" alt="">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
          <router-link class="nav-item" to="/"><i class="fa-solid fa-house"></i>&nbsp;Početna stranica</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/zivotinje"><i class="fa-solid fa-paw"></i>&nbsp;Životinje</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/svioglasi"><i class="fa-solid fa-paw"></i>&nbsp;Izgubljeni ljubimci</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/dodaj"><i class="fa-solid fa-paw"></i>&nbsp;Dodaj oglas</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/mojnalog"><i class="fa-solid fa-user"></i>&nbsp;Moj nalog</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/onama"><i class="fa-solid fa-paw"></i>&nbsp;O nama</router-link>&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  </div>
</nav>
</template>

<style lang="less">

@media screen and (max-width: 768px) {
  nav {
    background-color:red;
  }
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
        
      }
    }
}
</script>