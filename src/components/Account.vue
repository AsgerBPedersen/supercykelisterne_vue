<template>
  <div>
    <div v-if="!state.user">
      <h2 class="text-center m-5">
        Log venligst ind eller opret en bruger
      </h2>
      <div class="d-flex justify-content-around container">
        <signin></signin>
        <signup></signup>
      </div>
    </div>
    <EditAccount v-if="state.user"></EditAccount>
  </div>
</template>

<script>
import Signup from "./Signup";
import Signin from "./Signin";
import EditAccount from "./EditAccount";
import { store } from "../store";

export default {
  name: "account",
  data() {
    return {
      state: store.state
    };
  },
  components: {
    Signup,
    Signin,
    EditAccount
  }
};
</script>

<style></style>
