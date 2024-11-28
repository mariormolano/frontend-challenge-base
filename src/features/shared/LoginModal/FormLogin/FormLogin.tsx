"use client";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Login, Signup } from "../actions";
import { useStore } from "exome/react";
import { eventsStore } from "@/core/storage/events.store";

const FormLogin = (): JSX.Element => {
  const { showPassword, setShowPassword } = useStore(eventsStore);
  const { slide } = useStore(eventsStore);
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
          onClick={() => setShowPassword(showPassword === "password")}
          className="showpassword"
        >
          {showPassword === "password" ? <VisibilityOff /> : <Visibility />}
        </div>
      </span>
      <button className="submitButton" formAction={slide ? Login : Signup}>
        {slide ? "Log In with Supabase" : "Sign Up with Supabase"}
      </button>
    </form>
  );
};

export default FormLogin;
