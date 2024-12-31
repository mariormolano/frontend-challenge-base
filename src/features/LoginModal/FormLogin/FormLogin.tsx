"use client";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
//import { useStore } from "exome/react";

const FormLogin = (): JSX.Element => {
  // const { showPassword, setShowPassword } = useStore(eventsStore);
  // const { slide } = useStore(eventsStore);
  const [showPassword, setShowPassword] = useState("password");
  const [slide] = useState(false);
  return (
    <form>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
      />
      <span>
        <input
          type={showPassword}
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <div
          onClick={() =>
            setShowPassword(showPassword === "password" ? "text" : "password")
          }
          className="showpassword"
        >
          {showPassword === "password" ? <VisibilityOff /> : <Visibility />}
        </div>
      </span>
      <button className="submitButton">{slide ? "Log In " : "Sign Up "}</button>
    </form>
  );
};

export default FormLogin;
