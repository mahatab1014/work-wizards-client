import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        exact: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
  }
]);

export default PublicRoutes;
