import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./providers/provider";
import { pixelfy, roboto } from "@/lib/fonts";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RentHub-BTFS",
  description: "One-Stop Solution to your BTFS needs."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto} ${pixelfy}`}>
        <Provider>
          {children}
          <Toaster theme="dark" richColors />
        </Provider>
      </body>
    </html>
  );
}
