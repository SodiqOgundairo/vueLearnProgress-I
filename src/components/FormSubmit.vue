<template>
  <p class="h2 text-success my-3">Forms Submission</p>

  <!-- <p class="h5">{{ form }}</p> -->
<ul>
    <li v-for="item in error" v-bind:key="item"> {{item}} is not valid </li>
</ul>
  <form action="">
    <div class="d-block">
      <label for="email">Email</label>
      <input
        class="my-2"
        type="email"
        name="email"
        placeholder="enter email"
        v-model="form.email"
      />
      <label for="password">Password</label>
      <input
        class="my-2"
        type="password"
        name="password"
        placeholder="enter password"
        v-model="form.password"
      />
      <div class="mb-3">
        <label for="select" class="form-label">Select Country:</label>
        <select
          class="form-control form-control-sm"
          name="select"
          value="select"
          id=""
          v-model="form.country"
        >
          <option>NIGERIA</option>
          <option>INDIA</option>
          <option>USA</option>
        </select>
      </div>

      <p class="h5 text-warning">GENDER</p>

      <div class="mb-3 d-block">
        <div class="">
          <input
            class="my-2"
            type="radio"
            name="gender"
            value="male"
            v-model="form.gender"
          />
          <label for="gender"> Male </label>
        </div>

        <div class="">
          <input
            class="my-2"
            type="radio"
            name="gender"
            value="female"
            v-model="form.gender"
          />
          <label for="gender"> Female </label>
        </div>
      </div>

      <div class="form-check d-block">
        <div class="">
          <input
            type="checkbox"
            class="form-check-input"
            name="JavaScript"
            id=""
            value="JavaScript"
            v-model="form.technology"
          />
          <label class="form-check-label" for="JavaScript"> JavaScript </label>
        </div>
        <div class="">
          <input
            type="checkbox"
            class="form-check-input"
            name="PHP"
            id=""
            value="PHP"
            v-model="form.technology"
          />
          <label class="form-check-label" for="PHP"> PHP </label>
        </div>
        <div class="">
          <input
            type="checkbox"
            class="form-check-input"
            name="Java"
            id=""
            value="Java"
            v-model="form.technology"
          />
          <label class="form-check-label" for="Java"> Java </label>
        </div>
        <div class="">
          <input
            type="checkbox"
            class="form-check-input"
            name=".Net"
            id=""
            value=".Net"
            v-model="form.technology"
          />
          <label class="form-check-label" for=".Net"> .Net </label>
        </div>
      </div>
      <button @click.prevent="login" class="btn btn-success m-1" type="button">
        Login
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormSubmit-vue",
  data() {
    return {
      form: {
        email: "",
        password: "",
        country: "",
        gender: "",
        technology: [],
      },
      error: [],
    };
  },

  methods: {
    login() {
      //   let mail = this.email.value
      //   let pwd = this.password.value
      console.log(this.form);
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item);
        }
      }
      if (this.error.length === 0) {
        alert("Data has been submitted");
      }
      console.log(this.error);
    },
  },
};
</script>

<style></style>
