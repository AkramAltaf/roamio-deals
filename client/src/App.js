import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/page-not-found";
import Account from "./pages/account";
import Saved from "./pages/saved";
import Deals from "./pages/deals";
import Cart from "./pages/cart";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import OrderDetails from "./pages/order-details";

function App() {
  const user = false;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/deals/:id" element={<OrderDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
