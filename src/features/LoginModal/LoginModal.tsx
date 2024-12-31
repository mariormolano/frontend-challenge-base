"use client";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";

import SlideButton from "./SlideButton/SlideButton";
import Lema from "./Lema/Lema";

import FormLogin from "./FormLogin/FormLogin";
import FormLogout from "./FormLogout/FormLogout";

const LoginModal = (): JSX.Element => {
  const session = false;

  const modalSatate = true;

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
