"use client";
import { Avatar } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
const LoginIcon: React.FC = () => {
  const session = true;
  return (
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
  );
};

export default LoginIcon;
