import NavBar from "@/features/NavBar/NavBar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QUICKBET Movies",
  description:
    "QUICKBET Movies is a app to find your favorite movies, you can search for any movie and get all the information about it and add it to your favorite list.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
