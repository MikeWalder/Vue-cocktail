<template>
    <div id="nav">
        <img id="imgLogo" alt="Vue logo" src="../assets/logo.png">
        <nav>
            <router-link to="/">Home</router-link> | 
            <router-link to="/cocktail">Cocktails</router-link> | 
            <router-link to="/contact">Contact</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'PublicNavigation'
}
</script>

<style>

    #nav {
    padding: 30px;
    background-color: #3498db !important;
    }

    #nav a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 22px;
    }

    #nav a.router-link-exact-active {
    color: #f8fefb;
    }

    #imgLogo {
        position: absolute;
        top: 20px;
        right: 20px;
        max-height: 60px;
        max-width: 60px;
    }

    @media only screen and (max-width: 920px) {
        #imgLogo {
            display: none;
        }
        #nav {
            background-color: #0379c7;
            padding: 20px;
        }
    }
</style>