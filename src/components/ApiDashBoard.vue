<template>
  <div class="container">
    <p class="h1 bg-info text-dark p-2 rounded-2 fw-bold">DashBoard</p>

    <div class="mb-3 w-50 m-auto">

<ApiLogOut />

    <router-link class="btn btn-lg btn-outline-danger mx-2" to="/logout" @click.prevent="logOut()"> LogOut </router-link>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import ApiLogOut from './ApiLogOut.vue';
export default {
  name: "ApiDashBoard-vue",
    comoponents: {ApiLogOut},
  
  methods:{
    logOut(){
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          alert("You are Logged out succesffuly.");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }

};
</script>

<style></style>
