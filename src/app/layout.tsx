import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import bgc from './assets/wraper.png'
import Navbar from "./_components/navbar/page";
import TopBtn from "./_components/topbtn/page";
export const metadata: Metadata = {
  title: "Games Hup",
  description: "Welcome to a free online games hup!",
//   icons: <link rel="icon" href="import logo from '../../assets/logo-sm.png'
// "></link>
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative` }
      >
        <header>
          <Image src={bgc} alt="background" className="w-full h-[30vh] object-cover"/>
        </header>
        <Navbar/>
        {children}
        <TopBtn/>
      </body>
    </html>
  );
}
