<template>
    <div>
        <div class="nagrada">
            <i class="fa-solid fa-award" style="color:#e37e5c"></i>&nbsp;{{nagrada.naziv}} <hr>
            <i>{{nagrada.od}} </i><br>
            <span style="color: #53837e;">{{nagrada.mesto}}</span>
        </div>
    </div>
</template>

<style scoped>
.nagrada {
    border-radius: 5px;
    color: #014b52;
    background-color: #83C5BE;
    box-shadow: 5px 10px 18px #abb8b5;
    padding: 10px;
    border: 2px solid #014b52;
}
.nagrada:hover {
    background-color: #014b52;
    color: #83C5BE;
}
</style>

<script>

export default {
    name: 'NagradaComponent',
    props: [
        'nagrada'
    ]
}
</script>
