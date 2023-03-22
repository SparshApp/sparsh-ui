import "../styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SparshApp",
  description: "SparshApp is a boilerplate for Next.js and TypeScript.",
  openGraph: {
    title: "SparshApp",
    description: "SparshApp is a boilerplate for Next.js and TypeScript.",
    url: "https://sparshapp.com",
    siteName: "SparshApp",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
