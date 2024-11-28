"use client";
import { redirect } from "next/navigation";
import { useStore } from "exome/react";
import { eventsStore } from "@/core/storage/events.store";

export default function Home2(): JSX.Element {
  const { closeModal } = useStore(eventsStore);
  closeModal();
  redirect("/");
}
