<template>
    <div>
        <div class="border border-4 border-dark rounded-4 p-4 web-attr-container">
            <div class="d-flex align-items-center mb-3">
                <label class="form-label">Nombre de pàgines</label>
                <InputButtons @value="updatePages"/>
            </div>
            <div class="d-flex align-items-center">
                <label class="form-label">Nombre d'idiomes</label>
                <InputButtons @value="updateLangs"/>
            </div>
        </div>
    </div>



</template>

<script>
import InputButtons from "./InputButtons.vue"

export default {
    name: 'Panell',
    components: {
        InputButtons,
    },
    data() {
        return {
            pagesValue: 1,
            languagesValue: 1
        }
    },
    watch: {
        pagesValue: function(val) {
            this.$emit("pages", val);
        },
        languagesValue: function(val) {
            this.$emit("langs", val);
        },
    },
    methods: {
        updatePages(n) {
            this.pagesValue = n;
        },
        updateLangs(n) {
            this.languagesValue = n;
        }
    },
};
</script>

<style scoped>
    .web-attr-container {
        width: fit-content;
    }

    label {
        width: 10rem;
    }

    input {
        width: 10rem;
    }
</style>