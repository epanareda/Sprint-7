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
export default {
    name: 'Home',
    data() {
        return {
            totalPrice: 0,
            items: {
                "web-page": 500,
                "seo": 300,
                "google-ads": 200,
            },
            check: []
        }
    },
    computed: {
        price() {
            // As it's asked in the exercice, the total price is saved in a variable inside data, even though for this case it's not necessary.
            this.totalPrice = this.check.reduce((total, name) => total + this.items[name], 0);
            return this.totalPrice;
        }
    }
};
</script>

<style scoped>

</style>