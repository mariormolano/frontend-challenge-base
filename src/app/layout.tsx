import NavBar from "@/features/NavBar/NavBar";
import { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QUICKBET Movies",
  description:
    "QUICKBET Movies is a app to find your favorite movies, you can search for any movie and get all the information about it and add it to your favorite list.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement => {
  return (
    <html lang="es">
      <body className={`${inter.className} ${manrope.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
