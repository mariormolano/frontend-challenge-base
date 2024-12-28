"use server";

//import { revalidatePath } from "next/cache";
//import { redirect } from "next/navigation";

//export function Login(formData: FormData): void {
export function Login(): void {
  //const supabase = await CreateClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get("email") as string,
  //   password: formData.get("password") as string,
  // };
  //const { error } = await supabase.auth.signInWithPassword(data);
  // if (error) {
  //   redirect("/");
  // }
  // revalidatePath("/", "layout");
  // redirect("/home");
}

//export function Signup(formData: FormData): void {
export function Signup(): void {
  //const supabase = await CreateClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get("email") as string,
  //   password: formData.get("password") as string,
  // };
  // const { error } = await supabase.auth.signUp(data);
  // if (error) {
  //   redirect("/"); // redirect("/");
  // }
  // revalidatePath("/", "layout");
  // redirect("/home");
}
