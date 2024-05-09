import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service"
import About from "./pages/About"
import NotFoundPage from "./pages/NotFoundPage"
import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard";
import App from './App.jsx'
import "./index.css";
import Patients from "./components/Patients";
import DashboardRoot from "./components/DashboardRoot";
import Appointments from "./pages/Appointments";
import Reports from "./pages/Reports.jsx";


const router = createBrowserRouter([{ 
 path: "/",
 element: <App/>,
 errorElement: <NotFoundPage/>,
 children:[
  {
    path: "", 
    element: <Home/>,
    },
    {
      path:"/about",
      element:<About/>
      },
      {
        path:"services",
        element:<Service/>
        },
        {
          path:"auth",
          element:<Auth/>
        }
 ]
},



{
  path: "/dashboard",
  element: <DashboardRoot/>,
  children: [
    {
      path: "",
      element: <Dashboard/> 
    },
    {
      path: "patients",
      element: <Patients/>
    },
    {
      path: "appointments",
      element: <Appointments/> 
    },
   
    {
      path: "reports",
      element: <Reports/> 
    },
    
  ]
},

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);