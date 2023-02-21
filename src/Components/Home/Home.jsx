import React, { useEffect, useState, useRef } from "react";
import "../Home/Home.css";
import Login from "../Login/Login";
import Moon from "../Moon/Moon";
import "../Moon/Moon.css";
import NavBar from "../NavBar/NavBar";
import Signup from "../Signup/Signup";

function Home() {
  const [moonPosition, setMoonPosition] = useState(false);
  const [moonSize, setMoonSize] = useState(2.5);
  const [moonShake, setMoonShake] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(true);

  const handleToggle = () => {
    if (toggleLogin === true) {
      setToggleLogin(false);
      console.log("SignUp Visible");
    } else {setToggleLogin(true);
      console.log("Login Visible");}
  };
  const handleMoonPosition = () => {
    if (moonPosition === true) {
      setMoonPosition(false);
    } else {
      setMoonPosition(true);
    }
  };

  const [moonColor, setMoonColor] = useState(0x253535);

  const moonError = () => {
    setMoonColor(0x253535);
  };

  useInterval(() => {
    if (moonPosition === true && moonSize <= 3.5) {
      setMoonSize((moonSize) => moonSize + 0.03);
    } else if (moonPosition !== true && moonSize >= 2.5) {
      setMoonSize((moonSize) => moonSize - 0.03);
    }
  }, 2);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  return (
    <>
      <div>
        <NavBar handleMoonPosition={handleMoonPosition} />
        <div className={moonPosition ? "moonTextDiv active" : "moonTextDiv"}>
          <div className={moonShake ? "moonShake active" : "moonShake"}>
            {toggleLogin && (
              <Login
                moonError={moonError}
                setMoonColor={setMoonColor}
                setMoonShake={setMoonShake}
                handleToggle={handleToggle}
              />
            )}
            {!toggleLogin && <Signup handleToggle={handleToggle} />}
            <Moon moonSize={moonSize} moonColor={moonColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
