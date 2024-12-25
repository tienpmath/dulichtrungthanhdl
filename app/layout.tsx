import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Main } from "@/components/craft";
import { mainMenu, contentMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import Logo from "../public/images/logo.jpg";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Giá Thuê xe ô tô Đà Lạt 4,5,7,16,29 chỗ tham quan du lịch Đà Lạt",
  description:
    "Giá Thuê xe ô tô Đà Lạt 4,5,7,16,29. ☎️ 0918 638 068 Thuê xe du lịch Đà Lạt đón tiễn sân bay, Xe ô tô 7 chỗ, 900.000 VNĐ/ngày, Xe 16 chỗ, 1.300.000 VNĐ/ngày, Xe ô tô 29 chỗ, 2.500.000 VNĐ/ngày, tham quan nội, ngoại thành 1/2 ngày giá 600.000đ ",
  openGraph: {
    title: "Giá Thuê xe ô tô Đà Lạt 4,5,7,16,29 chỗ tham quan du lịch Đà Lạt",
    description:
      "Giá Thuê xe ô tô Đà Lạt 4,5,7,16,29. ☎️ 0918 638 068 Thuê xe du lịch Đà Lạt đón tiễn sân bay, Xe ô tô 7 chỗ, 900.000 VNĐ/ngày, Xe 16 chỗ, 1.300.000 VNĐ/ngày, Xe ô tô 29 chỗ, 2.500.000 VNĐ/ngày, tham quan nội, ngoại thành 1/2 ngày giá 600.000đ ",
    images: "/images/logo.jpg",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};
// Revalidate content every hour
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-background",
        "border-b",
        "fade-in",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">Thuê xe ô tô 7 chỗ Đà Lạt</h2>
          <Image
            src={Logo}
            alt="Logo"
            className="dark:invert"
            width={84}
            height={30.54}
          ></Image>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            <Button asChild variant="ghost" size="sm">
              <Link href="/gioi-thieu">Giới thiệu</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/lien-he">Liên hệ</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/posts">Thuê xe ô tô Đà Lạt</Link>
            </Button>
          </div>
          <Button asChild className="hidden sm:flex">
            <Link href="tel:0918638068">0918 638 068</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="dark:invert hover:opacity-75 transition-all"
              ></Image>
            </Link>
            <p>
              <Balancer>{metadata.description}</Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Website</h5>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Blog</h5>
            {Object.entries(contentMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <ThemeToggle />
          <p className="text-muted-foreground">
            © <a href="https://9d8.dev">9d8</a>. All rights reserved.
            2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
};
