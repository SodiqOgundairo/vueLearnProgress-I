<template>
  <div class="container my-5">
    <p class="h2 bg-opacity-50 bg-success fw-bold p-2 rounded-2">
      DYNAMIC COMPONENTS
    </p>
    <button @click="content='JavaScript'" class="btn btn-danger mx-1">Load JavaScript</button>
    <button class="btn btn-success mx-1" @click="content='PHP'">Load PHP</button>
    <button @click="content='Python'" class="btn btn-info mx-1">Load Python</button>
  </div>
  <component :is="content"/>

</template>

<script>
import JavaScript from "./DynamicComponents/JavaScript.vue";
import PHP from "./DynamicComponents/PHP.vue";
import Python from "./DynamicComponents/Python.vue";

export default {
  name: "DynamicComponent-vue",

  data() {
    return {
        content: "JavaScript"
    };
  },

  components: {
    PHP,
    JavaScript,
    Python,
  },
};
</script>

<style></style>
