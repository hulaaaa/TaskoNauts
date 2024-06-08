import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
const montserrat = Montserrat({ subsets: ["latin"] });
import { Theme } from '@radix-ui/themes';
import FlareCursor from "./FlareCursor";
import Head from "next/head";
export const metadata: Metadata = {
  title: "TaskoNauts",
  description: "Start working in the most comfortable and modern team and task management environment",
  icons: {
    icon: '/favicon-32x32.png'
  },
  openGraph: {
    title: "TaskoNauts",
    description: "Start working in the most comfortable and modern team and task management environment",
    images: 'https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg',
  },
};
function MetaTags({ metadata }: { metadata: Metadata }) {
  return (
    <Head>
      {metadata.title && <title>{metadata.title}</title>}
      {metadata.description && <meta name="description" content={metadata.description} />}
      {metadata.icons.icon && <link rel="icon" href={metadata.icons.icon} type="image/png" />}
      {metadata.openGraph.title && <meta property="og:title" content={metadata.openGraph.title} />}
      {metadata.openGraph.description && <meta property="og:description" content={metadata.openGraph.description} />}
      {metadata.openGraph.images && <meta property="og:image" content={metadata.openGraph.images} />}
      <meta property="og:type" content="website" />
    </Head>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MetaTags metadata={metadata} />
      <body className={montserrat.className}>
        <Theme accentColor="gray" radius="large" appearance="dark">
          <FlareCursor />
          {children}
        </Theme>
      </body>
    </html>
  );
}
