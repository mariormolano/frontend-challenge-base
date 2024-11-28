import RootLayout from "./layout";

import NavBar from "@/features/home/NavBar/NavBar";
import Header from "@/features/home/Header/Header";
import Main from "@/features/home/Main/Main";
import LoginModal from "@/features/shared/LoginModal/LoginModal";

export default function Home(): JSX.Element {
  return (
    <RootLayout>
      <NavBar />
      <Header />
      <Main />
      <LoginModal />
    </RootLayout>
  );
}
