<template>
  <button class="btn btn-primary align-self-center m-5" @click="signout">
    LOG UD
  </button>
</template>

<script>
import { gql } from "apollo-boost";
import { store } from "../store";

export default {
  name: "signout",
  methods: {
    signout() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation SIGN_OUT_MUTATION {
              signout
            }
          `
        })
        .then(data => {
          // Result
          console.log(data);
          store.refreshUser();
        })
        .catch(error => {
          // Error
          console.error(error);
        });
    }
  }
};
</script>

<style></style>
