import type { Metadata } from "next";
import "./globals.css";
import FillFormsButton from "@/components/FillFormsButton";

export const metadata: Metadata = {
  title: "Otovo Care: Complete support and maintenance for solar installations",
  description: "Reliable support for your solar installation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        {children}
        <FillFormsButton />
      </body>
    </html>
  );
}
