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
        element: <AddJobs />,
      },
      {
        path: "jobs/:id",
        element: <JobDetails />,
      },
      {
        path: "my-posted-jobs",
        element: <MyPostedJobs />,
      },
      {
        path: "my-bids",
        element: <MyBids />,
      },
      {
        path: "bid-requests",
        element: <BidRequests />,
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
