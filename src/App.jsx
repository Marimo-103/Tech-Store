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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/product/details" element={<ProductInside />} />
      <Route path="/contact/us" element={<Contact />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
