<template>
    <div class="my-5 d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-evenly w-100">
        <div>
            <p class="m-0 mb-3">Què vols fer?</p>
            <form class="user-select-none">
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="web-page" id="web-page" v-model="check">
                    <label class="form-check-label" for="web-page">
                        Una pàgina web (500 €)
                    </label>
                </div>
                <panell class="mb-3" v-if="check.includes('web-page')" @pages="setPages" @langs="setLangs"/>
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
                <name-inputs :reset="reset" @reset-done="reset=false" @pressupost="setPressupostName" @client="setClientName"/>
            </form>
            <p class="m-0 mb-3">Preu: {{price}} €</p>
            <button class="btn btn-secondary w-100" @click="canBeSend">SUBMIT</button>
        </div>
        <div class="mt-5 mt-lg-0">
            <pressupost-list :pressupost="pressupost" :send="send" @recived="send=false"/>
        </div>
    </div>
</template>

<script>
import Panell from './Panell.vue'
import PressupostList from './PressupostList.vue'
import NameInputs from './NameInputs.vue'

export default {
    name: 'Home',
    components: {
        Panell,
        PressupostList,
        NameInputs
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
            langs: 0,
            pressupostName: "",
            clientName: "",
            pressupost: {},
            send: false,
            reset: false,
        }
    },
    computed: {
        price() {
            // As it's asked in the exercice, the total price is saved in a variable inside data, even though for this case it's not necessary.
            this.totalPrice = this.check.reduce((total, name) => total + this.items[name], 0);
            this.totalPrice += this.pages * this.langs * 30;
            return this.totalPrice;
        },
    },
    methods: {
        setPages(n) {
            this.pages = n;
        },
        setLangs(n) {
            this.langs = n;
        },
        setPressupostName(n) {
            this.pressupostName = n;
        },
        setClientName(n) {
            this.clientName = n;
        },
        calcPressupost() {
            return {
                web: this.check.includes("web-page"),
                seo: this.check.includes("seo"),
                google: this.check.includes("google-ads"),
                pages: this.pages,
                langs: this.langs,
                name: this.pressupostName,
                client: this.clientName,
                price: this.totalPrice
            };
        },
        canBeSend() {
            if(this.pressupostName != "" && this.clientName != "" && this.totalPrice != 0){
                this.pressupost = this.calcPressupost();
                this.send = true;
                this.reset = true;
                this.check = [];
            }
        }
    },
    watch: {
        // Makes sure that the pages and languages are set to 0 once the option of a webpage is removed.
        check: function(val) {
            if(!val.includes("web-page")) {
                this.pages = 0;
                this.langs = 0;
            } else {
                // As well as set the minimum/start number at 1, for pages and languages.
                this.pages = 1;
                this.langs = 1;
            }
        }
    }
};
</script>

<style scoped>
    form {
        width: 375px;
    }

    @media only screen and (max-width: 576px) {
        form {
            width: 300px;
        }
    }
</style>