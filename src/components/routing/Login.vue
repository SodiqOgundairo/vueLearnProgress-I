<template>
    <div class="container">
        <p class="h1 my-4 bg-warning text-black p-2 rounded-3">Login Page</p>

        <router-link class="btn btn-danger mx-2" to='/profile'> Profile </router-link>
        <router-link class="btn btn-outline-info mx-2" to='/register'> Register </router-link>
        <router-link class="btn btn-warning mx-2" to='/'> Routing </router-link>
                <router-link class="btn btn-info mx-2" to='/profile/lamba'> Lamba </router-link>
        <router-link class="btn btn-outline-warning mx-2" to='/profile/opeyemi'> Opeyemi </router-link>
        <router-link class="btn btn-outline-secondary mx-2" to='/profile/sodiq'> Sodiq </router-link>

    </div>
</template>

<script>
export default {
    name: 'Login-vue',
}
</script>

<style>

</style>