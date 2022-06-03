<template>
    <div class="home">
        <h3>
            <i class="fa-solid fa-rectangle-ad"></i>
            Ovo su svi oglasi za izgubljenim ljubimcima
        </h3>
        <hr>
        <p>
            Pomozi njihovim neutešnim vlasnicima tako što ćeš ih. <br>
            Ukoliko ih nađeš ili imaš neki trag o njihovim ljubimcima, pozovi
            ih ili ostavi komentar na njihov oglas!
        </p>
        <div class="row">

            <div class="col-lg-4 col-sm-12" v-for="oglas in sviOglasi" :key="oglas.ime">
                <div class="oglas-div">
                    <h4><strong>{{oglas.ime}}</strong></h4>
                    <hr>
                    <div style="font-size: 18px">{{oglas.opis}}</div>
                    <br>

                    <i class="fa-solid fa-phone"></i> <a href="tel:{{oglas.tel}}">{{oglas.tel}}</a>

                    <hr>
                    <h5><strong>Komentari:</strong></h5>
                    <p class="comments" v-for="kom in oglas.komentari" :key="kom.username">
                        <i class="fa-regular fa-comment-dots"></i> 
                        {{kom.username}} : 
                        <i>{{kom.tekst}}</i>
                    </p>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Unesi komentar" v-model="comment">
                        <div class="input-group-append">
                            <button class="btn btn-outline-primary" type="button" @click="addComment(oglas)">Dodaj</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.comments {
    text-align: left;
    font-size: 16px;
    padding-left: 10px;
}

.home {
    padding: 30px;
    margin: 30px;
    background-color: #FFDDD2;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.oglas-div {
    background-color: #83C5BE;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
    margin-bottom: 15px;
    border: 2px solid rgb(21, 60, 86);
}

.home p {
    text-align: left;
    font-size: 20px;
}

/* .btn-outline-primary {
    color: #006D77;
    border-color: #006D77;
    border-width: 1px;
} */

.btn-outline-primary{
    color: white;
    background-color: #006D77;
    border: 0px;

}
.btn-outline-primary:hover{
    color: white;
    background-color: #013b40;

}
</style>

<script>
import oglasi from '@/data/oglasi'
export default {
    name: 'SviOglasi',

    data() {
        return {
            sviOglasi: oglasi,
            comment: ''
        }
    },

    created() {
        document.title = 'Azil aska - Oglasi'
        if(localStorage.getItem('oglasi') == null) {
            this.sviOglasi = localStorage.setItem(JSON.stringify('oglasi', oglasi))
        }
        else {
            this.sviOglasi = JSON.parse(localStorage.getItem('oglasi'))
            if (this.sviOglasi.length > 0) {
                if(this.sviOglasi[0].ime == "") {
                    this.sviOglasi.shift()
                }
            }
        }
    },

    methods: {
        addComment(oglas) {
            var user = localStorage.getItem('logged')
            if (user == null) {
                alert('Da biste ostavili komentar morate se najpre ulogovati!')
                return
            }
            user = JSON.parse(user)
            let com = {
                username: user.username,
                tekst: this.comment
            }
            this.sviOglasi.find(o => o.ime == oglas.ime).komentari.push(com)
            localStorage.setItem('oglasi', JSON.stringify(this.sviOglasi))

        }
    }
}
</script>