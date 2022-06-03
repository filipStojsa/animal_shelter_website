<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">

    <img src="/images/logo_azil.png" id="logoImg" alt="">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
          <router-link class="nav-item" to="/">Početna stranica</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/zivotinje">Zivotinje</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/svioglasi">Izgubljeni ljubimci</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/dodaj">Dodaj oglas</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/nalog">Moj nalog</router-link>&nbsp;&nbsp;&nbsp;
          <router-link class="nav-item" to="/o_nama">O nama</router-link>&nbsp;&nbsp;&nbsp;

      </div>
    </div>
  </div>
</nav>
</template>

<style lang="less">

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
    name: 'NavbarComponent'
}
</script>