"use client";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { useStore } from "exome/react";
import { eventsStore } from "@/core/storage/events.store";
import { authStore } from "@/core/storage/auth.store";
import { Avatar } from "@mui/material";

const NavBar = (): JSX.Element => {
  const { openModal } = useStore(eventsStore);
  const { session } = useStore(authStore);
  return (
    <nav>
      <ul>
        <li>
          <Image src={Logo} alt="Logo" width={164} height={42} />
        </li>
        <li>Popular</li>
        <li>Favorites</li>
      </ul>
      <picture onClick={openModal}>
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
