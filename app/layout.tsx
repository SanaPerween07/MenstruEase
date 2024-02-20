import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import Dashbody from "@/components/Dashbody";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MenstruEase",
  description: "Generated by create next app",
};

export default function RootLayout() {
  return (
      <body>
        <HeaderTop/>
        <Dashbody/>
        <Footer/>
      </body>
  );
}