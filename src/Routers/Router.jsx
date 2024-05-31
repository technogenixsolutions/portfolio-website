import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home";
import Contact from "../page/Contact";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    //   errorElement: <NotFound />, 
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    },
  ]); 