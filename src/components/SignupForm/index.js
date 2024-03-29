import "./SignupForm.css";

// Packages
import { useState } from "react";
import axios from "axios";

const SignupForm = ({ setModalContent, updateToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorSignup, setErrorSignUp] = useState("");
  const [waitSignUp, setWaitSignUp] = useState(false);

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setWaitSignUp(true);
    setErrorSignUp("");
    if (!username || !email || !password || !confirmPassword) {
      setErrorSignUp("Please complete all fields !");
      setWaitSignUp(false);
    } else {
      if (password !== confirmPassword) {
        setErrorSignUp("Your passwords are not the same");
        setWaitSignUp(false);
      } else {
        //Everything is ok, send signup
        try {
          const userInfo = { username, email, password };
          const response = await axios.post(
            `https://site--marvel-backend--22v2k5v8dwyb.code.run/user/signup`,
            userInfo
          );

          if (response.data?.token) {
            updateToken(response.data.token);
            setModalContent(false);
            document.body.style.overflow = "unset";
            setWaitSignUp(false);
          } else {
            setErrorSignUp("aled !? The dev' doesnt know why you aren't log");
          }
        } catch (error) {
          if (error.response.status === 409) {
            setErrorSignUp("Email already use !");
            setWaitSignUp(false);
          }
        }
      }
    }
  };
  return (
    <>
      <p className="title-form">Welcome ! Please Sign Up</p>
      {errorSignup && <p className="error--signup">{errorSignup}</p>}
      <form className="signup--form" onSubmit={handleSubmit}>
        <label forhtml="username">Username</label>
        <input
          name="username"
          type="text"
          value={username}
          autoComplete="off"
          onChange={handleUsernameChange}
        />
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
        <label forhtml="confirmPassword">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          autoComplete="off"
          onChange={handleConfirmPasswordChange}
        />
        <button
          className={`form--signup-button ${
            waitSignUp ? "forbidden" : "ready"
          }`}
          type="submit"
          disabled={waitSignUp ? true : false}
        >
          Sign Up
        </button>
      </form>

      <p
        className="already-account--button"
        onClick={() => {
          // switch modal type from signup to login
          setModalContent("login");
        }}
      >
        Already an Account ? Just Log In !
      </p>
    </>
  );
};
export default SignupForm;
