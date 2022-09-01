<template>
  <div class="container my-5">
    <p class="h2 bg-dark p-2 rounded-2 text-white">WATCHERS</p>
    <p class="h4">{{ count }}</p>
    <button class="btn btn-lg btn-dark mx-2" @click="count--">-</button>
    <button class="btn btn-lg btn-info m-2" @click="count++">+</button>
  </div>
</template>

<script>
export default {
  name: "Watchers-vue",

  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(val, prev) {
      if (val >= 10 && val > prev) {
        // alert("stop count");
        this.count = 10;
      } else if (val <= 0) {
        // alert("count");
        this.count = 0;
      }
    },
  },
};
</script>

<style></style>
