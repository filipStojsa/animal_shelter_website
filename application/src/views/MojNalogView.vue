<template>
    <div>
        <div class="row" id="mojNalog" ref="mojNalog">
            <div class="col-sm-12 col-md-12 col-lg-8">
                <div class="kolona">
                    <h2 v-if="jezik == 0" class="naslov"><i class="fa-solid fa-pen"></i>&nbsp;Moji oglasi</h2>
                    <h2 v-else class="naslov"><i class="fa-solid fa-pen"></i>&nbsp;My ads</h2>
                    <hr>
                    <div class="row">
                        <div v-for="oglas in this.oglasi" :key="oglas.ime" class="col-sm-12 col-md-6 oglas">
                            <OglasComponent :oglas="oglas"></OglasComponent>
                            <button @click="obrisiOglas(oglas)" class="btn deleteDugme"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
                <div class="kolona">
                    <h2 v-if="jezik == 0" class="naslov"><i class="fa-solid fa-comments"></i>&nbsp;Moji komentari</h2>
                    <h2 v-else class="naslov"><i class="fa-solid fa-comments"></i>&nbsp;My comments</h2>
                    <hr>
                    <div class="row">
                        <div class="col-sm-12">
                            <div v-for="k in mojiKomentari" :key="k.oglas" class="komentar" style="padding:10px">
                                <div class="mojKomentar">
                                    <h5><i class="fa-solid fa-thumbtack"></i>&nbsp;{{k.oglas}}</h5>
                                    <i class="fa-solid fa-user"></i>&nbsp;{{k.okacio}}
                                    <hr>
                                    <i class="fa-solid fa-comment"></i>&nbsp;<i>{{k.tekst}}</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" id="login" ref="login">
            <div class="col-sm-4">
                <div class="kolona" v-if="jezik == 0">
                    <h2><i class="fa-solid fa-user"></i>&nbsp;Login</h2>
                    <hr>
                    <h5>Korisničko ime</h5>
                    <input type="text" v-model="username">
                    <br><br>
                    <h5>Lozinka</h5>
                    <input type="password" v-model="password">
                    <hr>
                    <button class="btn btn-secondary" @click="ulogujMe()"><i class="fa-solid fa-arrow-right-to-bracket"></i>&nbsp;Uloguj me</button>
                </div>
                <div class="kolona" v-else>
                    <h2><i class="fa-solid fa-user"></i>&nbsp;Login</h2>
                    <hr>
                    <h5>Username</h5>
                    <input type="text" v-model="username">
                    <br><br>
                    <h5>Password</h5>
                    <input type="password" v-model="password">
                    <hr>
                    <button class="btn btn-secondary" @click="ulogujMe()"><i class="fa-solid fa-arrow-right-to-bracket"></i>&nbsp;Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    input {
        padding: 6px;
        border-radius: 5px;
        width: 70%;
    }
    .row {
        justify-content: center;
        display:flex;
        width: 100%;
        margin: 0;
    }
    .col-sm-12 {
        justify-content: center;
        align-self: center;
        padding: 0;
    }
    .kolona {
        align-self: center;
        justify-content: left;
        border-radius: 5px;
        background-color: #f6e6e1;
        margin: 30px;
        padding: 30px;
        min-height: 650px;
        box-shadow: 5px 10px 18px #d5d4d3;
    }
    .naslov {
        color: #b56e54;
    }
    #login .kolona {
        min-height: 300px;
    }
    .oglas {
        padding: 10px;
    }
    .deleteDugme {
        color: red;
        font-size: 24px;
    }
    .deleteDugme:hover {
        color: rgb(135, 0, 0);
    }
    .mojKomentar {
        background-color: #cdcdcd;
        color:#5f5f5f;
        border: 2px solid #5f5f5f;
        border-radius: 5px;
        padding: 10px;
        text-align: left; 
    }
</style>

<script>
import korisnici from '../data/korisnici.js'
import inicijalniOglasi from '../data/oglasi.js'
import OglasComponent from '../components/MojOglasComponent.vue'

export default {
    name: 'MojNalogView',
    components: {
        OglasComponent,
    },
    data() {
        return {
            korisnici: korisnici,
            korisnik: null,
            username: '',
            password: '',
            oglasi: [],
            inicijalniOglasi: inicijalniOglasi,
            mojiKomentari: [],
            jezik: 0
        }
    },
    methods: {
        initData() {
            if (this.korisnik == null) return
            var oglasiJSON = localStorage.getItem('oglasi')
            if (oglasiJSON == null) {
                this.oglasi = this.inicijalniOglasi
                localStorage.setItem('oglasi', JSON.stringify(this.oglasi))
            }
            else {
                this.oglasi = JSON.parse(oglasiJSON)
            }

            // moji komentari (moramo ih traziti pre selektovanja oglasa)
            for(i = 0; i < this.oglasi.length; i++) {
                for(var j = 0; j < this.oglasi[i].komentari.length; j++) {
                    if (this.oglasi[i].komentari[j].username == this.korisnik.username) {
                        this.mojiKomentari.push({
                            'oglas': this.oglasi[i].ime,
                            'okacio': this.oglasi[i].username,
                            'tekst': this.oglasi[i].komentari[j].tekst
                        })
                    }
                }
            }

            // moji oglasi
            var mojiOglasi = []
            for(var i = 0; i < this.oglasi.length; i++) {
                if (this.oglasi[i].username == this.korisnik.username) {
                    mojiOglasi.push(this.oglasi[i])
                }
            }
            this.oglasi = mojiOglasi
        },
        loadData() {
            if (this.korisnik == null) {
                this.korisnik = localStorage.getItem('logged')
            }
            if (this.korisnik == null) {
                this.$refs.mojNalog.style.display = 'none'
                this.$refs.login.style.display = 'flex'
            }
            else {
                this.korisnik = JSON.parse(this.korisnik)
                this.$refs.mojNalog.style.display = 'flex'
                this.$refs.login.style.display = 'none'
            }
        },
        ulogujMe() {
            var korisnik = null
            this.korisnici.forEach(k => {
                if (k.username == this.username && k.password == this.password) {
                    korisnik = k
                }
            })
            if (korisnik != null) {
                localStorage.setItem('logged', JSON.stringify(korisnik))

                this.loadData()
                this.initData()
            }
            else alert('Greška: Pogrešni kredencijali!')
        },
        obrisiOglas(oglas) {
            var index = -1
            for(var i = 0; i < this.oglasi.length; i++) {
                if (this.oglasi[i].ime == oglas.ime) {
                    index = i
                    break
                }
            }
            this.oglasi.splice(index, 1)
            localStorage.setItem('oglasi', JSON.stringify(this.oglasi))
        }
    },
    created() {
        document.title = 'Azil Aska - Moj nalog'

        // this.loadData()

        this.jezik = localStorage.getItem('jezik')
        if (this.jezik == null) {
            this.jezik = 0
            localStorage.setItem('jezik', 0)
        }
        else this.jezik = parseInt(this.jezik)
    },
    mounted() {
        this.loadData()
        this.initData()
    }
}
</script>