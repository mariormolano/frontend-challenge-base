"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { CreateClient } from "@/core/utils/supabase/server";

export async function Login(formData: FormData): Promise<void> {
  const supabase = await CreateClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/");
  }

  revalidatePath("/", "layout");
  redirect("/home");
}

export async function Signup(formData: FormData): Promise<void> {
  const supabase = await CreateClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/"); // redirect("/");
  }

  revalidatePath("/", "layout");
  redirect("/home");
}
