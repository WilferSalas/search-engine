// @pages
import HomePage from "../pages/home-page";
import Layout from "../layout";
import NotFoundPage from "../pages/not-found-page";
import { LazyExoticComponent } from "react";

interface Route {
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  layout: () => JSX.Element;
  path: string;
}

const routes: Route[] = [
  {
    component: HomePage,
    layout: Layout,
    path: "/",
  },
  {
    component: NotFoundPage,
    layout: Layout,
    path: "/*",
  },
];

export default routes;
