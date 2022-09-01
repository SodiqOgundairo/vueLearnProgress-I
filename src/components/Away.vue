<template>
  <h4>{{ count }}</h4>

  <button
    class="btn btn-success shadow-none hover:danger"
    v-on:click="myCount()"
  >
    Click Me!
  </button>
  <button
    class="btn btn-danger shadow-none hover:danger"
    v-on:click="getData()"
  >
    Click Me 2!
  </button>
</template>

<script>
export default {
  name: "Away-vue",

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    getData() {
      this.count = this.count - 1;
    },
    myCount() {
      this.count = this.count + 1;
    },
  },
};
</script>

<style></style>
