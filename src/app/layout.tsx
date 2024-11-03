import type { Metadata } from "next";
import "./globals.css";
import { playFont } from "./fonts/fontsConfig";


export const metadata: Metadata = {
  title: "Love and Pain",
  description: "Developed by Papic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playFont.className} tracking-wider antialiased h-screen overflow-hidden text-gray-700`}
      >
        <div className="h-screen overflow-hidden overflow-y-scroll">
          {children}
        </div>
      </body>
    </html>
  );
}
