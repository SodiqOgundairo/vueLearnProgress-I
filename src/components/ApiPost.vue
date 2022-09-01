<template>
  <div class="container">
    <p class="h1 bg-info text-dark p-2 rounded-2 fw-bold">API POST METHOD</p>

    <div class="mb-3 w-50 m-auto">
      <div class="d-block">
        <label for="first_name" class="form-label"></label>
        <input
          type="first_name"
          class="form-control"
          name="first_name"
          id=""
          placeholder="first_name here"
          v-model="first_name"
        />
      </div>
      <div class="d-block">
        <label for="last_name" class="form-label"></label>
        <input
          type="last_name"
          class="form-control"
          name="last_name"
          id=""
          placeholder="last_name here"
          v-model="last_name"
        />
      </div>
      <div class="d-block">
        <label for="email" class="form-label"></label>
        <input
          type="email"
          class="form-control"
          name="email"
          id=""
          placeholder="email here"
          v-model="email"
        />
      </div>
      <div class="d-block">
        <label for="avatar" class="form-label"></label>
        <input
          type="avatar"
          class="form-control"
          name="avatar"
          id=""
          placeholder="avatar here"
          v-model="avatar"
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
        @click.prevent="register()"
      >
        Sign Up
      </button>
            <button
        class="btn btn-lg btn-outline-primary text-center w-auto m-2"
        @click.prevent="logInGoogle()"
      >
        Sign In with Google
      </button>
    <router-link class="btn btn-success mx-2" to="/login"> LogIn </router-link>
    <router-link class="btn btn-success mx-2" to="/"> Home </router-link>
    </div>
    
  </div>
</template>

<script>

import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
export default {
  name: "ApiPost-Vue",

  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
      password: "",
    };
  },

  methods: {
    async addUser() {
      let result = await axios.post(
        "https://mclamba-gr8qm-default-rtdb.firebaseio.com//data.json",
        {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          avatar: this.avatar,
          password: this.password,
        }
      );
      console.log(result);
    },

    register() {
      const auth = getAuth()
      const message = 'Check your username and password'
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then(() => {
        alert("Successfully registered! Please login.");
        this.$router.push("/login");
      }).catch(() => {
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
