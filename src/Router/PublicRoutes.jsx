import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequests from "../Pages/BidRequests/BidRequests";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";
import JobDetails from "../Pages/JobDetails/JobDetails";
import UpdatePostedJobs from "../Pages/MyPostedJobs/UpdatePostedJobs";
import PrivateRoutes from "./PrivateRoutes";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-jobs",
        element: (
          <PrivateRoutes>
            <AddJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "jobs/:id",
        element: (
          <PrivateRoutes>
            <JobDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "my-posted-jobs",
        element: (
          <PrivateRoutes>
            <MyPostedJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "update-jobs-data/:id",
        element: (
          <PrivateRoutes>
            <UpdatePostedJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "my-bids",
        element: (
          <PrivateRoutes>
            <MyBids />
          </PrivateRoutes>
        ),
      },
      {
        path: "bid-requests",
        element: (
          <PrivateRoutes>
            <BidRequests />
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default PublicRoutes;
