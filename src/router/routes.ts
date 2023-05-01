import { Main, Header, Footer } from "../components";

const routes = [
  {
    path: "/",
    exact: true,
    component: Main,
    name: "Home",
  },
  {
    path: "*",
    exact: false,
    component: Header,
    name: "Not Found",
  },
];
const existingRoutes = ["/"];
export { routes, existingRoutes };
