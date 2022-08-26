<template>
    <div class="dashboard">
        dashboard part
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
}
</script>

<style>
    .dashboard {
        text-align: left;
        padding: 10px;
    }
</style>