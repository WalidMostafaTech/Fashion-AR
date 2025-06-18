import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";
import LoaderPage from "../components/layouts/LoaderPage/LoaderPage";

const Home = lazy(() => import("../pages/Home/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const CategoriesPage = lazy(() =>
  import("../pages/CategoriesPage/CategoriesPage")
);
const Blog = lazy(() => import("../pages/Blog/Blog"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));
const BlogDetails = lazy(() => import("../pages/Blog/BlogDetails"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const ProductDetails = lazy(() =>
  import("../pages/ProductDetails/ProductDetails")
);
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Checkout = lazy(() => import("../pages/Checkout/Checkout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories", element: <CategoriesPage /> },
      { path: "product-details", element: <ProductDetails /> },
      { path: "blog", element: <Blog /> },
      { path: "blog-details", element: <BlogDetails /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<LoaderPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
