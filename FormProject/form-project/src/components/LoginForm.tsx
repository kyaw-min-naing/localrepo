import React, { useState } from "react";
import "../App.css";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import { Link, useNavigate } from "react-router-dom";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setMessage("Login Successful");
        onLogin();
        navigate("/products");
      } else {
        setMessage("Login Failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("Login Failed");
    }
  };

  return (
    <form onSubmit={handleLogin} className="form-container">
      <h2>Login</h2>
      <UsernameInput
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <PasswordInput
        value={password}
        onChange={(e) => setPassowrd(e.target.value)}
        placeholder="Password"
      />

      <button type="submit">Login</button>
      {message && <p className="message">{message}</p>}
      <Link to="/register" className="form-link">
        Register
      </Link>
    </form>
  );
};

export default LoginForm;
