import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { BootstrapVue } from "bootstrap-vue";
import { routes } from "./router";
import ApolloClient from "./apolloCient";    



import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false;


const apolloProvider = new VueApollo({
  defaultClient: ApolloClient
})

new Vue({
  render: h => h(App),
  router,
  provide: apolloProvider.provide()
}).$mount("#app");
