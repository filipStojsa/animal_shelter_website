<template>
    <div id="zivotinja">
        <span id="naziv"><i class="fa-solid fa-paw"></i>&nbsp;{{ zivotinja.naziv[jezik] }} </span><hr>
        <span v-if="jezik == 0">{{zivotinja.starost[jezik]}} starosti</span>
        <span v-else>{{zivotinja.starost[jezik]}} old</span>
        
        <button v-if='jezik == 0' class="btn"><router-link :to="'/zivotinje/' + vrsta + '/' + zivotinja.id" ><i class="fa-solid fa-circle-info"></i>&nbsp;Detalji</router-link></button>
        <button v-else class="btn"><router-link :to="'/zivotinje/' + vrsta + '/' + zivotinja.id" ><i class="fa-solid fa-circle-info"></i>&nbsp;Details</router-link></button>
    </div>
</template>

<style scoped>
    a {
      color: #006D77;  
    }
    a:hover {
        color: #b7d6d3;
        text-decoration: none;
    }
    .btn {
        background-color: #adeae4;
        color: #006D77;
        border: 2px solid #006D77;
        margin: 20px;
    }
    .btn:hover {
        background-color: #006D77;
        color: #b7d6d3;
    }
    #zivotinja {
        border-radius: 5px;
        background-color: #FFDDD2;
        color: #b2755f;
        padding: 20px 30px 10px 30px;
        margin:15px;
        box-shadow: 5px 10px 18px #d5d4d3;
    }
    #zivotinja:hover {
        color: #FFDDD2;
        background-color: #b2755f;
    }
    #naziv {
        font-size: 30px;
        font-weight: bold;
    }
</style>

<script>

export default {
    name: 'ZivotinjaComponent',
    props: [
        'vrsta',
        'zivotinja',
        'jezik'
    ],
    data() {
       return {

       }
    },
}

</script>
