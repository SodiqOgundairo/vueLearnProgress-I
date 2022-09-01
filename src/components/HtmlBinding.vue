<template>
  <h2 class="text-success mt-3">HTML Binding</h2>
  <div v-html="tag + tag1">
  </div>

</template>

<script>
export default {
  name: "HtmlBinding-vue",
  data() {
      return {
          tag: "<h5 class='me'>HTML text via Binding... Yay!!!!!</h5>",
          tag1: "<h5 class='k'>I am Working</h5>"
      }
  }
};
</script>

<style>
.me{
  color: red;
}

.k {
  background-color: green;
  color: white;
}
</style>
