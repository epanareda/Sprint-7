<template>
    <div class="my-5 mx-3 mx-sm-5">
        <h3 class="fw-bold">WELCOME</h3>
        <p>
            Aquesta aplicació web ha estat creada amb la finalitat d’ajudar amb els càlculs de pressupostos de serveis relacionats amb el desenvolupament de pàgines web.
            <br><br>
            Amb questa aplicació és possible escollir entre 3 serveis diferents (obtenir el pressupost d'una pàgina web, fer una campanya SEO, o fer una campanya de publicitat), on el primer té una opció d’ajustar al detall el nombre de pàgines i d’idiomes a les necessitats del client. Les combinacions entre els serveis proposats és possible.
            <br><br>
            A la part inferior es podrà observar com el preu associat als costos dels treballs es va actualitzant a mesura que es van escollint les opcions desitjades.
            <br><br>
            Per accedir a la calculadora de pressupostos fes click al botó situat a la part superior.
        </p>
    </div>
</template>

<script>

export default {
    name: 'Welcome',
    data() {
        return {
        }
    },
    computed: {    
    },
    methods: {
    },
    watch: {
    }
};
</script>

<style scoped>
    h3 {
        text-align: center;
        margin-bottom: 2rem;
    }
    p {
        text-align: justify;
    }
</style>