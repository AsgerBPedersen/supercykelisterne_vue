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
    <div v-if="state.user">
      <h2 class="text-center m-5">Velkommen {{ state.user.name }}</h2>
      <div class="d-flex justify-content-around container">
        <EditAccount></EditAccount>
        <add-photo></add-photo>
      </div>
      <h4 class="text-center m-5">DINE BILLEDER</h4>
      <image-section></image-section>
    </div>
  </div>
</template>

<script>
import Signup from "./Signup";
import Signin from "./Signin";
import EditAccount from "./EditAccount";
import AddPhoto from "./AddPhoto";
import ImageSection from "./ImageSection";
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
    EditAccount,
    AddPhoto,
    ImageSection
  }
};
</script>

<style></style>
