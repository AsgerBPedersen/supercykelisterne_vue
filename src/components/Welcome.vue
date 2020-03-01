<template>
  <div>welcome

  <!-- <carousel></carousel> -->
  <div class="d-flex justify-content-around container p-5">
  <signup v-if="!state.user"></signup>
  <signin v-if="!state.user"></signin>        
        </div>
  </div>
</template>

<script>
// import Carousel from "./Carousel";
import Signup from "./Signup";
import Signin from "./Signin";
import { store } from "../store";

export default {
  name: "welcome",
  data() {
    return {
      state: store.state
    }
  },
    components: {
        // Carousel
        Signup,
        Signin
    }
}
</script>

<style>

</style>