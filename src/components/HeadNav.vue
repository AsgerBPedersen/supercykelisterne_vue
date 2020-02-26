<template>
  <div class="header d-flex justify-content-between">
    <div class="d-flex">
      <div id="logo" class="p-3">
        <h1 class="text-center">
          Super <br />
          Cykelisterne
        </h1>
      </div>
      <nav class="navbar navbar-expand-lg">
        <ul class="navbar-nav">
          <li class="nav-item m-2">
            <router-link class="nav-link text-dark font-weight-bold" to="/">
              Forside
            </router-link>
          </li>
          <li class="nav-item m-2">
            <router-link class="nav-link text-dark font-weight-bold" to="/medlemmer">
              Medlemmer
            </router-link>
          </li>
          <li class="nav-item m-2">
            <router-link class="nav-link text-dark font-weight-bold" to="/om-os">
              Om klubben
            </router-link>
          </li>
          <li class="nav-item m-2">
            <router-link class="nav-link text-dark font-weight-bold" to="/konto">
              Medlemsområde
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadNav"
};
</script>

<style scoped>
.nav-link:hover {
  text-decoration: underline;
}
#logo {
  background-color: #fcd12a;
}
.header {
  border-bottom: 10px solid #fcd12a;
}
</style>
