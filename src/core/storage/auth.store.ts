import { Exome } from "exome";
import { CreateClient } from "@/core/utils/supabase/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const supabase = CreateClient();

class AuthStore extends Exome {
  public error: null | string = null;
  public session: boolean = false;

  public async getSession(): Promise<void> {
    //const session = await supabase.auth.getSession();

    await supabase.auth.getSession().then(({ data }) => {
      if (data) {
        if (data.session) {
          this.session = true;
        } else {
          this.session = false;
        }
      }
    });
  }

  public async logout(): Promise<void> {
    const { error } = await supabase.auth.signOut();

    if (error) {
    }

    this.session = false;
    revalidatePath("/", "layout");
    redirect("/");
  }
}

export const authStore = new AuthStore();
