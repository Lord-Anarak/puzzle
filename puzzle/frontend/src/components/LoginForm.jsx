// components/LoginForm.js
import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to store login error

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://178.128.203.28:5000/api/users/login",
        {
          email,
          password,
        }
      );
      const { token } = response.data;
      localStorage.setItem("token", token); // Store token in local storage
      onLogin(); // Trigger parent component to handle login (e.g., redirect)
    } catch (error) {
      console.error("Login error:", error.response.data.message);
      setError("Invalid email or password"); // Set error message for display
      setEmail(""); // Clear email field
      setPassword(""); // Clear password field
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
