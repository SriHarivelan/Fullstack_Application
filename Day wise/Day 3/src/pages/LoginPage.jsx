import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../assets/css/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
  //   // Retrieve user data from localStorage
  //   const userData = JSON.parse(localStorage.getItem('userData'));
  //   if (userData && email === userData.email && password === userData.password) {
  //     // Login successful
      navigate("/land");
  //   } else {
  //     // Login failed
  //     alert("Invalid email or password");
  //   }
  };

  return (
    <div className="lo">
      <div className="container">
        <form className="login-form">
          <h1>Login</h1>
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input
              type="test"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <center>
            <Button
              type="button"
              disabled={!email || !password}
              onClick={handleLogin}
            >
              Login
            </Button>
          </center>
          <br />
          <div style={{ color: "white" }}>
            <Link to="/sig">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
