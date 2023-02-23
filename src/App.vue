<template>
    <div :class="['main-container', $route.name === 'welcome' ? 'welcome' : 'home']">
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
        margin: 50px 0 20px 0;

        border-radius: 20px;

        box-shadow: 0 3rem 2rem 0 rgba(128, 128, 128, 0.5);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .welcome {
        left: 20%;
        width: 60%;
    }

    .home {
        left: 15%;
        width: 70%;
    }

    @media only screen and (max-width: 1200px) {
        .welcome {
            left: 10%;
            width: 80%;
        }

        .home {
            left: 10%;
            width: 80%;
        }
    }

    @media only screen and (max-width: 992px) {
        .home {
            left: 12%;
            width: 76%;
        }
    }

    @media only screen and (max-width: 768px) {
        .welcome {
            left: 5%;
            width: 90%;
        }

        .home {
            left: 8%;
            width: 84%;
        }
    }

    @media only screen and (max-width: 576px) {
        .main-container {
            margin-bottom: 0;

            box-shadow: 0 0 0 0 white;
        }

        .welcome {
            left: 1%;
            width: 98%;
        }

        .home {
            left: 10%;
            width: 80%;
        }
    }
</style>
