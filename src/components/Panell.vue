<template>
    <div>
        <div class="border border-4 border-dark rounded-4 p-4">
            <div class="d-flex align-items-center flex-column flex-sm-row mb-4 mb-sm-3">
                <label class="form-label text-center text-sm-start">Nombre de pàgines</label>
                <InputButtons @value="updatePages"/>
                <svg xmlns="http://www.w3.org/2000/svg" type="button" class="icon icon-tabler icon-tabler-info-circle-filled ms-sm-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-bs-toggle="modal" data-bs-target="#pagesModal">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 7.66h-1l-.117 .007a1 1 0 0 0 .117 1.993v3l.007 .117a1 1 0 0 0 .993 .883h1l.117 -.007a1 1 0 0 0 .883 -.993l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007v-3l-.007 -.117a1 1 0 0 0 -.993 -.883zm.01 -4l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" fill="grey" stroke-width="0"></path>
                </svg>
                <div class="modal fade" id="pagesModal" tabindex="-1" aria-labelledby="pagesModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content border border-dark rounded-4">
                            <div class="modal-body justify-text">
                                En este componente debe indicar el número de <strong>páginas</strong> que tendrá su sitio web.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center flex-column flex-sm-row">
                <label class="form-label text-center text-sm-start">Nombre d'idiomes</label>
                <InputButtons @value="updateLangs"/>
                <svg xmlns="http://www.w3.org/2000/svg" type="button" class="icon icon-tabler icon-tabler-info-circle-filled ms-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-bs-toggle="modal" data-bs-target="#langsModal">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 7.66h-1l-.117 .007a1 1 0 0 0 .117 1.993v3l.007 .117a1 1 0 0 0 .993 .883h1l.117 -.007a1 1 0 0 0 .883 -.993l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007v-3l-.007 -.117a1 1 0 0 0 -.993 -.883zm.01 -4l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" fill="grey" stroke-width="0"></path>
                </svg>
                <div class="modal fade" id="langsModal" tabindex="-1" aria-labelledby="langsModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content border border-dark rounded-4">
                            <div class="modal-body justify-text">
                                En este componente debe indicar el número de <strong>idiomas</strong> que tendrá su sitio web.
                            </div>
                        </div>
                    </div>
                </div>
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
    label {
        width: 10rem;
    }

    input {
        width: 10rem;
    }
    
    .justify-text {
        text-align: justify;
    }
</style>