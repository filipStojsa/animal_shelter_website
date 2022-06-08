<template>
<div class="container">
  <div class="home row">
    <div class="col-sm-12" style="padding-bottom: 20px">
      <h2>
        <i class="fa-solid fa-rectangle-ad"></i>
        <strong v-if="jezik == 0"> Ovo su najnoviji oglasi na našem saju, pogledaj ih!</strong>
        <strong v-else> These are the latest ads on our site, check them out!</strong>
      </h2>
    </div>

    <!-- fresh adds -->

    <div class="col-lg-4 col-sm-12">
      <div class="fresh-ad" id="fresh-ad-1">
      </div>
    </div>

    <div class="col-lg-4 col-sm-12">
      <div class="fresh-ad" id="fresh-ad-2">
      </div>
    </div>

    <div class="col-lg-4 col-sm-12">
      <div class="fresh-ad" id="fresh-ad-3">
      </div>
    </div>

  </div>

  <div class="home row">
      <h2>
        <i class="fa-solid fa-bone"></i>
        <strong v-if="jezik == 0">
          Učini pametnu stvar i udomi neku kucu, macu ili ptičicu!
        </strong>
        <strong v-else>
          Do a smart thing and adopt a house, a cat or a bird!
        </strong>
      </h2>
      <br><br>
      <div class="col-lg-6 col-sm-12">
        <p v-if="jezik == 0">
          Mi u Azilu Aska samo želimo da udomimo svaku životinju. Naš jedini cilj je da one budu srećne! <br><br>
          Pogledaj životinje koje smo spasili i možda si baš ti onaj koga su čekale sve ovo vreme ili
          možda žeilš da pomogneš nekome ko traži svog ljubimca...
        </p>
        <p v-else>
          We at Aska Asylum just want to adopt every animal. Our only goal is to make them happy! <br> <br>
          Look at the animals we saved and maybe you're the one they've been waiting for all this time or
          maybe you want to help someone who is looking for their pet ...
        </p>

        <!-- <button class="btn btn-outline-primary">
          <router-link class="btn-router" to="/zivotinje">Zivotinje</router-link>
        </button> &nbsp;&nbsp;&nbsp; -->
        <button v-if="jezik == 0" class="btn btn-outline-primary">
          <router-link class="btn-router" to="/svioglasi">Izgubljeni ljubimci</router-link>
        </button>
        <button v-else class="btn btn-outline-primary">
          <router-link class="btn-router" to="/svioglasi">Lost pets</router-link>
        </button>
      
      </div>

      <div class="col-lg-6">
        <img id="dog-index-img" src="/images/dog.png" alt="">
      </div>
      
  </div>

  <div class="home row">
      <h2>
        <i class="fa-solid fa-paw"></i> 
        <strong  v-if="jezik == 0"> Možda bi da objaviš oglas ili pogledaš naše kritike</strong>
        <strong  v-else> Maybe you would like to post an ad or look at our reviews</strong>
      </h2>
      <br><br>
      <div class="col-lg-6">
        <img id="cat-index-img" src="/images/cat.png" alt="">
      </div>
      <div class="col-lg-6 col-sm-12"  id="cat-index-txt">
        <p v-if="jezik == 0">
          A šta ako si izgubio svog krznatog ili pernatog prijatelja? Ne očajavaj, na našem sajtu možeš
          da objaviš oglas o potrazi, a naši članovi će te obavestiti ukoliko naiđu na neki trag!
          <br><br>
          I dalje nisi ubeđen da smo mi pravi azil? Pogledaj neke od naših pohvala i nagrada!
        </p>
        <p v-else>
          And what if you lost your furry or feathered friend? Don't despair, you can on our site
          to post a search ad, and our members will let you know if they come across a clue!
          <br> <br>
          Still not convinced that we are a real asylum? Check out some of our compliments and awards!
        </p>

        <button v-if="jezik == 0" class="btn btn-outline-primary">
          <router-link class="btn-router" to="/dodaj">Dodaj oglas</router-link>
        </button> 
        <button v-else class="btn btn-outline-primary">
          <router-link class="btn-router" to="/dodaj">Add an ad</router-link>
        </button>

        &nbsp;&nbsp;&nbsp;

        <button v-if="jezik == 0" class="btn btn-outline-primary">
          <router-link class="btn-router" to="/onama">O nama</router-link>
        </button>
        <button v-else class="btn btn-outline-primary">
          <router-link class="btn-router" to="/onama">About us</router-link>
        </button>
      
      </div>

      
  </div>
</div>
</template>

<style scoped>
  .fresh-ad {
    background-color: #83C5BE;
    border-radius: 7px;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 10px;
  }

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
      sviOglasi: oglasi,
      jezik: 0
    }
  },

  created() {
    document.title = 'Azil Aska - Početna'
    
    if(localStorage.getItem('oglasi') == null) {
      localStorage.setItem('oglasi', JSON.stringify(this.sviOglasi))
    }
    else {
      this.sviOglasi = JSON.parse(localStorage.getItem('oglasi'))
      if (this.sviOglasi.length > 0) {
        if(this.sviOglasi[0].ime == "") {
          this.sviOglasi.shift()
        }
      }
    }
    localStorage.setItem('korisnici', JSON.stringify(korisnici))
    localStorage.setItem("loged", korisnici[1].username)

    this.jezik = localStorage.getItem('jezik')
    if (this.jezik == null) {
        this.jezik = 0
        localStorage.setItem('jezik', 0)
    }
    else this.jezik = parseInt(this.jezik)

  },

  mounted() {
    
    let num = 0
    let i = this.sviOglasi.length

    while(num < 3 && i > 0) {
      let oglas = this.sviOglasi[i - 1]

      let tmp = "<h4><i>" 
        + oglas.ime 
        + "</i></h4>"
        + "<hr>"
        + "<i>" + oglas.opis + "</i>"
        + "<br><br>"
        + "<i class='fa-solid fa-phone'></i> "
        + "<a href='tel:" + oglas.tel + "'>" + oglas.tel + "</a>"
      
      let n = num+1
      document.getElementById("fresh-ad-" + n).innerHTML = tmp

      num++
      i--
    }
  }

}
</script>
