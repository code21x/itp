import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "@/components/AppBar";
import { cn } from "../lib/utils";
import { Providers } from "./providers";


const inter = Inter({ subsets: ["latin"], variable: '--font-sans', });

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
      <body className={cn(
          'h-screen bg-black',
          inter.variable,
        )}>
          <Providers>
            <AppBar />
            {children}
        </Providers>
      </body>
    </html>
  );
}
