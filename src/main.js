import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { BootstrapVue } from "bootstrap-vue";
import { routes } from "./router";
import ApolloClient from "./apolloCient";    
import VueApollo from "vue-apollo";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueApollo);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: "history"
});

const apolloProvider = new VueApollo({
  defaultClient: ApolloClient
})

// eslint-disable-next-line
new Vue({
  render: h => h(App),
  router,
  apolloProvider
}).$mount("#app");
