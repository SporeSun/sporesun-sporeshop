import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer"
import Home from "./pages/Home";
import CartScreen from "./pages/CartScreen";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsPage from "./pages/ProductsPage";
import CategoryScreen from "./pages/CategoryScreen";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route index={true} path="/" element={<Home />} />
        <Route path="/cart" element={<CartScreen/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/category/:category" element={<CategoryScreen/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
       </Routes>
      <Footer/>
    </>
  );
}

export default App;