<template>
  <div class="container">
    <p class="h1 my-4 bg-danger text-white p-2 rounded-3">Profile Page</p>

    <p class="h4">{{ profile }}</p>

    <router-link class="btn btn-success mx-2" to="/login"> LogIn </router-link>
    <router-link class="btn btn-outline-info mx-2" to="/register">
      Register
    </router-link>

    <router-link class="btn btn-warning mx-2" to="/"> Routing </router-link>
    <router-link class="btn btn-info mx-2" to="/profile/lamba">
      Lamba
    </router-link>
    <router-link class="btn btn-outline-warning mx-2" to="/profile/opeyemi">
      Opeyemi
    </router-link>
    <router-link class="btn btn-outline-secondary mx-2" to="/profile/sodiq">
      Sodiq
    </router-link>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "Profile-vue",

  data() {
    return {
      profile: "",
    };
  },
  mounted() {
    const route = useRoute();
    console.log("route", route.params.name);
    this.profile = route.params.name;
  },
};
</script>

<style></style>
