import React, { useContext, useEffect, useState } from "react";
import "../assets/css/Login.css";
import { mainData } from "../App";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const { auth, setAuth } = useContext(mainData);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const usr = "admin";
  const psw = "admin";

  const checker = () => {
    if (usr === username && psw === password) {
      // Successful login
      setAuth(true);
    } else {
      window.alert("Incorrect login information, Please try again");
    }
  };

  const submitButton = () => {
    checker();
  };

  const enterKey = (e) => {
    if (e.key === "Enter") {
      submitButton();
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>Login / SignIn</h1>
          <input
            type="text"
            value={username}
            placeholder="username"
            className="input"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            className="input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onKeyDown={enterKey}
          />
        </div>
        <div className="button-container">
          <div>
            <button
              onClick={() => {
                submitButton();
              }}
              className="button button-35"
            >
              Submit
            </button>
            <button
              onClick={() => {
                location.reload();
              }}
              className="button button-35"
            >
              Reset
            </button>
          </div>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ paddingTop: "5%" }}>
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google logo"
                  />
                </div>
                <p className="btn-text">
                  <b>Sign in with google</b>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
