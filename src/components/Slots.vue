<template>
<div class="container my-2">
    <p class="h2 bg-warning p-2 rounded-3 "> SLOT</p>
    <p class="h5 text-success"> SLOT: <slot>No Data</slot> </p>
</div>    
</template>

<script> 
export default {
    name: 'Slots-vue',

    props: {
        name:String
    }
}
</script>

<style>

</style>