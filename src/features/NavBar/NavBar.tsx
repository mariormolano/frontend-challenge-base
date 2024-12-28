"use client";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";

const NavBar = (): JSX.Element => {
  const session = true;
  return (
    <nav>
      <ul>
        <li>
          <Image src={Logo} alt="Logo" width={164} height={42} />
        </li>
        <li>Popular</li>
        <li>Favorites</li>
      </ul>
      {/* <picture onClick={openModal}> */}
      <picture>
        {session ? (
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ fontSize: 32, cursor: "pointer" }}
          />
        ) : (
          <AccountCircle sx={{ fontSize: 32, cursor: "pointer" }} />
        )}
      </picture>
    </nav>
  );
};

export default NavBar;
