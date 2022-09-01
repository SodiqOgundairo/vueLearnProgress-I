<template>
  <div class="container">
    <p class="h3 text-white p-2 rounded-2 bg-success">COMPUTED PROPERTY</p>
    <p class="">Computed Property : {{ dollars }}</p>
    <p class="">{{ getResult }}</p>
  </div>
</template>

<script>
export default {
  name: "Computed-vue",

  data() {
    return {
      dollars: 100,
      naira: 40,
      discount: 10,
    };
  },

  computed: {
    getResult() {
      return this.dollars * this.naira - this.discount;
    }
  }
};
</script>

<style></style>
