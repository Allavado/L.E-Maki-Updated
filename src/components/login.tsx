import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "./App.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const users = [
    {
      email: "jakeallavado8@gmail.com",
      password: "allavado8",
      name: "Jake Allavado",
    },
    {
      email: "airabumanlag@gmail.com",
      password: "bumanlag",
      name: "Aira Bumanlag",
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
    const isValidPassword = password.trim() !== "";

    if (!isValidEmail || !isValidPassword) {
      const emailField = document.getElementById("email");
      const passwordField = document.getElementById("password");

      if (!isValidEmail) {
        emailField?.classList.add("is-invalid");
      } else {
        emailField?.classList.remove("is-invalid");
      }

      if (!isValidPassword) {
        passwordField?.classList.add("is-invalid");
      } else {
        passwordField?.classList.remove("is-invalid");
      }

      return;
    }

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login successful!");
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/menu");
      window.location.reload();
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="container-xxl position-relative p-0">
      <div
        className="container-xxl d-flex justify-content-center align-items-center py-5 bg-dark hero-header"
        style={{ height: "100vh" }}
      >
        <div className="card w-50">
          <div className="text-center border-0 pt-3">
            <h5 className="section-title ff-secondary fs-2 text-center text-danger fw-normal">
              Log-in
            </h5>
          </div>
          <div className="card-body">
            <form
              onSubmit={handleSubmit}
              className="needs-validation"
              noValidate
            >
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="user"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
                <div className="invalid-feedback">
                  Please enter a valid email.
                </div>
              </div>
              <div className="form-floating position-relative">
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      const passwordField = document.getElementById("password");
                      if (passwordField) {
                        const type =
                          passwordField.getAttribute("type") === "password"
                            ? "text"
                            : "password";
                        passwordField.setAttribute("type", type);
                      }
                    }}
                  >
                    Show
                  </button>
                </div>
                <div className="invalid-feedback">
                  Please enter a valid password.
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                className="col-5 btn btn-danger mt-3 w-100"
              >
                Login
              </button>

              <a className="justify-content-center d-flex py-2">
                <Link to="/signup">Don't have an account?</Link>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
