import "./LoginForm.css";

// Packages
import { useState } from "react";
import axios from "axios";

const LoginForm = ({ setModalContent, updateToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [waitLogin, setWaitLogin] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setWaitLogin(true);
    setErrorLogin("");
    if (!email || !password) {
      setErrorLogin("Please complete all fields !");
      setWaitLogin(false);
    } else {
      //Everything is ok, send log in
      try {
        const userInfo = { email, password };
        const response = await axios.post(
          `https://site--marvel-backend--22v2k5v8dwyb.code.run/user/login`,
          userInfo
        );
        if (response.data?.token) {
          updateToken(response.data.token);
          setModalContent(false);
          document.body.style.overflow = "unset";
          setWaitLogin(false);
        } else {
          setErrorLogin("aled !? The dev' doesnt know why you aren't log");
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 400) {
          setErrorLogin("Email or Password is wrong");
          setWaitLogin(false);
        }
      }
    }
  };
  return (
    <>
      <p className="title-form">Log in</p>
      {errorLogin && <p className="error--login">{errorLogin}</p>}
      <form className="login--form" onSubmit={handleSubmit}>
        <label forhtml="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          autoComplete="off"
          onChange={handleEmailChange}
        />
        <label forhtml="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          autoComplete="off"
          onChange={handlePasswordChange}
        />
        <button
          className={`form--login-button ${waitLogin ? "forbidden" : "ready"}`}
          type="submit"
          disabled={waitLogin ? true : false}
        >
          Log In
        </button>
      </form>

      <p
        className="not-account--button"
        onClick={() => {
          // switch modal type from login to signup
          setModalContent("signup");
        }}
      >
        Don't have an account? Sign Up
      </p>
    </>
  );
};

export default LoginForm;
