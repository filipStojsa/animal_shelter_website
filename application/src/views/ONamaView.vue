<template>
    <div>
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="kolona">
                    <h3>Ukoliko želite da stupite u kontakt sa nama</h3>
                    <hr>
                    <p class="paragraf">
                        <i class="fa-solid fa-phone" style="color:#62a373"></i>&nbsp;<a href="tel:+381 64 323-3232">+381 64 323-3232</a>
                        <br>
                        <i class="fa-solid fa-envelope"></i>&nbsp;<a href = "mailto: azil.aska@outlook.com">azil.aska@outlook.com</a>
                        <br>
                        <i class="fa-solid fa-location-dot"></i>&nbsp;Vodovodska 77, Beograd
                    </p>
                    <hr>
                    <div class="mapouter"><div class="gmap_canvas"><iframe height="372" id="gmap_canvas" src="https://maps.google.com/maps?q=Vodovodska%2077&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/">divi discount</a><br><a href="https://www.embedgooglemap.net">embed code google maps</a></div></div>
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="kolona">
                    <h3 class="naslov">Zašto baš mi?</h3>
                    <hr>
                    <p class="paragraf">
                        <i class="fa-solid fa-check naslov"></i>&nbsp;Životinje su naši najbolji prijatelji. Prave nam društvo, obasipaju nas ljubavlju i upotpunjuju našu porodicu. Njihovo prisustvo je korisno za decu, jer kod njih razvija odgovornost i empatiju. Istraživanja pokazuju da briga o životinjama utiče na snižavanje krvnog pritiska, smanjenje stresa i rizika od kardiovaskularnih bolesti. 
                        <br><i class="fa-solid fa-check naslov"></i>&nbsp;Ukratko – životinje nas čine zdravijim i srećnijim.
                    </p>
                    <hr>
                    <h4 class="naslov"><i class="fa-solid fa-award"></i>&nbsp;Nagrade i dostignuća</h4>
                    <hr>
                    <div class="row">
                        <div v-for="n in nagrade" class="col-sm-4" :key="n.naziv">
                            <NagradaComponent :nagrada="n"></NagradaComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #gmap_canvas {
        width:100%;
    }
    .gmap_canvas {overflow:hidden;background:none!important;height:372px;width:100%;border-radius:5px;
        box-shadow: 5px 10px 18px #abb8b5;
    }
    .mapouter{position:relative;text-align:right;height:372px;width:100%;border-radius:5px;}
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
        background-color: #c6d6dc;
        margin: 30px;
        padding: 30px;
        min-height: 650px;
        box-shadow: 5px 10px 18px #d5d4d3;
    }
    .paragraf {
        text-align: left;
        font-size: 21px;
    }
    .paragraf a {
        color: rgb(34, 83, 120);
    }
    .paragraf a:hover {
        color: rgb(25, 133, 50);
    }
    .naslov {
        color: #166962;
    }
</style>

<script>
import NagradaComponent from '../components/NagradaComponent.vue'
import nagrade from '../data/nagrade.js'

export default {
    name: 'ONamaView',
    data() {
        return {
            nagrade: nagrade
        }
    },
    components: {
        NagradaComponent,
    },
    created() {
        document.title = 'Azil Aska - O nama'
    }
}
</script>
