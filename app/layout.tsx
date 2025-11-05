import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayurveda Wellness",
  description:
    "Educational resources and contact information for the Ayurveda Wellness clinic.",
};

/**
 * Root layout used by every page in the application.
 * - Sets the language attribute for accessibility.
 * - Applies global typography styles defined in `app/globals.css`.
 * - Renders child routes via the `children` prop provided by Next.js.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
