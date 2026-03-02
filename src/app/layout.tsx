import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Otovo Care: Komplett support og vedlikehold for solcelleanlegg",
  description: "Pålitelig støtte for solcelleanlegget ditt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className="antialiased">{children}</body>
    </html>
  );
}
