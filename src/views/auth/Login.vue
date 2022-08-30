<template>
    <div>
        <div class="text-center">
            <h2>Connexion</h2>
        </div>
        
        <form @submit.prevent="loginAccount">
            <div class="form_group">
                <label for="input_pseudo">Pseudo : </label>
                <input type="text" id="input_pseudo" v-model="user.pseudo">
            </div>
            <div class="form_group">
                <label for="input_password">Password : </label>
                <input type="text" id="input_password" v-model="user.password">
            </div>
            <button type="submit" class="btn_login">Se connecter</button>
            <div class="res_form">
                <div v-if="this.getDatas !== null">
                    {{ getDatas.status }}
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login', 
    data() {
        return {
            user: {
                pseudo: '',
                password: '',
            },
            getDatas: null,
        }
    },
    methods: {
        loginAccount() {
        const rand = () => {
            return Math.random().toString(36).substr(2);
        };

        const token = () => {
            return rand() + rand();
        };

        // console.log(this.user)
        

        const path = 'http://localhost:5000/login';
        axios.get(path)
            .then((res) => {
                this.getDatas = res.data;
                console.log(this.getDatas)
                localStorage.setItem('token', token())
                console.log(localStorage.getItem('token'))
                console.log(this.user.password)
                setTimeout(() => {this.$router.push('/admin/dashboard')}, 1000); 
            })
            .catch((err) => {
                console.error(err);
            });

        /* fetch('http://localhost:5000/login')
        .then(data => console.log(data))
        .catch(err => console.log(err)) */
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

    .res_form {
        padding-top: 30px;
        font-size: 22px;
        font-weight: bold;
        color: green;
    }
</style>