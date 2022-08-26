<template>
    <div class="userEdit">
        Voici le user Edit numéro <span>{{ id }}</span>
    </div>
</template>

<script>
export default {
    name: 'UserEdit',
    props: ['id'],
    data() {
        return {
            message: '',
        }
    },
}
</script>

<style>

</style>