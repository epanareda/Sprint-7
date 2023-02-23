<template>
    <div class="list-container">
        <h5 class="mb-2">Pressupost list</h5>
        <sorting-buttons class="mb-3" @sort="setSort"/>
        <div class="border-bottom border-start border-end border-2 border-dark rounded-2 p-4 py-0">
            
            <div class="border border-1 rounded-4 p-3 shadow mb-3" v-for="(p, i) in sortedList" :key="i">
                <div class="d-flex flex-column">
                    <p class="m-0">Pressupost: {{p.name}}</p>
                    <p class="m-0">Client: {{p.client}}</p>
                    <p class="m-0 mb-2">Preu: {{p.price}} €</p>
                </div>
                <div class="d-flex">
                    <span class="bg-warning small px-2 rounded-pill me-2" v-if="p.web">web<sup>{{p.pages}}/{{p.langs}}</sup></span>
                    <span class="bg-warning small px-2 rounded-pill me-2" v-if="p.seo">SEO</span>
                    <span class="bg-warning small px-2 rounded-pill" v-if="p.google">Google</span>
                </div>
            </div>

            
            <!-- <div class="border border-1 rounded-4 p-3 shadow mb-3">
                <div class="d-flex flex-column">
                    <p class="m-0">Pressupost: amazon</p>
                    <p class="m-0">Client: Joan</p>
                    <p class="m-0 mb-2">Preu: 500 €</p>
                </div>
                <div class="d-flex">
                    <span class="bg-warning small px-2 rounded-pill me-2">web<sup>12/2</sup></span>
                    <span class="bg-warning small px-2 rounded-pill me-2">SEO</span>
                    <span class="bg-warning small px-2 rounded-pill">Google</span>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import SortingButtons from "./SortingButtons.vue";

export default {
    name: 'PressupostList',
    components: {
        SortingButtons
    },
    props: ["pressupost", "send"],
    data() {
        return {
            presList: [],
            //     {
            //     web: true,
            //     seo: false,
            //     google: true,
            //     pages: 2,
            //     langs: 4,
            //     name: "ee",
            //     client: "45",
            //     price: 500
            // }],
            sort: "",
        }
    },
    watch: {
        send(val) {
            if(val) {
                this.presList.push(this.pressupost);
                this.$emit("recived");
            }
        }
    },
    methods: {
        setSort(val) {
            this.sort = val;
        },
        sortByName(a, b) {
            if(a.name < b.name) {
                return -1;
            }
            if(a.name > b.name) {
                return 1;
            }
            return 0
        },
        sortByPrice(a, b) {
            if(a.price < b.price) {
                return -1;
            }
            if(a.price > b.price) {
                return 1;
            }
            return 0
        }
    },
    computed: {
        sortedList() {
            if(this.sort === "abc") {
                return [...this.presList].sort(this.sortByName)
            }
            if(this.sort === "price") {
                return [...this.presList].sort(this.sortByPrice)
            }
            return this.presList
        },
    }
};
</script>

<style scoped>
    .list-container {
        width: 300px;
    }
</style>