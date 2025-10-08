import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Header from "../Component/Header/Header";

import Footer from "../Component/Footer/Footer";
import Root from "../Component/Root/Root";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Component/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/app",
        element: <Apps></Apps>,
      },
    ],
  },
  {
    path: "/header",
    element: <Header></Header>,
  },
]);

export default router;
