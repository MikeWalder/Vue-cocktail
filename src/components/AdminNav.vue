<template>
    <div class="admin_navbar">
        <ul>
            <li><router-link to="/admin/users/add">Add user</router-link></li>
            <li><router-link to="/admin/users/edit/45">Edit user</router-link></li>
            <li><router-link to="/admin/users/index">Index user</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavAdmin'
}
</script>

<style>
    .admin_navbar {
        border-right: 1px solid black;
        text-align: center;
        max-width: 15vw;
        height: 100vh;
        padding: 15px;
        text-transform: uppercase;
    }
    .admin_navbar ul {
        list-style-type: none;
    }
    .admin_navbar ul li {
        padding: 10px;
    }
</style>