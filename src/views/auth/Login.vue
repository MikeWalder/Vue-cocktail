<template>
    <div>
        <h3>Connexion</h3>

        <form @submit.prevent="submission">
            <div class="form_group">
                <label for="input_pseudo">Pseudo : </label>
                <input type="text" id="input_pseudo" v-model="user.pseudo">
            </div>
            <div class="form_group">
                <label for="input_password">Password : </label>
                <input type="text" id="input_password" v-model="user.password">
            </div>
            <button type="submit" class="btn_login">Se connecter</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login', 
    data() {
        return {
            user: {
                pseudo: '',
                password: '',
            }
        }
    },
    methods: {
        submission() {
            console.log(this.user)
            localStorage.setItem('token', 'vdkrgrgr4dsfd')
            console.log(localStorage.getItem('token'))
            this.$router.push('/admin/dashboard')
        }
    }
}
</script>

<style>
    form {
        margin: 0 auto;
        margin-top: 45px;
        padding: 20px;
        border: 2px solid black;
        max-width: 50vw;
    }
    form .form_group {
        padding: 10px;
    }
    form .form_group label {
        width: 30px;
    }
    form .form_group input {
        padding: 5px 10px;
    }
    form .btn_login {
        margin-top: 30px;
        padding: 10px 20px;
        background-color: lightgreen;
        margin-left: 5vw;
    }
</style>