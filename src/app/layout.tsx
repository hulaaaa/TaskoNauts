import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
const montserrat = Montserrat({ subsets: ["latin"] });
import { Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: "TribeTasker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Theme accentColor="lime" radius="large" appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  );
}
