<template>
  <div class="bg-dark w-25 text-white p-3 rounded-3 m-3">
      <h5> {{data.name}} </h5>
      <h5> {{data.email}} </h5>
      <button v-on:click="alertUser(data.name)" class="btn btn-warning shadow-none"> Alert User Name</button>
  </div>

</template>

<script>
export default {
  name: "Reuse-vue",
  props: {
      data:Object,
      alertUser:Function
  },

};
</script>

<style></style>
