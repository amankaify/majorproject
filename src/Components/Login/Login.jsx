import React, { useState } from "react";
import { Form, Label } from "semantic-ui-react";
import "../Login/Login.css";

function Login({ setMoonColor, setMoonShake, handleToggle }) {
  const [userId, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [type, setType] = useState("password");
  const [ct, setCt] = useState(0);
  const [inputError,setInputError] = useState(false);

  function handleUserID(e) {
    let item = e.target.value;
    setUserID(item);
    setInputError(false);
  }
  function handlePassword(e) {
    let item = e.target.value;
    setUserPassword(item);
    setInputError(false);
  }

  const handleSet = () => {
    if (ct === 1) {
      console.log("Moon is green")
      setMoonColor(0x253535);
      setMoonShake(false);
      setUserID("");
      setType("Password;"); 
      setUserPassword("");
      setCt(0);
    }
  };

  const handleLogin = () => {
    if (userId.length < 8 || userPassword.length < 6) {
      console.log("Moon is red")
      setMoonColor(0x753535);
      setMoonShake(true);
      setInputError(true);
      setUserID("Invalid User ID !");
      setUserPassword("Incorrect Password !");
      setType("text");
      setCt(1);
    } else {
      console.log(userId + " " + userPassword);
    }
  };

  return (
    <>
      <div className="homecontentPanel">
        <Form className={inputError ? "formPanel active" : "formPanel"}>
          <Label>Login Details:</Label>
          <input
            placeholder="Login ID"
            type="text"
            maxLength={40}
            minLength={8}
            onChange={handleUserID}
            value={userId}
            onClick={handleSet}
          />
          <input
            placeholder="Password"
            type={type}
            maxLength={40}
            onChange={handlePassword}
            value={userPassword}
            onClick={handleSet}
          />
          <div>
            <button
              className="submitButton"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
            <button className="toggleForm" onClick={handleToggle}>
              Sign Up
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
