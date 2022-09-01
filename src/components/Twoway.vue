<template>
  <h2 class="text-success mt-4"> Two Way Data-Binding</h2>
  <input type="text" v-model='data'/>
  <h2> {{data}} </h2>
</template>

<script>
export default {
  name: "Twoway-vue",
  data() {
      return {
          data: 0
      }
  }
};
</script>

<style></style>
