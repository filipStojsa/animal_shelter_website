<template>
<div class="container">
  <div class="add">
      <h2 v-if="jezik == 0">Dodaj oglas</h2>
      <h2 v-if="jezik == 1">New ad</h2>
      <hr>
      <p v-if="jezik == 0">
          Postavite oglas za ljubimcem kao korisnik: <i>{{loged}}</i>
      </p>
      <p v-else>
          Post an ad for your lost pet as user: <i>{{loged}}</i>
      </p>
      <div id="div-table">

          <form action="">
              <div id="table-div">
                <table>
                <tr>
                    <td v-if="jezik == 0">Ime ljubimca&nbsp;</td>
                    <td v-else>Pet name&nbsp;</td>
                    <td>
                        <input class="form-control" type="text" v-model="ime" required>
                    </td>
                </tr>
                <tr>
                    <td v-if="jezik == 0">Opis&nbsp;</td>
                    <td v-else>Description&nbsp;</td>
                    <td>
                        <textarea class="form-control" name="opis" id="" cols="23" rows="3" v-model="opis" required></textarea>
                    </td>
                </tr>
                <tr>
                    <td v-if="jezik == 0">Kontakt telefon&nbsp;</td>
                    <td v-else>Phone number&nbsp;</td>
                    <td>
                        <input class="form-control" type="text" v-model="tel" placeholder="+381 6x xxx xxxx" required>
                    </td>
                </tr>

                <tr>
                    <td colspan="2">
                        <div id="error-div">
                            {{error}}
                        </div>
                    </td>
                </tr>

                </table>
              </div>

                <button v-if="jezik == 0" class="btn btn-outline-primary" @click="dodajOglas()">
                    <i class="fa-solid fa-plus"></i>
                    Dodaj oglas
                </button>
                <button v-else class="btn btn-outline-primary" @click="dodajOglas()">
                    <i class="fa-solid fa-plus"></i>
                   Add
                </button>

          </form>

      </div>
  </div>
</div>
</template>

<style scoped>


#error-div {
    background-color: #f8d7da;
    border-radius: 5px;

}

#table-div {
    background-color: #f9c1ac;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    border: 2px solid #aa867a;
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

input {
    border: 2px solid #aa867a;
}

textarea {
    resize: none;
    border: 2px solid #aa867a;
}

td {
    font-size: 20px;
    padding-bottom: 10px;
}

.add {
    padding: 30px;
    margin: 30px;
    background-color: #FFDDD2;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;

    /* border: 2px solid #aa867a; */
  }

.add p {
    text-align: center;
    font-size: 22px;
  }

  #div-table {
      display: flex;
      justify-content: center;
  }
</style>

<script>

export default {
    name: 'DodajOglas',
    data() {
        return {
            sviOglasi: [],
            loged: '',

            ime: '',
            opis: '',
            tel: '',

            error: '',

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

        document.title = this.jezik == 0 ? 'Azil Aska - Dodaj oglas' : 'Azil Aska - Add an ad'
        this.loged = localStorage.getItem('logged')
        if (this.loged == null) {
            // this.loged = 'teo'
            this.$router.push('/mojnalog')
        }
        else {
            this.loged = JSON.parse(this.loged).username
        }
        this.sviOglasi = JSON.parse(localStorage.getItem('oglasi'))
    },
    methods: {
        dodajOglas() {
            if(/^\+381 6\d \d{3} \d{3,4}$/.test(this.tel) == false) {
                this.error = this.jezik == 0 ? 'Loš je format telefona!' : 'Bad phone format!'
                return
            }
            this.error = this.jezik == 0 ? 'Oglas je uspešno dodat!' : 'Succesfully added!'
            
            let date = new Date()
            let today = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();

            let oglas = {
                ime: this.ime,
                opis: this.opis,
                tel: this.tel,
                username: this.loged,
                datum: today,
                komentari:[]
            }

            this.sviOglasi.push(oglas)

            localStorage.setItem('oglasi',JSON.stringify(this.sviOglasi))
        }
    }
}
</script>