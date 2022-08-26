<template>
    <div class="admin">
        <AdminHeader />
        <div class="nav_container">
            <div id="ad_nav">
                <AdminNav />
            </div>
            <div id="ad_display">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue'
import AdminNav from '@/components/AdminNav.vue'

export default {
    name: 'AdminLayout',
    components: {
        AdminHeader,
        AdminNav
    }
}
</script>

<style>
    .nav_container {
        display: flex;
    }
    #ad_nav {
        min-width: 15vw;
    }
    #ad_display {
        padding: 15px;
    }
</style>