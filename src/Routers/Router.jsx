import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    //   errorElement: <NotFound />, 
      children: [
        {
          path: '',
          element: <Home />
        }
      ]
    },
  ]); 