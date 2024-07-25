import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./Providers";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"], fallback: ["system-ui"] });

export const metadata: Metadata = {
  title: "Analytics",
  description: "Landing page built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          <div className="grid min-h-[100dvh] grid-cols-1 grid-rows-[1fr_auto]">
            {children}
            <Footer />
          </div>
          <Toaster offset={"1.25rem"} />
        </Providers>
      </body>
    </html>
  );
}
