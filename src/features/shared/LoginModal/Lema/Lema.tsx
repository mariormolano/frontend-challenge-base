"use client";
import Image from "next/image";
import SingImage from "@/assets/images/sing.png";
import LoginImage from "@/assets/images/login.png";
import { useStore } from "exome/react";
import { eventsStore } from "@/core/storage/events.store";

const Lema = (): JSX.Element => {
  const { slide } = useStore(eventsStore);
  const singTitle = "Welcome to Quickbet Movies!";
  const loginTitle = "Welcome back to Quickbet Movies!";
  const singLema =
    "🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!";
  const loginLema =
    "🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!";

  return (
    <aside>
      <h1>{slide ? loginTitle : singTitle}</h1>
      <p>{slide ? loginLema : singLema}</p>
      <picture>
        <Image src={slide ? LoginImage : SingImage} alt="Sing" />
      </picture>
    </aside>
  );
};

export default Lema;
