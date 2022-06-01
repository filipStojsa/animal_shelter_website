<template>
    <div>
        {{ vrsta }} <br>

        <!-- <div class="zivotinje">
            <div v-for="z in zivotinje" :key="z.id">{{z.naziv}} <hr> </div> 
        </div> -->

        <ZivotinjaComponent v-for="z in zivotinje" :zivotinja="z" :vrsta="vrsta" :key="z.id"></ZivotinjaComponent>
    </div>
</template>

<script>
import zivotinje from '../../data/zivotinje.js'
import ZivotinjaComponent from '../../components/ZivotinjaComponent.vue'

export default {
    
    name: 'VrstaView',

    components: {
        ZivotinjaComponent
    },

    data() {
        return {
            vrsta: "",
            zivotinje: []
        }
    },

    methods: {
        
    },

    created() {
        this.vrsta = this.$route.params.vrsta
        var zivotinjeJSON = zivotinje.find(z => z.vrsta == this.vrsta)
        this.zivotinje = zivotinjeJSON.z
    },
    
}
</script>