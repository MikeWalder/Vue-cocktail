<template>
    <div>
        <div class="text-center">
            <h2>Connexion</h2>
        </div>
        
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
    .text-center {
        text-align: center;
        font-weight: bold;
        font-size: 32px;
    }
    form {
        margin: 0 auto;
        margin-top: 45px;
        padding: 20px;
        /* border: 2px solid black; */
        max-width: 30vw;
    }
    form .form_group {
        padding: 10px;
    }
    form .form_group label {
        display: inline-block;
        width: 180px;
    }
    form .form_group input {
        padding: 5px 10px;
        border-radius : 3px;
        width: 200px;
        box-shadow: 2px 2px 4px black;
    }
    form .btn_login {
        margin-top: 80px;
        padding: 10px 20px;
        background-color: #28a745;
        color: white;
        font-size: 18px;
        border-radius: 5px;
        box-shadow: 5px 5px 10px black;
    }
</style>