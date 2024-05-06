import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philip Wisner | Web Developer",
  description: "I'm a JavaScript Full Stack Web Developer & Designer. This website serves as my portfolio and hub for all the projects I am working on.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
