import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ProductDetails from "../pages/ProductDetails/ProductDetails";


const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "about",
            element: <About></About>
         },
         {
            path: "contact",
            element: <Contact></Contact>
         },
         {
            path: "/products/:id",
            element: <ProductDetails></ProductDetails>,
            loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`)
         }
      ]
   }
]);

export default router; 