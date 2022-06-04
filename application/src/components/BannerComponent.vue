<template>
    <div style="padding: 20px 20px 30px 50px;">
        <div class="row">
            <div v-for="r in this.reklame" :key="r.naslov" class="col-sm-4 col-lg-2">
                <div class="rekl">
                    <h6><i class="fa-solid fa-rectangle-ad"></i>&nbsp;{{r.naslov}}</h6>
                    <hr>
                    {{r.tekst}}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .row {
        width: 100%;
        /* min-height: 100px; */
        background-color: #b4c6cc;
        box-shadow: 5px 10px 18px #abb8b5;
        border-radius: 5px;
        padding: 10px;
    }
    .rekl {
        padding: 20px;
        background-color: #98afb7;
        box-shadow: 5px 10px 18px #abb8b5;
        border-radius: 5px;
    }
</style>

<script>

export default {
    name: 'BannerComponent',
    data() {
        return {

        }
    },
    props: [
        'reklame'
    ]
}
</script>
