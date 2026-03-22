import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        lazy: async () => {
          const { Home } = await import("./pages/Home");
          return { Component: Home };
        },
      },
      {
        path: "portfolio",
        lazy: async () => {
          const { Portfolio } = await import("./pages/Portfolio");
          return { Component: Portfolio };
        },
      },
      {
        path: "about",
        lazy: async () => {
          const { About } = await import("./pages/About");
          return { Component: About };
        },
      },
      {
        path: "universe/ecommerce",
        lazy: async () => {
          const { EcommercePrototype } = await import("./pages/EcommercePrototype");
          return { Component: EcommercePrototype };
        },
      },
      {
        path: "universe/gaming",
        lazy: async () => {
          const { GamingPrototype } = await import("./pages/GamingPrototype");
          return { Component: GamingPrototype };
        },
      },
      {
        path: "universe/startup",
        lazy: async () => {
          const { StartupPrototype } = await import("./pages/StartupPrototype");
          return { Component: StartupPrototype };
        },
      },
    ],
  },
]);
