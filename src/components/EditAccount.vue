<template>
  <div class="d-flex justify-content-around container">
    <div>
      <form method="post" v-on:submit="sumbitChanges($event)">
        <h4 class="text-center p-3">RET DINE BRUGEROPLYSNINGER</h4>
        <p class="text-danger"></p>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Dit navn</label>
          <div class="col-sm-8">
            <input
              class="form-control"
              type="text"
              placeholder="navn"
              name="name"
              v-model="name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Kodeord</label>
          <div class="col-sm-8">
            <input
              class="form-control"
              type="password"
              placeholder="kodeord"
              name="password"
              v-model="password"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Gentag</label>
          <div class="col-sm-8">
            <input
              class="form-control"
              type="password"
              placeholder="kodeord"
              name="confirm"
              v-model="confirmPassword"
            />
          </div>
        </div>
        <div class="form-group d-flex justify-content-end">
          <button class="btn btn-primary" type="submit">OPDATER</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
import { store } from "../store";

export default {
  name: "editaccount",
  data() {
    return {
      name: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    getChanges: function() {
      const changes = {};
      if (this.name) changes.name = this.name;
      if (this.password) changes.password = this.password;
      return changes;
    },
    sumbitChanges: function(e) {
      e.preventDefault();
      if (this.password != this.confirmPassword) {
        alert("kodeordne er ikke ens.");
        this.password = "";
        this.confirmPassword = "";
      } else if (this.name || this.password) {
        this.$apollo
          .mutate({
            mutation: gql`
              mutation UPDATEUSER($id: ID!, $name: String, $password: String) {
                updateUser(id: $id, name: $name, password: $password) {
                  id
                }
              }
            `,
            variables: {
              id: store.state.user.id,
              ...this.getChanges()
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
  }
};
</script>

<style></style>
