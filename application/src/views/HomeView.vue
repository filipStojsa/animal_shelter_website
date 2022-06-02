<template>
  <div class="home row">
      <h2>
        <i class="fa-solid fa-bone"></i>
        <strong>
          Učini pametnu stvar i udomi neku kucu, macu ili ptičicu!
        </strong>
      </h2>
      <br><br>
      <div class="col-lg-6 col-sm-12">
        <p>
          Mi u Azilu Aska samo želimo da udomimo svaku životinju. Naš jedini cilj je da one budu srećne! <br><br>
          Pogledaj životinje koje smo spasili i možda si baš ti onaj koga su čekale sve ovo vreme ili
          možda žeilš da pomogneš nekome ko traži svog ljubimca...
        </p>

        <button class="btn btn-outline-primary">
          <router-link class="btn-router" to="/zivotinje">Zivotinje</router-link>
        </button> &nbsp;&nbsp;&nbsp;
        <button class="btn btn-outline-primary">
          <router-link class="btn-router" to="/izgubljeni">Izgubljeni ljubimci</router-link>
        </button>
      
      </div>

      <div class="col-lg-6">
        <img id="dog-index-img" src="/images/dog.png" alt="">
      </div>
      
  </div>

  <div class="home row">
      <h2>
        <i class="fa-solid fa-paw"></i> 
        <strong> Možda bi da objaviš oglas ili pogledaš naše kritike</strong>
      </h2>
      <br><br>
      <div class="col-lg-6">
        <img id="cat-index-img" src="/images/cat.png" alt="">
      </div>
      <div class="col-lg-6 col-sm-12"  id="cat-index-txt">
        <p>
          A šta ako si izgubio svog krznatog ili pernatog prijatelja? Ne očajavaj, na našem sajtu možeš
          da objaviš oglas o potrazi, a naši članovi će te obavestiti ukoliko naiđu na neki trag!
          <br><br>
          I dalje nisi ubeđen da smo mi pravi azil? Pogledaj neke od naših pohvala i nagrada!
        </p>

        <button class="btn btn-outline-primary">
          <router-link class="btn-router" to="/dodaj">Dodaj oglas</router-link>
        </button> 

        &nbsp;&nbsp;&nbsp;

        <button class="btn btn-outline-primary">
          <router-link class="btn-router" to="/o_nama">O nama</router-link>
        </button>
      
      </div>

      
  </div>
</template>

<style scoped>
  .btn-router {
    text-decoration: none;
    color: #006D77;
  }

  .btn-outline-primary:hover .btn-router {
    text-decoration: none;
    color: white;
  }

  .btn-outline-primary {
    color: #006D77;
    border-color: #006D77;
    border-width: 2px;
  }

  .btn-outline-primary:hover {
    color: white;
    background-color: #006D77;
    border-width: 2px;

  }

  .home {
    padding: 30px;
    margin: 30px;
    background-color: #FFDDD2;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .home p {
    text-align: left;
    font-size: 22px;
  }

  #dog-index-img {
    width: 90%;
    margin-bottom: -30px;
    margin-right: -138px;
  }

  #cat-index-img {
    width: 60%;
    margin-bottom: -30px;
    margin-left: -50px;

  }

  #cat-index-txt {
    padding-top: 40px;
  }

</style>

<script>
// @ is an alias to /src

import korisnici from '../data/korisnici.js'
import oglasi from '../data/oglasi.js'


export default {

  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      sviOglasi: oglasi
    }
  },

  created() {
    if(localStorage.getItem('oglasi') == null) {
      localStorage.setItem('oglasi', JSON.stringify(this.sviOglasi))
    }
    else {
      this.sviOglasi = JSON.parse(localStorage.getItem('oglasi'))
    }
    localStorage.setItem('korisnici', JSON.stringify(korisnici))
    localStorage.setItem("loged", korisnici[1].username)
  }
}
</script>
