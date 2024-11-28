import { useStore } from "exome/react";
import { eventsStore } from "@/core/storage/events.store";

const SlideButton = (): JSX.Element => {
  const { slide, sing, login } = useStore(eventsStore);

  return (
    <div className="slide">
      <span
        className={slide ? "not-selected" : "selected"}
        onClick={sing}
        id="sing"
      >
        Sign up
      </span>
      <span
        className={slide ? "selected" : "not-selected"}
        onClick={login}
        id="login"
      >
        Log In
      </span>
    </div>
  );
};

export default SlideButton;
