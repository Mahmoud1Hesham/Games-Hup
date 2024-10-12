import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import bgc from './assets/wraper.png'
import Navbar from "./_components/navbar/page";
export const metadata: Metadata = {
  title: "Games Hup",
  description: "Welcome to a free online games hup!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased relative px-24` }
      >
        <header>
          <Image src={bgc} alt="background" className="w-full h-[30vh] object-cover"/>
        </header>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
