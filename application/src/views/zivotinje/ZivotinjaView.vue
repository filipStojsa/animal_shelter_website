<template>
    <div class="" style="min-height:650px">
        <div class="row breadcrumbs">
            <div class="col-sm-12">
                <router-link v-if="jezik == 0" to="/zivotinje">Životinje</router-link>
                <router-link v-else to="/zivotinje">Animals</router-link>
                &nbsp;<i class="fa-solid fa-arrow-right"></i>&nbsp;
                <router-link :to="'/zivotinje/' + this.$route.params.vrsta" >{{this.pravaVrsta}}</router-link>&nbsp;<i class="fa-solid fa-arrow-right"></i>&nbsp;
                <!-- <router-link :to="'/zivotinje/' + this.$route.params.vrsta + '/' + zivotinja.id" >{{zivotinja.naziv}}</router-link>&nbsp; -->
                {{zivotinja.naziv[jezik]}}
            </div>
        </div>
        <div class="row zivotinjeRow">
            <div class="col-sm-12 centriraj">
                <div class="zivotinja row" ref="zivotinja" id="zivotinja">
                    <div class="col-sm-12 col-md-6 centrirajKolonu">
                        <img @click="fun()" class="slika" :src="'/assets/' + zivotinja.slika">
                    </div>
                    <div class="col-sm-12 col-md-6 centrirajKolonu">
                            <h2>
                                <i class="fa-solid fa-paw"></i>&nbsp;{{ zivotinja.naziv[jezik] }}<br>
                            </h2>
                            <i>{{zivotinja.opis[jezik]}}</i>
                            <hr>
                            <h5 v-if="jezik == 0">
                                <i class="fa-solid fa-feather-pointed"></i>&nbsp;Težina<br>{{zivotinja.tezina}}
                            </h5>
                            <h5 v-else>
                                <i class="fa-solid fa-feather-pointed"></i>&nbsp;Weight<br>{{zivotinja.tezina}}
                            </h5>
                            <hr>
                            <h5 v-if="jezik == 0">
                                <i class="fa-solid fa-feather-pointed"></i>&nbsp;Starost<br>{{zivotinja.starost[jezik]}}
                            </h5>
                            <h5 v-else>
                                <i class="fa-solid fa-feather-pointed"></i>&nbsp;Age<br>{{zivotinja.starost[jezik]}}
                            </h5>
                            <hr>
                            <v-button v-if='jezik == 0' class="btn" id="prikazi" @click="prikaziSlike()"><i class="fa-solid fa-camera"></i>&nbsp;Prikaži galeriju</v-button>
                            <v-button v-else class="btn" id="prikazi" @click="prikaziSlike()"><i class="fa-solid fa-camera"></i>&nbsp;Show galery</v-button>
                    </div>
                    
                </div>
                <div v-if='jezik == 0' class="row" id="galerijaSlika" style="display: none">
                    <div class="col-sm-12">
                        <h3><i class="fa-solid fa-image"></i>&nbsp;Galerija</h3>
                        <hr>
                    </div>
                    <div class="col-sm-12">
                        <iframe width="560" height="315" :src="zivotinja.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius:5px"></iframe>
                    </div>
                    <div class="col-sm-12">
                        <hr>
                        <button class="btn dugme" @click="nazad()"><i class="fa-solid fa-arrow-left"></i>&nbsp;Nazad</button>
                    </div>
                </div>
                <div v-else class="row" id="galerijaSlika" style="display: none">
                    <div class="col-sm-12">
                        <h3><i class="fa-solid fa-image"></i>&nbsp;Galery</h3>
                        <hr>
                    </div>
                    <div class="col-sm-12">
                        <iframe width="560" height="315" :src="zivotinja.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius:5px"></iframe>
                    </div>
                    <div class="col-sm-12">
                        <hr>
                        <button class="btn dugme" @click="nazad()"><i class="fa-solid fa-arrow-left"></i>&nbsp;Back</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .row {
        width: 100%
    }
    .slika {
        width:100%;
        border: 4px solid #edbba9;
        border-radius: 5px;
        box-shadow: 5px 10px 18px #9d8268;
    }
    .centriraj {
        display: flex; 
        justify-content: center;
    }
    .centrirajKolonu {
        justify-content: center;
    }
    .zivotinja {
        width: 50%;
        align-self: center;
        background-color: #FFDDD2;
        color: #c88066;
        border-radius: 5px;
        box-shadow: 5px 10px 18px #d5d4d3;
        padding: 40px;
    }
    #prikazi {
        color: #006D77;
        background-color: #deeceb;
        border: 2px solid #006D77;
    }
    #prikazi:hover {
        color:#deeceb;
        background-color: #006D77;
    }
    .dugme {
        color: #006D77;
        background-color: #deeceb;
        border: 2px solid #006D77;
    }
    .dugme:hover {
        color:#deeceb;
        background-color: #006D77;
    }
    .breadcrumbs{
        padding: 20px;
    }
    .breadcrumbs a{
        color: #009caa;
    }
    #galerijaSlika{
        align-self: center;
        width: 80%;
        border-radius: 5px;
        background-color: #FFDDD2;
        color: #c88066;
        box-shadow: 5px 10px 18px #d5d4d3;
        padding: 40px;
    }
</style>

<script>
import $ from 'jquery'

import zivotinje from '../../data/zivotinje.js'

export default {
    name: 'ZivotinjaView',

    components: {
        
    },

    data() {
        return {
            zivotinja: {},
            jezik: 0,
            pravaVrsta: ''
        }
    },

    methods: {
        prikaziSlike(){
            $('#zivotinja').hide(800)
            $('#galerijaSlika').show(800)
        },
        initData() {
            var vrsta = this.$route.params.vrsta
            
            var id = this.$route.params.id
            this.zivotinja = zivotinje.find(z => z.vrsta[0] == vrsta)['z'].find(z => z.id == id)

            document.title = 'Azil Aska - ' + this.zivotinja.naziv[this.jezik]
        },
        nazad() {
            $('#galerijaSlika').hide(800)
            $('#zivotinja').show(800)
        }
    },

    created(){
        this.initData()
        // this.$watch(() => this.$route.params, this.initData)

        this.jezik = localStorage.getItem('jezik')
        if (this.jezik == null) {
            this.jezik = 0
            localStorage.setItem('jezik', 0)
        }
        else this.jezik = parseInt(this.jezik)

        this.pravaVrsta = zivotinje.find(z => z.vrsta[0] == this.$route.params.vrsta)['vrsta'][this.jezik]
    },

    mounted() {
        // this.$refs.zivotinja.style.color = 'red'
    }

}
</script>
