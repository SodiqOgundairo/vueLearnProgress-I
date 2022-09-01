<template>
  <teleport to="#header">
    <Teleportss class="fixed-top " />
  </teleport>
</template>

<script>
import Teleportss from "./Teleportss.vue";

export default {
  name: "TeleportHeader-vue",

  components: {
    Teleportss,
  },
};
</script>

<style></style>
