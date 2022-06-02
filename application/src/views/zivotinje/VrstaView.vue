<template>
    <div style="padding:35px">
        <router-view :key="this.$route.path">
        <div class="row centriraj" >
            <div class="col-sm-12 centrirajKolonu">
                <p class="breadcrumbs"> 
                    Životinje&nbsp;<i class="fa-solid fa-arrow-right"></i>&nbsp;
                    <router-link :to="'/zivotinje/' + vrsta" >{{this.$route.params.vrsta}}</router-link>
                </p>
            </div>
            <div class="col-sm-12">
                <div class="row naslovnaTraka">
                    <div class="col-sm-12 col-md-3 levo">
                        <h1 class="naslov"><i class="fa-solid fa-feather-pointed"></i>&nbsp;{{ vrsta }}</h1>
                    </div>
                    <div class="col-sm-12 col-md-9 desno">
                        <div id="forma">
                            <i class="fa-solid fa-filter"></i>&nbsp;
                            <select class="sortKriterijum" v-model="sortirajPo">
                                <option value="1">
                                     Naziv
                                </option>
                                <option value="0">
                                     Starost
                                </option>
                            </select> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <select class="sortKriterijum" v-model="sortKriterijum">
                                <option value="1">
                                     Rastuće
                                </option>
                                <option value="-1">
                                    Opadajuće
                                </option>
                            </select> &nbsp;
                            <button class="btn sortDugme" @click="sortiraj()">
                                <i v-if="sortKriterijum == 1" class="fa-solid fa-arrow-up"></i>
                                <i v-else class="fa-solid fa-arrow-down"></i>
                                &nbsp;Sortiraj
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input class="pretraga" type="text" v-model="kljuc">
                            &nbsp;
                            <button class="btn sortDugme" @click="pretraga()">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                &nbsp;Pretraži
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row centriraj">

        </div>
        

        <!-- <div class="zivotinje">
            <div v-for="z in zivotinje" :key="z.id">{{z.naziv}} <hr> </div> 
        </div> -->
        <hr>
        <div class="row" id="sveZivotinje">
            <div v-for="z in zivotinje" class="col-sm-12 col-md-6 col-lg-4 zivotinja"  :key="z.id">
                <ZivotinjaComponent :zivotinja="z" :vrsta="vrsta"></ZivotinjaComponent>
            </div>
        </div>
        
        </router-view>
    </div>
</template>

<style scoped>
    .centriraj {
        display: flex; 
        justify-content: center;
    }
    .centrirajKolonu {
        justify-content: center;
    }
    .breadcrumbs{
        padding: 5px;
    }
    .breadcrumbs a{
        color: #009caa;
    }
    .naslovnaTraka {
        border-radius: 5px;
        background-color: #a0d7dc;
        color: #1d4843;
        margin: 0px 18px 0px 18px;
        padding: 25px;
        box-shadow: 5px 10px 18px #d5d4d3;
    }
    .levo {
        text-align: left;
    }
    .desno {
        text-align: right;
    }
    .sortDugme {
        margin-top: 0px;
        padding: 10px 15px 10px 15px;
        background-color: #1d4843;
        color: #b2eff5;
    }
    .sortDugme:hover {
        background-color: #6d979b;;
        color: #000000;;
    }
    .sortKriterijum {
        margin-top: 7px;
        padding: 10px 15px 10px 15px;
        border-radius: 5px;
    }
    .pretraga {
        margin-top: 7px;
        padding: 7px 15px 7px 15px;
        border-radius: 5px;
    }
</style>

<script>
import zivotinje from '../../data/zivotinje.js'
import ZivotinjaComponent from '../../components/ZivotinjaComponent.vue'

// import $ from 'jquery'

export default {
    
    name: 'VrstaView',

    components: {
        ZivotinjaComponent
    },

    data() {
        return {
            vrsta: "",
            zivotinje: [],
            sortKriterijum: 1,
            sortirajPo: 0,
            kljuc: "",
        }
    },

    methods: {
        sortiraj() {
            var zivotinjeJSON = zivotinje.find(z => z.vrsta == this.vrsta)
            this.zivotinje = zivotinjeJSON.z
   
            if (this.sortirajPo == 0) {
                // po starosti
                if (this.sortKriterijum == 1) {
                    // rastuce
                    this.zivotinje.sort(function(a, b) {
                        if (a.starost > b.starost) return 1;
                        else if (a.starost == b.starost) return 0;
                        else return -1;
                    })
                } 
                else {
                    this.zivotinje.sort(function(a, b) {
                        if (a.starost > b.starost) return -1;
                        else if (a.starost == b.starost) return 0;
                        else return 1;
                    })
                }
            }
            else {
                // po nazivu
                if (this.sortKriterijum == 1) {
                    // rastuce
                    this.zivotinje.sort(function(a, b) {
                        if (a.naziv > b.naziv) return 1;
                        else if (a.naziv == b.naziv) return 0;
                        else return -1;
                    })
                } 
                else {
                    this.zivotinje.sort(function(a, b) {
                        if (a.naziv > b.naziv) return -1;
                        else if (a.naziv == b.naziv) return 0;
                        else return 1;
                    })
                }
            }
        },
        pretraga() {
            var zivotinjeJSON = zivotinje.find(z => z.vrsta == this.vrsta)
            this.zivotinje = zivotinjeJSON.z
            if (this.kljuc.length == 0) return;
   
            if (this.sortirajPo == 0) {
                // po starosti
                if (/[0-9]+/.test(this.kljuc) == false) {
                    alert('Greška: Starost je uneta u pogrešnom formatu!')
                    return
                }
                this.zivotinje = []
                zivotinjeJSON.z.forEach(z => {
                    if (z.starost.split(' ')[0] == this.kljuc) this.zivotinje.push(z)
                })
            }
            else {
                this.zivotinje = []
                zivotinjeJSON.z.forEach(z => {
                    if (z.naziv.toUpperCase().includes(this.kljuc.toUpperCase())) this.zivotinje.push(z)
                })
            }
        },
        initData() {
            this.vrsta = this.$route.params.vrsta
            var zivotinjeJSON = zivotinje.find(z => z.vrsta == this.vrsta)
            this.zivotinje = zivotinjeJSON.z

            document.title = 'Azil Aska - ' + this.vrsta
        }
    },

    created() {
        
        this.initData()

        // this.$watch(() => this.$route.params, this.initData)
    },
    
}
</script>