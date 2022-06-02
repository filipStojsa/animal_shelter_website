<template>
  <div class="add">
      <h2>Dodaj oglas</h2>
      <br>
      <p>
          Postavite oglas za ljubimcem kao: <i>{{loged}}</i>
      </p>
      <div id="div-table">

          <form action="">
              <div id="table-div">
                <table>
                <tr>
                    <td>Ime ljubimca:</td>
                    <td>
                        <input type="text" v-model="ime" required>
                    </td>
                </tr>
                <tr>
                    <td>Opis:</td>
                    <td>
                        <textarea name="opis" id="" cols="23" rows="3" v-model="opis" required></textarea>
                    </td>
                </tr>
                <tr>
                    <td>Kontakt telefon:</td>
                    <td>
                        <input type="text" v-model="tel" placeholder="+381 6x xxx xxxx" required>
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

                <button class="btn btn-outline-primary" @click="dodajOglas()">
                    <i class="fa-solid fa-plus"></i>
                    Dodaj oglas
                </button>

          </form>

      </div>
  </div>
</template>

<style scoped>
#error-div {
    background-color: #f8d7da;
    border-radius: 5px;

}

#table-div {
    background-color: #E29578;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
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

textarea {
    resize: none;
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
  }

.add p {
    text-align: left;
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

            error: ''
        }
    },
    created() {
        // TODO: handle anonymous users
        this.loged = localStorage.getItem('loged')
        this.sviOglasi = JSON.parse(localStorage.getItem('oglasi'))
    },
    methods: {
        dodajOglas() {
            if(/^\+381 6\d \d{3} \d{3,4}$/.test(this.tel) == false) {
                this.error = 'Loš je format telefona!'
                return
            }
            
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