<template>
    <div class="admin_header">
        Header admin
        
            <button  @click="disconnectAccount()" class="btn_disconnect">Disconnect</button>
        
        <span v-if="validateDisconnection">Redirection...</span>
    </div>
</template>

<script>
export default {
    name: 'HeaderAdmin',
    data() {
        return {
            validateDisconnection: null,
        }
    },
    methods: {
        disconnectAccount() {
            if(localStorage.getItem('token')) {
                localStorage.removeItem('token')
                this.validateDisconnection = true
                setTimeout(() => {
                    this.$router.push('/')
                }, 800)
                
            }
        }
    }
}
</script>

<style>
    .admin_header {
        border-bottom: 1px solid black;
        font-weight: bold;
        font-size: 22px;
        padding: 20px;
        background: linear-gradient(lightskyblue 0%, lightgreen 80%);
    }
    button {
        display: inline-block;
        
    }
    .btn_disconnect {
        background-color: #dc3545;
        color: white;
        padding: 10px; 
    }
</style>