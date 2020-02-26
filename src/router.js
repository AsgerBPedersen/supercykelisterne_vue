import Welcome from "./components/Welcome";
import Members from "./components/Members";
import Account from "./components/Account";
import About from "./components/About";

export const routes = [
    { path: "/", component: Welcome },
    { path: "/om-os", component: About },
    { path: "/medlemmer", component: Members },
    { path: "/konto", component: Account },
  ];