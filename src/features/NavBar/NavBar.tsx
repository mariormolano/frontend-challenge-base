"use server";
import "./NavBar.css";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import LoginIcon from "./LoginIcon/LoginIcon";

const NavBar = (): React.ReactElement => {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Image src={Logo} alt="Logo" width={164} height={42} />
        </li>
        <li>Popular</li>
        <li>Favorites</li>
      </ul>
      <LoginIcon />
    </nav>
  );
};

export default NavBar;
