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
        position: absolute;
        top: 10%;
        left: 30%;
        width: 40%;

        /* border: 0.3rem solid hsla(0, 0%, 50%, 0.25); */
        border-radius: 20px;

        box-shadow: 0 3rem 2rem 0 rgba(128, 128, 128, 0.5);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
