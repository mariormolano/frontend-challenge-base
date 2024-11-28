"use client";
import MovieBanner from "./MovieBanner/MovieBanner";
import { useStore } from "exome/react";
import { authStore } from "@/core/storage/auth.store";
import { useEffect } from "react";

const Header = (): JSX.Element => {
  const { getSession } = useStore(authStore);

  useEffect(() => {
    getSession();
  }, [getSession]);

  const title = "Lorem ipsum dolor sit";
  const desciption =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut luctus nulla. Sed sollicitudin fermentum maximus. Sed congue velit gravida justo mattis, quis cursus purus rhoncus. Donec lacus ex, auctor ullamcorper";
  return (
    <header>
      <MovieBanner title={title} description={desciption} value={50} />
    </header>
  );
};

export default Header;
