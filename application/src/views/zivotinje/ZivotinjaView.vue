<template>
    <div style="display: flex; justify-content: center;">
        <div class="zivotinja" ref="zivotinja">
            <h1>
                <span id="ikonica" ref="ikonica"></span>{{ zivotinja.naziv }}
            </h1>
        </div>
    </div>
</template>

<style scoped>
    .zivotinja {
        width: 60%;
        align-self: center;
        background-color: #FFDDD2;
        border-radius: 5px;
        box-shadow: 5px 10px 18px #d5d4d3;
        padding-top: 200px;
    }

    .crveno {
        background-color: red;
        color: red;
        font-weight: bold;
    }
</style>

<script>
// import $ from 'jquery'

import zivotinje from '../../data/zivotinje.js'

export default {
    name: 'ZivotinjaView',

    data() {
        return {
            zivotinja: {}
        }
    },

    created(){
        var vrsta = this.$route.params.vrsta
        var id = this.$route.params.id
        this.zivotinja = zivotinje.find(z => z.vrsta == vrsta)['z'].find(z => z.id == id)
        // $('.zivotinja').css('color', 'red')
        // var elem = $(".zivotinja")
        // elem.addClass("crveno")
    }

}
</script>
