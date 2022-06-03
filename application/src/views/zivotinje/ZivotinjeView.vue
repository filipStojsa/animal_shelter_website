<template>
<div>
    <div class="centriraj">
        <h5 style="color: #E29578;margin-top: 20px"><i class="fa-solid fa-circle-exclamation"></i>&nbsp;Možete pregledati svaku vrstu posebno, ili direktno pristupiti stranicama sa našim životinjama.</h5>
        <div v-for="vrsta in ziv" :key='vrsta.vrsta'>
            
            <div class="row centriraj">
                <div class="col-sm-12">
                    <router-link :to="'/zivotinje/' + vrsta.vrsta"><h1><i class="fa-solid fa-paw"></i>&nbsp;{{vrsta.vrsta}}</h1></router-link>
                    <hr>
                </div>
                <div div="col-sm-12 col-lg-4 centriraj" v-for="zivotinja in vrsta.z" :key='zivotinja.id' style="padding:20px"> 
                    <div class="kolona">
                        <router-link :to="'/zivotinje/' + vrsta.vrsta + '/' + zivotinja.id" ><h4>{{zivotinja.naziv}}</h4></router-link>
                    </div>
                    
                </div>
            </div>
      </div>
    </div>
</div>
</template>

<style scoped>
    a {
        color: #006D77;
    }
    a:hover {
        color: #12b1bf;
    }
    .centriraj {
        justify-content:center;
        width: 100%;
        text-align: center;
        color: #006D77;
    }
    .row {
        width: 100%;
        padding: 30px 160px 30px 160px;
    }
    .kolona {
        width: 100%;
        padding: 20px;
        background-color: #d7e2e7;
        border-radius: 5px;
    }
</style>

<script>
import zivotinje from '@/data/zivotinje'


export default {
    name: 'ZivotinjeView',
    data() {
        return {
            ziv: zivotinje
        }
    }
}
</script>
