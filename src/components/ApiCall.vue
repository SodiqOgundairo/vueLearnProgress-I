<template>
  <div class="container my-5">
    <p class="h1 bg-danger text-white p-2 rounded-2">API Call</p>

    <ul class="">
        <li class="d-inline-block border-2 w-auto text-center p-2" v-for="item in list" :key="item.id"><span>{{item.id}} </span> <span>{{item.first_name}} </span> <span>{{item.last_name}} </span>  <span>{{item.email}} </span> <img :src="item.avatar" alt="PRofile picture"> </li>
        <!-- <li class="d-inline-block border-2 w-auto text-center p-2" v-for="item in list" :key="item.id"> {{item.last_name}} </li> -->
        <!-- <li class="d-inline-block border-2 w-auto text-center p-2" v-for="item in list" :key="item.id"> {{item.email}} </li> -->
        <!-- <li class="d-inline-block border-2 w-auto text-center p-2" v-for="item in list" :key="item.id"> <img :src="item.avatar" alt="PRofile picture"> </li> -->
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ApiCall-vue",

  data() {
    return {
      list: [],
    };
  },

  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.log(result.data.data);
    this.list = result.data.data;
  },
};
</script>
