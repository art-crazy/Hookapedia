import {Geist, Geist_Mono} from "next/font/google";
import "@/styles/theme.config.scss";
import "@/styles/globals.scss";
import {LayoutWrapperUI} from "@/components/hoc";
import Header from "@/components/Header";
import React from "react";
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika";
import {siteConfig} from "@/config/site";
import AgeGate from "@/components/AgeGate/AgeGate";

export {metadata} from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <YandexMetrika />
      <AgeGate>
        <LayoutWrapperUI
            HeaderChild={Header}
            siteName={siteConfig.metadata.name}>{children}
        </LayoutWrapperUI>
      </AgeGate>
      </body>
    </html>
  );
}
