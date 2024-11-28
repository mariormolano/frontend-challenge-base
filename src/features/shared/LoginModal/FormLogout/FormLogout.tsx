import { useStore } from "exome/react";
import { authStore } from "@/core/storage/auth.store";

const FormLogout = (): JSX.Element => {
  const { logout } = useStore(authStore);
  return (
    <form>
      <button className="submitButton" formAction={logout}>
        Logout
      </button>
    </form>
  );
};

export default FormLogout;
