import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";

const font= Rajdhani({
  weight: ['300','400','500','600','700'],
  subsets:['latin']
})


export const metadata: Metadata = {
  title: "Cyber Moon",
  description: "Designing Futures, Coding Dreams – Welcome to Cyber Moon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}  
      </body>
    </html>
  );
}
