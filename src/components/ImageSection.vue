<template>
  <div class="d-flex flex-wrap">
    <div v-for="image in state.user.images" :key="image.id" class="col-3 mt-4 img-box">
      <img class="img" :src="image.url" />
      <button
        @click="deleteImage($event)"
        :name="image.id"
        class="close-btn btn btn-danger"
      >
        &times; SLET BILLEDE
      </button>
    </div>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
import { store } from "../store";

export default {
  name: "image-section",
  data() {
    return {
      state: store.state
    };
  },
  methods: {
    deleteImage(e) {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation DELETE_IMAGE($id: ID!) {
              deleteImage(id: $id) {
                id
              }
            }
          `,
          variables: {
            id: e.target.name
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

<style>
.img-box {
    height: 300px;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.close-btn {
  position: absolute;
  left: 25px;
  bottom: 15px;
}
</style>