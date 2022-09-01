<template>
  <h2 class="text-danger">Getting Input Content</h2>
  <input type="text" placeholder="input email here" v-model="email" />
  <input type="password" placeholder="input password here" v-model="password" />
  <button type="button" v-on:click="getData()">Log In</button>

  <h2 class="text-success mt-3">Get CheckBoxes n Radios</h2>

  <h5 class="text-success">Technology</h5>
  <label for="java"> Java</label>
  <input type="checkbox" value="java" id="java" v-model="technology"/>
  <label for="Python"> Python</label>
  <input type="checkbox" value="Python" id="Python" v-model="technology" />
  <label for="PHP"> PHP</label>
  <input type="checkbox" value="PHP" id="PHP" v-model="technology" />
  <label for="JavaScript"> JavaScript</label>
  <input type="checkbox" value="JavaScript" id="JavaScript" v-model="technology" />

  <h4> Technology: {{technology}} </h4>
  <br/>

  <h4 class="text-">Profession</h4>

  <label for="student">Student</label>
  <input type="radio" name="profession" id="student" v-model="profession">

  <label for="Developer">Developer</label>
  <input type="radio" name="profession" id="Developer" v-model="profession">

  <h4> I am a {{profession}} </h4>
</template>

<script>
export default {
  name: "Forms-vue",

  data() {
    return {
      email: null,
      password: null,

      technology:[],
      profession:null
    };
  },

  methods: {
    getData() {
      console.log("value:", this.email, this.password);
    },
  },
};
</script>

<style></style>
