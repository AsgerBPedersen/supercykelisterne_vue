<template>
  <div id="app">
    <HeadNav></HeadNav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadNav from "./components/HeadNav";
import { store } from "./store";

export default {
  name: "App",
  data() {
    return {
      state: store.state
    }
  },
  components: {
    HeadNav
  },
  mounted() {
    store.refreshUser()
  }
};
</script>

<style>
#app {
}
</style>
