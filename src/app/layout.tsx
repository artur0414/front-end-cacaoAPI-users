// Code: Layout component for the app

import type { Metadata } from "next";
import "./globals.css";
import { lato } from "./fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={` ${lato.className} antialiased w-screen h-screen flex justify-center items-center overflow-hidden dark:bg-custom-black`}
      >
        {children}
      </body>
    </html>
  );
}
