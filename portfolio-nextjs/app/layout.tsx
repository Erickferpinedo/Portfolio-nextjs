import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erick Pinedo",
  description: "I’m Erick Pinedo, a Full Stack Developer, Data Analyst, and IT Support Specialist currently studying cybersecurity. I specialize in building scalable web solutions, analyzing data for actionable insights, and delivering efficient technical support. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
