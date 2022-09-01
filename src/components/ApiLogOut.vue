<template>
  <div class="container">
    <!-- <p class="h1 bg-info text-dark p-2 rounded-2 fw-bold">user logIn</p> -->

    <div class="mb-3 w-50 m-auto">

      <button
        class="btn btn-lg btn-outline-danger text-center w-auto m-2"
        @click.prevent="logIn()"
      >
        Log Out
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApiLogOut-vue",


};
</script>

<style></style>
