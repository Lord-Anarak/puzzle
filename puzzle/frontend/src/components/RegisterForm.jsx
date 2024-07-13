// components/RegisterForm.js
import React, { useState } from "react";
import axios from "axios";

const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to store registration error

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://178.128.203.28:5000/api/users/register",
        {
          name,
          email,
          password,
        }
      );
      const { token } = response.data;
      localStorage.setItem("token", token); // Store token in local storage
      onRegister(); // Trigger parent component to handle registration (e.g., redirect)
    } catch (error) {
      console.error("Registration error:", error.response.data.message);
      setError("Registration failed. Please try again."); // Set error message for display
      setEmail(""); // Clear email field
      setPassword(""); // Clear password field
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>
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
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message if error exists */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
