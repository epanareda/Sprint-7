<template>
    <div class="main-container">
        <nav>
            <router-link class="btn btn-primary" to="/home" v-if="$route.name === 'welcome'">Endavant</router-link>
            <router-link class="btn btn-primary" to="/"  v-if="$route.name === 'home'">Enrere</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<style scoped>
    .main-container {
        position: relative;
        left: 30%;
        width: 40%;
        margin: 50px 0 20px 0;

        border-radius: 20px;

        box-shadow: 0 3rem 2rem 0 rgba(128, 128, 128, 0.5);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 1200px) {
        .main-container {
            left: 15%;
            width: 70%;
        }
    }

    @media only screen and (max-width: 768px) {
        .main-container {
            left: 5%;
            width: 90%;
        }
    }

    @media only screen and (max-width: 576px) {
        .main-container {
            left: 1%;
            width: 98%;
            margin-bottom: 0;

            box-shadow: 0 0 0 0 white;
        }
    }
</style>
