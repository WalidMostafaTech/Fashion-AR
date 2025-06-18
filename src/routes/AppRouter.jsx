import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/ContactUs/ContactUs";
import BlogDetails from "../pages/Blog/BlogDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetails from "../pages/CategoriesPage/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "product-details",
        element: <ProductDetails />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog-details",
        element: <BlogDetails />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
