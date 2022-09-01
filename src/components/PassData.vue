<template>
  <h2 class="text-danger">Passing Data Child Component</h2>
  <h2 class="text-danger h4">Using Proops</h2>
  <h2 class="text-danger h6">The following is a prop: {{ user.name='Lamba' }}</h2>

  <button class="btn btn-primary shadow-none" v-on:click="clickMe()">Click</button>
</template>

<script>
export default {
  name: "PassData-vue",

  data() {
    return {
      user: {
        name: "Opeyemi", 
        email: "opeyemi@test.com",
      },
    };
  },

  methods: {
      
     clickMe() {
          alert("I've been" )
      }
  },

  props: {
    name:String,
    data:Object,
    // clickMe:Function,
  },
};
</script>

<style></style>
