import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/ui/navbar";
import { Cursor } from "@/components/ui/cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AnimatedBackground } from "@/components/ui/animated-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saqalain-portfolio.vercel.app"), // Placeholder URL
  title: "Mohammed Saqalain | MBA Graduate - Marketing & Finance",
  description: "Portfolio of Mohammed Saqalain, an MBA Graduate utilizing skills in Marketing and Finance.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saqalain-portfolio.vercel.app",
    title: "Mohammed Saqalain | MBA Graduate",
    description: "Portfolio of Mohammed Saqalain, an MBA Graduate specializing in Marketing and Finance.",
    siteName: "Mohammed Saqalain Portfolio",
    images: [
      {
        url: "/images/profile-placeholder.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Saqalain Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Saqalain | MBA Graduate",
    description: "Portfolio of Mohammed Saqalain, an MBA Graduate specializing in Marketing and Finance.",
    images: ["/images/profile-placeholder.png"],
    // creator: "@twitter_handle", // Removed outdated handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Cursor />
          <ScrollProgress />
          <AnimatedBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
