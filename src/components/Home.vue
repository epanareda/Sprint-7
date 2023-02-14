<template>
    <div class="m-5">
        <p class="m-0 mb-3">Què vols fer?</p>
        <form class="user-select-none">
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="web-page" id="web-page" v-model="check">
                <label class="form-check-label" for="web-page">
                    Una pàgina web (500 €)
                </label>
            </div>
            <Panell class="mb-3" v-if="check.includes('web-page')" @pages="setPages" @langs="setLangs"/>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="seo" id="seo" v-model="check">
                <label class="form-check-label" for="seo">
                    Una consultoria SEO (300 €)
                </label>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="google-ads" id="google-ads" v-model="check">
                <label class="form-check-label" for="google-ads">
                    Una campanya de Google Ads (200 €)
                </label>
            </div>
        </form>
        <p class="m-0">Preu: {{price}} €</p>
    </div>
</template>

<script>
import Panell from '../components/Panell.vue'

export default {
    name: 'Home',
    components: {
        Panell
    },
    data() {
        return {
            totalPrice: 0,
            items: {
                "web-page": 500,
                "seo": 300,
                "google-ads": 200,
            },
            check: [],
            pages: 0,
            langs: 0
        }
    },
    computed: {
        price() {
            // As it's asked in the exercice, the total price is saved in a variable inside data, even though for this case it's not necessary.
            this.totalPrice = this.check.reduce((total, name) => total + this.items[name], 0);
            this.totalPrice += this.pages * this.langs * 30;
            return this.totalPrice;
        }        
    },
    methods: {
        setPages(n) {
            this.pages = Number(n);
        },
        setLangs(n) {
            this.langs = Number(n);
        }
    },
    watch: {
        // Makes sure that the pages and languages are set to 0 once the option of a webpage is removed.
        check: function(val) {
            if(!val.includes("web-page")) {
                this.pages = 0;
                this.langs = 0;
            }
        }
    }
};
</script>

<style scoped>
</style>