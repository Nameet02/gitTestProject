import React from "react";
import HomePage from "./pages/HomePage";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Layout from "./components/layoutComponents/Layout";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/login" element={<Layout><LoginPage /></Layout>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
