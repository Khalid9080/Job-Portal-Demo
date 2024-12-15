import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,

      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/jobs/:id",
        element: 
        <PrivateRoute>
          <JobDetails></JobDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element:
        <PrivateRoute>
          <JobApply></JobApply>
          </PrivateRoute>,
        // loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      }
    ],
  },
]);

export default router;