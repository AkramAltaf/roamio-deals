import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/page-not-found";
import Account from "./pages/account";
import Saved from "./pages/saved";
import Deals from "./pages/deals";
import OrderDetails from "./pages/order-details";
import Cart from "./pages/cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/deals/:productId" element={<OrderDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
