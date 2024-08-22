import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Servies from "./pages/Servies";
import CaseStudies from "./pages/CaseStudies";
import Hire from "./pages/Hire";
import HowItWorks from "./pages/HowItWorks";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
  
    children: [
     
      {
        index: true,
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "servies",
        element: <Servies />,
      },
      {
        path: "casestudies",
        element: <CaseStudies />,
      },
      {
        path: "hire",
        element: <Hire />,
      },
      {
        path: "howitworks",
        element: <HowItWorks />,
      },
   
    ],
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;
