<template>
    <p class="h2 text-success my-3" > Refrences</p>
    <input type="text bg-light p-2 m-2" ref="input">
    <button class="btn m-3 btn-warning" @click="getData"> References Button</button>
</template>

<script>
export default {
    name: 'Ref-vue',
    
    methods: {
        getData(){
            // this.$refs.input.focus()
            // this.$refs.input.value='OluwaLamba'
            console.log(this.$refs.input.value)
        }
    }
}
</script>

<style>

</style>