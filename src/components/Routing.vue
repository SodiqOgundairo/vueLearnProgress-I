<template>
  <div class="container">
    <p class="h1 my-4 bg-black text-white p-2 rounded-3">Routing</p>

    <router-link class="btn btn-success mx-2" to="/login"> LogIn </router-link>
    <router-link class="btn btn-danger mx-2" to="/profile">
      Profile
    </router-link>
    <router-link class="btn btn-outline-info mx-2" to="/register">
      Register
    </router-link>
    <router-link class="btn btn-info mx-2" to="/profile/lamba">
      Lamba
    </router-link>
    <router-link class="btn btn-outline-warning mx-2" to="/profile/opeyemi">
      Opeyemi
    </router-link>
    <router-link class="btn btn-outline-secondary mx-2" to="/profile/sodiq">
      Sodiq
    </router-link>

    <div class="d-block">
    <router-link class="btn btn-outline-secondary m-2" to="/mutli-slot">
      Slots
    </router-link>
    <div class="d-block">
    <router-link class="btn btn-outline-primary m-2" to="/async">
      Asyn Components
    </router-link>
      
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Routing-vue",
};
</script>

<style></style>
