<template>
  <h2 class="text-success mt-4" v-if='show'> Conditions</h2>
  <h2 class="text-success mt-4" v-else> Else Conditions</h2>
  <button v-on:click="show=!show">Show/Hide</button>
</template>

<script>
export default {
  name: "Conditions-vue",

  data() {
      return {
          show: true
      }
  }

};
</script>

<style></style>
