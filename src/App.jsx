import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Pages/Home";
import ProductInside from "./Pages/ProductInside";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import About from "./Pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/product/details" element={<ProductInside />} />
      <Route path="/contact/us" element={<Contact />} />
      <Route path="/about/us" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
