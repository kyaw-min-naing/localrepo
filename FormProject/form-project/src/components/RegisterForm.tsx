import React, { useState } from "react";
import "../App.css";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import { Link } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      alert("Registeration Successful");
    }
  };

  return (
    <form onSubmit={handleRegister} className="form-container">
      <h2>Register</h2>

      <UsernameInput
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <PasswordInput
        value={password}
        onChange={(e) => setPassowrd(e.target.value)}
        placeholder="Password"
      />

      <PasswordInput
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      />

      {error && <p className="error">{error}</p>}
      <button type="submit">Register</button>
      <Link to="/" className="form-link">
        Back to Login
      </Link>
    </form>
  );
};

export default RegisterForm;
