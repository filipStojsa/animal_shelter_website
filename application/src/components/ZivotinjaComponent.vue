<template>
    <div>
        {{ zivotinja.naziv }}
        <router-link :to="'/zivotinje/' + vrsta + '/' + zivotinja.id" >Detalji</router-link>
    </div>
</template>

<script>

export default {
    name: 'ZivotinjaComponent',
    props: [
        'vrsta',
        'zivotinja',
    ],
    data() {
       
    },
}

</script>
