<template>
  <h2 class="text-success mt-4">Loop</h2>
  <h5 class="text-success mt-4">For Loop</h5>
  <ul class="my-3">
    <li v-for="item in technology" :key="item">{{ item }}</li>
  </ul>

  <ul>
      <li v-for="item in users" :key="item.name"> Username is {{item.name}} and Email is {{item.email}} </li>
  </ul>
</template>

<script>
export default {
  name: "Loop-vue",

  data() {
    return {
      technology: ["java", "php", "node", "html", "asp"],

      users: [
        { name: "Lamba", email: "lamba@test.com" },
        { name: "Ope", email: "ope@test.com" },
        { name: "Sodiq", email: "sodiq@test.com" },
      ],
    };
  },
};
</script>

<style></style>
