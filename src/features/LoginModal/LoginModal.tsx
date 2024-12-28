"use client";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";

import { useStore } from "exome/react";
import SlideButton from "./SlideButton/SlideButton";
import Lema from "./Lema/Lema";

import { eventsStore } from "@/core/storage/events.store";
import FormLogin from "./FormLogin/FormLogin";
import FormLogout from "./FormLogout/FormLogout";

const LoginModal = (): JSX.Element => {
  const { modalSatate } = useStore(eventsStore);
  const session = false;

  return modalSatate ? (
    <dialog id="authform" className="LoginModal">
      <article>
        <section>
          <div className="back">
            <p>
              <ArrowCircleLeft /> Back
            </p>
          </div>
          {session ? null : <SlideButton />}
          <div className="logform">
            {session ? <FormLogout /> : <FormLogin />}
          </div>
          <div className="contact">
            For any questions, reach out to support@Quickbetdmovies.com
          </div>
        </section>
        <Lema />
      </article>
    </dialog>
  ) : (
    <></>
  );
};

export default LoginModal;