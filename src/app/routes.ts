import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { EcommercePrototype } from "./pages/EcommercePrototype";
import { GamingPrototype } from "./pages/GamingPrototype";
import { StartupPrototype } from "./pages/StartupPrototype";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: Portfolio },
      { path: "about", Component: About },
      { path: "universe/ecommerce", Component: EcommercePrototype },
      { path: "universe/gaming", Component: GamingPrototype },
      { path: "universe/startup", Component: StartupPrototype },
    ],
  },
]);
