<template>
  <h1 class="text-success" id="aa" v-on:mouseover="getConsole()">
    Header for Home
  </h1>
  <h1 class="text-success h6">Name: {{ getData().name }}</h1>
  <h1 class="text-success h6">Phone Number: {{ myPhone() }}</h1>
  <h1 class="text-success h6">Email Address: {{ getData().mail }}</h1>

  <PassData name="name" />

  <h2 class="text-danger mt-3">Reusing a Component</h2>

  <ul>
    <li v-for="item in users" :key="item.name">  <Reuse :data="item" :alertUser="alertUser"/> </li>
  </ul>
 
</template>

<script>
import PassData from "./PassData.vue";
import Reuse from "./Reuse.vue";

export default {
  name: "Home-vue",

  components: {
    PassData,
    Reuse,
  },

  data() {
    return {
      email: "ogundairosodiq954@gmail.com",
      users: [
        {
          name: "Lamba",
          email: "lamba@test.com",
        },
        {
          name: "Opeyemi",
          email: "ope@test.com",
        },
        {
          name: "Sodiq",
          email: "sodiq@test.com",
        },
        {
          name: "Damilare",
          email: "dami@test.com",
        },
      ],
    };
  },

  methods: {
    myPhone() {
      return "08109983194";
    },
    getData() {
      return {
        name: "Opeyemi",
        gender: "Male",
        mail: this.email,
      };
    },

    getConsole() {
      console.log("yay");
    },

      alertUser(name) {
          alert(name)
      }
  },
};
</script>

<style>
li {
  list-style: none;
}
</style>
