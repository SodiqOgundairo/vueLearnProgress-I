<template>
  <h2 class="text-success mt-3">Class Binding</h2>
  <h2 class="text-warning h5 mt-3" :class="{ customcss: style }">
    Change Style
  </h2>

  <button v-on:click="style = !style" class="btn btn-dark shadow-none">
    Change style
  </button>
</template>

<script>
export default {
  name: "ClassBinding-vue",

  data() {
    return {
      style: true,
    };
  },

  computed: {
    changeStyle() {
      return {
        customcss: this.style,
      };
    },
  },
};
</script>

<style>
.customcss {
  background-color: green;
  color: white !important;
  padding: 10px;
  border-radius: 5px;
  width: fit-content;
}
</style>
