<template>
    <div class="">
        <div class="row breadcrumbs">
            <div class="col-sm-12">
                 Životinje&nbsp;<i class="fa-solid fa-arrow-right"></i>&nbsp;
                <router-link :to="'/zivotinje/' + this.$route.params.vrsta" >{{this.$route.params.vrsta}}</router-link>&nbsp;<i class="fa-solid fa-arrow-right"></i>&nbsp;
                <router-link :to="'/zivotinje/' + this.$route.params.vrsta + '/' + zivotinja.id" >{{zivotinja.naziv}}</router-link>&nbsp;
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
                                <i class="fa-solid fa-paw"></i>&nbsp;{{ zivotinja.naziv }}<br>
                            </h2>
                            <i>{{zivotinja.opis}}</i>
                            <hr>
                            <h5>
                                <i class="fa-solid fa-feather-pointed"></i>&nbsp;Težina<br>{{zivotinja.tezina}}
                            </h5>
                            <hr>
                            <h5>
                                <i class="fa-solid fa-feather-pointed"></i>&nbsp;Starost<br>{{zivotinja.starost}}
                            </h5>
                            <hr>
                            <v-button class="btn" id="prikazi" @click="prikaziSlike()"><i class="fa-solid fa-camera"></i>&nbsp;Prikaži galeriju</v-button>
                    </div>
                    
                </div>
                <div class="row" id="galerijaSlika" style="display: none">
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
            this.zivotinja = zivotinje.find(z => z.vrsta == vrsta)['z'].find(z => z.id == id)

            document.title = 'Azil Aska - ' + this.zivotinja.naziv
        },
        nazad() {
            $('#galerijaSlika').hide(800)
            $('#zivotinja').show(800)
        }
    },

    created(){
        this.initData()
        // this.$watch(() => this.$route.params, this.initData)
    },

    mounted() {
        // this.$refs.zivotinja.style.color = 'red'
    }

}
</script>
