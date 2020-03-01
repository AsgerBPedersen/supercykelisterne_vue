<template>
  <div class="col-sm-4">
    <form method="post" v-on:submit="createUser($event)">
      <h4 class="text-center p-3">OPRET BRUGER</h4>
      <div class="form-group row d-flex justify-content-end">
        <label class="form-label m-0 text-right p-2">Din email</label>
        <div class="col-sm-8 p-0">
          <input
            class="form-control"
            type="email"
            placeholder="email"
            name="email"
            v-model="email"
          />
        </div>
      </div>
      <div class="form-group row d-flex justify-content-end">
        <label class="form-label m-0 text-right p-2">Dit navn</label>
        <div class="col-sm-8 p-0">
          <input
            class="form-control"
            type="text"
            placeholder="navn"
            name="name"
            v-model="name"
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
          />
        </div>
      </div>
      <div class="form-group row d-flex justify-content-end">
        <label class="form-label m-0 text-right p-2">Gentag</label>
        <div class="col-sm-8 p-0">
          <input
            class="form-control"
            type="password"
            name="confirm"
            placeholder="kodeord"
            v-model="confirmPassword"
          />
        </div>
      </div>
      <div class="form-group d-flex justify-content-end">
        <button class="btn btn-primary" type="submit">
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
  name: "signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    createUser(e) {
      e.preventDefault();
      this.$apollo
        .mutate({
          mutation: gql`
            mutation SIGNUP(
              $email: String!
              $name: String!
              $password: String!
            ) {
              createUser(email: $email, name: $name, password: $password) {
                id
                email
                name
              }
            }
          `,
          variables: {
            email: this.email,
            name: this.name,
            password: this.password
          }
        })
        .then(() => {
          // Result
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
