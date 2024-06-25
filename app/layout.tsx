import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import bgImage from "@/public/europe.jpg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <div className="main-content">{children}</div>
        <Image
          className="main-background"
          src={bgImage}
          alt={"background"}
          quality={100}
          fill={true}
          sizes="100vw"
          objectFit="cover"
          placeholder="blur"
        />
      </body>
    </html>
  );
}
