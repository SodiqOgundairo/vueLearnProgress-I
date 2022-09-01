<template>
  <div class="container">
    <p class="h1 bg-info text-dark p-2 rounded-2 fw-bold">user logIn</p>

    <div class="mb-3 w-50 m-auto">
      <div class="d-block">
        <label for="email" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          name="email"
          id=""
          placeholder="email here"
          v-model="email"
        />
      </div>

      <div class="d-block">
        <label for="password" class="form-label"></label>
        <input
          type="password"
          class="form-control"
          name="password"
          id=""
          placeholder="****"
          v-model="password"
        />
      </div>

      <button
        class="btn btn-lg btn-outline-danger text-center w-auto m-2"
        @click.prevent="logIn()"
      >
        Log In
      </button>
      <button
        class="btn btn-lg btn-outline-primary text-center w-auto m-2"
        @click.prevent="logInGoogle()"
      >
        Sign In with Google
      </button>
          <router-link class="btn btn-outline-info mx-2" to="/register">
      Register
    </router-link>
    <router-link class="btn btn-success mx-2" to="/"> Home </router-link>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import axios from "axios";
export default {
  name: "ApiLogIn-vue",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async logIn1() {
      let name = await axios.post(
        "https://mclamba-gr8qm-default-rtdb.firebaseio.com/data.json"
      );

      if (this.email === name.email && this.password === name.password) {
        alert("welcome");
      } else {
        alert("incorrect username or password");
      }
    },

    logIn() {
      const auth = getAuth();
      const message = 'Check your username and password'
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          alert("Your are welcome!!");
          this.$router.push("/dashboard");
        })
        .catch(() => {
          alert(message);
        });
    },

    logInGoogle() {
      const provider = new GoogleAuthProvider();
          const auth = getAuth();
      signInWithPopup(auth, provider)
        .then(() => {
          // const credential = GoogleAuthProvider.credentialFromResult(result)
          // const token =credential.accessToken
          alert("Successfully registered! Please login.");
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style></style>
