<template>
<div class="container">
    <div class="home">
        <h3 v-if="jezik == 0">
            <i class="fa-solid fa-rectangle-ad"></i>
            Ovo su svi oglasi za izgubljenim ljubimcima
        </h3>
        <h3 v-else>
            <i class="fa-solid fa-rectangle-ad"></i>
            These are all ads for lost animals
        </h3>
        <hr>
        <p v-if="jezik == 0">
            Pomozi njihovim neutešnim vlasnicima tako što ćeš ih potražiti. <br>
            Ukoliko ih nađeš ili imaš neki trag o njihovim ljubimcima, pozovi
            ih ili ostavi komentar na njihov oglas!
        </p>
        <p v-else>
            Help their inconsolable owners by searching for them. <br>
            If you find them or have a clue about their pets, call
            them or leave a comment on their ad!
        </p>
        <div class="row">

            <div class="col-lg-4 col-sm-12" v-for="(oglas, index) in sviOglasi" :key="oglas.ime">
                <div class="oglas-div">
                    <h4><strong>{{oglas.ime}}</strong></h4>
                    <hr>
                    <div style="font-size: 18px">{{oglas.opis}}</div>
                    <br>

                    <i class="fa-solid fa-phone"></i> <a href="tel:{{oglas.tel}}">{{oglas.tel}}</a>

                    <hr>
                    <h5 v-if="jezik == 0"><strong>Komentari:</strong></h5>
                    <h5 v-else><strong>Comments:</strong></h5>
                    <p class="comments" v-for="kom in oglas.komentari" :key="kom.username">
                        <i class="fa-regular fa-comment-dots"></i> 
                        {{kom.username}} : 
                        <i>{{kom.tekst}}</i>
                    </p>
                    <div class="input-group mb-3">
                        <input type="text" name="" class="form-control" :placeholder="jezik == 0 ? 'Unesi komentar' : 'Your comment'" v-model="comment[index]">
                        <div class="input-group-append">
                            <button v-if="jezik == 0" class="btn btn-outline-primary" type="button" @click="addComment(oglas, index)">Dodaj</button>
                            <button v-else class="btn btn-outline-primary" type="button" @click="addComment(oglas, index)">Add</button>
                        </div>
                    </div>
                    <button v-if="jezik == 0" class="btn btn-outline-primary" @click="printPDF(oglas)">
                        <i class="fa-solid fa-file-lines"></i>
                        Sačuvaj kao PDF
                    </button>
                    <button v-else class="btn btn-outline-primary" @click="printPDF(oglas)">
                        <i class="fa-solid fa-file-lines"></i>
                        Save as PDF
                    </button>
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
            comment: [],
            jezik: 0
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

        this.jezik = localStorage.getItem('jezik')
        if (this.jezik == null) {
            this.jezik = 0
            localStorage.setItem('jezik', 0)
        }
        else this.jezik = parseInt(this.jezik)
    },

    methods: {
        addComment(oglas, i) {
            var user = localStorage.getItem('logged')
            if (user == null) {
                alert('Da biste ostavili komentar morate se najpre ulogovati!')
                return
            }
            user = JSON.parse(user)
            let com = {
                username: user.username,
                tekst: this.comment[i]
            }
            this.sviOglasi.find(o => o.ime == oglas.ime).komentari.push(com)
            localStorage.setItem('oglasi', JSON.stringify(this.sviOglasi))

        },

        printPDF(oglas) {
            var printWindow = window.open('', '', 'height=400,width=800');
            printWindow.document.write('<html><head><title>Oglas</title>');
            printWindow.document.write('</head><body >');
            printWindow.document.write('<h1>' + oglas.ime + '</h1>');
            printWindow.document.write('<hr>');
            printWindow.document.write('<h3>' + 'Opis oglasa: ' + '</h3>');
            printWindow.document.write(oglas.opis);
            printWindow.document.write('<br>');
            printWindow.document.write('<h4>' + 'Kontakt: ' + oglas.username + ', tel: ' + oglas.tel);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        }
    }
}
</script>