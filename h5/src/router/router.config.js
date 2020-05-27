import Loadable from "react-loadable";
import Loading from "./Loading";

const Home = Loadable({
  loader: () => import("pages/Home/Home"),
  loading: Loading,
});

const Cart = Loadable({
  loader: () => import("pages/Cart/Cart"),
  loading: Loading,
});

const Category = Loadable({
  loader: () => import("pages/Category/Category"),
  loading: Loading,
});

const Star = Loadable({
  loader: () => import("pages/Star/Star"),
  loading: Loading,
});

const User = Loadable({
  loader: () => import("pages/User/User"),
  loading: Loading,
});

export const Routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/star",
    component: Star,
  },
  {
    path: "/user",
    component: User,
  },
];
