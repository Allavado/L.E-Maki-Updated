import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import "./admin-panel.css";

const AdminPanel: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userAdmin, setUserAdmin] = useState(false);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUsername(user.name);
      setUserAdmin(user.isAdmin || false);
      setIsLoggedIn(true);
    }
  }, []);

  const users = [
    {
      username: "admin",
      password: "allavado",
      name: "Admin Jake",
      isAdmin: true,
    },

    {
      username: "admin",
      password: "bumanlag",
      name: "Admin Aira",
      isAdmin: true,
    },
  ];

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user) {
      alert("Login successful!");
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      setIsLoggedIn(true);
      setError("");
      window.location.reload();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="admin-panel p-5 m-5">
      {isLoggedIn ? (
        <div className="admin-content">
          <Dashboard />
        </div>
      ) : (
        <div className="container d-flex justify-content-center align-items-center">
          <div className="login-form p-5 m-5">
            <h2 className="text-center">Admin Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-3"
              />
              <button type="submit" className="btn btn-danger btn-block">
                Login
              </button>
              {error && (
                <p className="text-danger mt-3">
                  <i className="fas fa-exclamation-circle"></i> {error}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
