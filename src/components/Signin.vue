<template>
  <div>
    <form method="post" v-on:submit="Signin($event)">
      <h4 class="text-center p-3">LOG IND HER</h4>
      <div class="form-group row d-flex justify-content-end">
        <label class="form-label m-0 text-right p-2">Email</label>
        <div class="col-sm-8 p-0">
          <input
            class="form-control"
            type="email"
            placeholder="email"
            name="email"
            v-model="email"
            required
          />
        </div>
      </div>
      <div class="form-group row d-flex justify-content-end">
        <label class="form-label m-0 text-right p-2">Kodeord</label>
        <div class="col-sm-8 p-0">
          <input
            class="form-control"
            type="password"
            placeholder="kodeord"
            name="password"
            v-model="password"
            required
          />
        </div>
      </div>
      <div class="form-group d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">
          LOG IND
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
import { store } from "../store";

export default {
  name: "signin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    Signin(e) {
      e.preventDefault();
      this.$apollo
        .mutate({
          mutation: gql`
            mutation SIGNIN($email: String!, $password: String!) {
              signin(email: $email, password: $password) {
                id
              }
            }
          `,
          variables: {
            email: this.email,
            password: this.password
          }
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
