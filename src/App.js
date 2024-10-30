import React from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

// store
import CartProvider, {
  ConfirmProvider,
  ShowCartProvider,
} from "./store/CartProvider";

// pages
import RootLayout from "./components/Layout/RootLayout";
import Home from "./pages/Home";
import Order from "./pages/Order";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
    </Route>
  )
);

const App = () => {
  return (
    <CartProvider>
      <ShowCartProvider>
        <ConfirmProvider>
          <RouterProvider router={router} />
        </ConfirmProvider>
      </ShowCartProvider>
    </CartProvider>
  );
};

export default App;
