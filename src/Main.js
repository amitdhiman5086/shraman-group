import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Error from "./pages/Error";
import MoreAboutBusiness from "./pages/MoreAboutBusiness";

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
        path : ":id",
        element : <MoreAboutBusiness />
      }
      
   
    ],
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;
