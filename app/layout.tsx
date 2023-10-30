import "./globals.css";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "RELAP Landing Page",
  description: "Made with Next.js, Typescript, TailwindCSS, React Scroll and Framer Motion. Developed by Udeala 'Uncle James' Chukwuebuka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
