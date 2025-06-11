import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/Pages/shop";

import Login from "./components/Pages/Login";
import Footer from "./components/footer/Footer";
import Cart from "./components/Pages/Cart";
import Popular from "./components/popular/Popular";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/women" element={<Popular />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
