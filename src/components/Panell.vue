<template>
    <div>
        <div class="border border-4 border-dark rounded-4 p-4 web-attr-container">
            <div class="d-flex align-items-center mb-3">
                <label class="form-label">Nombre de pàgines</label>
                <input class="form-control" v-model="pagesValue"> <!-- @change="pagesChange($event)"> -->
            </div>
            <div class="d-flex align-items-center">
                <label class="form-label">Nombre d'idiomes</label>
                <input class="form-control" v-model="languagesValue">
            </div>
        </div>
    </div>



</template>

<script>
export default {
    name: 'Panell',
    data() {
        return {
            pagesValue: "",
            languagesValue: ""
        }
    },
    // methods: {
    //     pagesChange(e) {
    //         console.log(e.target.value);
    //         this.$emit("page", e.target.value);
    //     }
    // },
    watch: {
        pagesValue: function(val) {
            this.$emit("pages", val);
        },
        languagesValue: function(val) {
            this.$emit("langs", val);
        },
    }
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