<template>
    <div>
        <div class="oglas">
            <div class="row">
                <div class="col-sm-12" style="text-align:left">
                    <h5><i class="fa-solid fa-thumbtack"></i>&nbsp;&nbsp;{{oglas.ime}} </h5> 
                    <p id="paragraf">
                        {{oglas.opis}} 
                    </p>
                </div>
                <!-- <div class="col-sm-2">
                    <button class="btn btn-danger obrisi" @click="izbrisiOglas()"><i class="fa-solid fa-trash-can"></i></button>
                </div> -->
            </div>
            <hr>
            <div v-if="oglas.komentari.length > 0" class="row">
                <div v-for="kom in oglas.komentari" class="col-sm-12" :key="kom.username" style="padding: 6px">
                    <div class="komentar">
                        <i class="fa-solid fa-user"></i>&nbsp;{{kom.username}}<br>
                        <i class="fa-solid fa-comment"></i>&nbsp;<i>{{kom.tekst}}</i>
                    </div>
                </div>
            </div>
            <div class="row" v-else style="padding:20px;text-align: center;width:100%;font-style: italic;justify-content: center;display:flex;">
                Trenutno nema komentara.
            </div>
        </div>
    </div>
</template>

<style scoped>
.oglas {
    border-radius: 5px;
    color: #014b52;
    background-color: #83C5BE;
    box-shadow: 5px 10px 18px #abb8b5;
    padding: 20px;
    border: 2px solid #014b52;
    min-height: 350px;
}
.oglas:hover {
    background-color: #014b52;
    color: #83C5BE;
}
#paragraf {
    font-style: italic;
    color: #31777e;
}
.obrisi {
    border-width: 2px;
    margin-right: 0px;
}
.komentar {
    background-color: #cdcdcd;
    color:#5f5f5f;
    border: 2px solid #5f5f5f;
    border-radius: 5px;
    padding: 10px;
    text-align: left;
}
</style>

<script>

export default {
    name: 'OglasComponent',
    
    props: [
        'oglas'
    ],
    methods: {
        izbrisiOglas() {
            alert('obrisanoooo')
        }
    },
}
</script>
