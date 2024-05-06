import type { Metadata } from "next";
import "./globals.css";
import SideNav from "@/components/SideNav";
import { heebo, openSans } from "@/fonts/fonts";

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
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={`${heebo.variable} ${openSans.variable}`}>
        <SideNav />
        {children}
      </body>
    </html >
  );
}
