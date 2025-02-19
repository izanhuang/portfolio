// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Izan Huang's portfolio",
};

const banner = <Banner storageKey="some-key">Banner</Banner>;
const navbar = (
  <Navbar
    logo={<b>Izan Huang</b>}
    projectLink="https://github.com/izanhuang/portfolio"
  />
);
const footer = <Footer>Izan Huang © {new Date().getFullYear()}</Footer>;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/izanhuang/portfolio"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
