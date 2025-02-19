import type { Metadata } from "next";
import { Footer, Layout } from "nextra-theme-docs";
import { Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metadata: Metadata = {
    title: "Portfolio",
    description: "Izan Huang's portfolio",
  };

  const banner = <Banner storageKey="some-key">Banner</Banner>;
  const navbar = <Navbar />;
  const footer = <Footer>Izan Huang © {new Date().getFullYear()}</Footer>;

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          darkMode={false}
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
