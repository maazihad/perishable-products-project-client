import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Services from '../pages/Services/Services';
import DashboardLayer from '../Layouts/DashboardLayer';
import Login from '../pages/Authentication/Login/Login';
import SignUp from '../pages/Authentication/SignUp/SignUp';
import AllProducts from '../pages/AllProducts/AllProducts';
import SecureRoute from './SecureRoute';
import AddProduct from '../pages/AddProduct/AddProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
      {
        path: 'services',
        element: <Services></Services>,
      },
      {
        path: '/products/:id',
        element: (
          <SecureRoute>
            <ProductDetails></ProductDetails>
          </SecureRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <SecureRoute>
        <DashboardLayer></DashboardLayer>
      </SecureRoute>
    ),
    children: [
      {
        path: 'all-products',
        element: (
          <SecureRoute>
            <AllProducts></AllProducts>
          </SecureRoute>
        ),
      },
      {
        path: 'add-product',
        element: (
          <SecureRoute>
            <AddProduct></AddProduct>
          </SecureRoute>
        ),
      },
    ],
  },
]);

export default router;
