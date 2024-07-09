import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Women from "./Pages/Women";
import Shop from "./Pages/Shop";
import MenFile from "./Pages/MenFile";
import Kids from "./Pages/Kids";
import Login from "./Pages/Login";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="women" element={<Women />} />
        <Route path="men" element={<MenFile />} />
        <Route path="kids" element={<Kids />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart/product" element={<ProductDetails />} />
        <Route path="product" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
