import React, { useState } from "react"; 
import "../NavBar/NavBar.css";

function NavBar({ handleMoonPosition }) {
  const [loginButton, setLoginButton] = useState(true);
  const handleLoginButton = () => {
    if (loginButton === true) {
      setLoginButton(false);
    }
  };
  return (
    <>
      <div
        className={!loginButton ? "navBar active" : "navBar"}>
          <label>MOON LIGHT</label>
        {loginButton && <button onClick={() => {handleMoonPosition(); handleLoginButton()}}>
            Login
          </button>
        }
      </div>
    </>
  );
}

export default NavBar;
