<template>
  <div id="app">
    <HeadNav msg="test"></HeadNav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadNav from "./components/HeadNav";

export default {
  name: "App",
  components: {
    HeadNav
  }
};
</script>

<style>
#app {
}
</style>
