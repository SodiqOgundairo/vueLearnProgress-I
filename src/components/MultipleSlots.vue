<template>
    <div class="container my-5">
        <p class="h3 text-white bg-dark p-2 rounded-3">MULTIPLE SLOT</p>
        <header>
            <slot name="header"> Default Data</slot>
        </header>
        <main>
            <slot name="main"> Default Data</slot>
        </main>
        <footer>
            <slot name="footer">Default Data </slot>
        </footer>
    </div>

    <router-link to="/" class="btn btn-lg btn-warning">Home </router-link>
</template>

<script>
export default {
    name: 'MultipleSlot-vue',
}
</script>

<style>

</style>