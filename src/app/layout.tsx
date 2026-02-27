import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: `${site.name} - Portfolio`,
  description:
    "Software Engineer with over 12 years of experience across full-stack development, backend services, and cloud-based solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[var(--foreground)]">
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  var theme = localStorage.getItem('theme');
  var preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (theme === 'dark' || (!theme && preferDark))
    document.documentElement.classList.add('dark');
  else
    document.documentElement.classList.remove('dark');
})();
`,
          }}
        />
        <div
          className="fixed inset-0 -z-10 theme-transition bg-[var(--background)] [background-image:radial-gradient(circle,var(--dot-color)_1px,transparent_1px)] [background-size:30px_30px]"
          aria-hidden
        />
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
