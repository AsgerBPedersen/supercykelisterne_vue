<template>
  <div>
    <h4 class="text-center p-3">TILFØJ BILLEDE</h4>
    <p v-if="files" :files="files">{{ files[0].name }}</p>

    <div class="form-group row">
      <div class="d-flex">
        <label class="btn btn-outline-secondary text-nowrap m-0">
          VÆLG FIL PÅ DIN COMPUTER
          <input
            class="form-control"
            type="File"
            name="file"
            accept="image/*"
            v-on:change="onChange($event)"
            hidden
          />
        </label>

        <button @click="onSubmit" class="btn btn-primary align-self-center">
          UPLOAD
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
import { store } from "../store";

export default {
  name: "add-photo",
  data() {
    return {
      files: null
    };
  },
  methods: {
    async onSubmit() {
      if (this.files) {
        const data = new FormData();
        data.append("file", this.files[0]);
        data.append("upload_preset", "SuperCykler");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/asge4899/image/upload",
          {
            method: "POST",
            body: data
          }
        );
        const img = await res.json();

        this.$apollo
          .mutate({
            mutation: gql`
              mutation CREATE_IMAGE($url: String!) {
                createImage(url: $url) {
                  id
                }
              }
            `,
            variables: {
            url: img.secure_url
          }
          })
          .then(data => {
            // Result
            console.log(data);
            this.files = null;
            store.refreshUser();
          })
          .catch(error => {
            // Error
            console.error(error);
          });

        
        
      }
    },
    onChange(e) {
      this.files = e.target.files;
    }
  }
};
</script>

<style>
</style>