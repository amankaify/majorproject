import React from "react";
import "../Login/Login.css";
import { Form, Label } from "semantic-ui-react";

function Signup({ handleToggle }) {
  const handleSignup = () => {};

  return (
    <>
      <div className="homecontentPanel">
        <Form className="formPanel">
          <Label>Please Fill Details:</Label>
          <input placeholder="First Name" type="text" maxLength={20} />
          <input placeholder="Last Name" type="text" maxLength={20} />
          <input placeholder="Email Address" type="email" maxLength={40} />
          <input placeholder="Mobile Number" type="tel" maxLength={10} />
          <input placeholder="Password" type="password" maxLength={40} />
          <input
            placeholder="Re-Enter Password"
            type="password"
            maxLength={40}
          />
          <div>
            <button
              className="submitButton"
              type="submit"
              onClick={handleSignup}
            >
              Sign Up
            </button>
            <button className="toggleForm" onClick={handleToggle}>
              Login
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Signup;
