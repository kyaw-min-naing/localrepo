import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Navbar from "./components/Navbar";
import Cart from "./Pages/Cart";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/products"
          element={isAuthenticated ? <ProductPage /> : <Navigate to="/login" />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </Router>
  );
};

export default App;
